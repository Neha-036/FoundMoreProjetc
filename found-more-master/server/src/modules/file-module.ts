import { S3 } from "aws-sdk"
import * as fs from "fs"
import * as mime from "mime-types"
import * as uuid from "uuid"
import { FileCreateInput, FileWhereUniqueInput, Prisma } from "../generated/prisma"
import { FileUpload } from "../typings"
import { ServerError } from "./error-module"

const s3 = new S3({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
})

export async function upload(fileUploadPromise: Promise<FileUpload>) {

  if (!fileUploadPromise) return null

  const file = await fileUploadPromise
  const contentType = mime.contentType(file.mimetype) || ""

  const s3result = await s3
    .upload({
      Key: uuid.v4() + "." + mime.extension(file.mimetype),
      ACL: "public-read",
      Body: file.stream,
      Bucket: process.env.S3_BUCKET,
      ContentType: contentType,
    })
    .promise()

  return {
    bucket: s3result.Bucket,
    contentType,
    key: s3result.Key,
    location: s3result.Location,
    mimeType: file.mimetype,
    originalName: file.filename,
  } as FileCreateInput
}

export async function uploadBuffer(originalName: string, buffer: Buffer) {

  const contentType = mime.contentType(originalName)

  if (!contentType) throw new ServerError("E1601", "Unable to determine ContentType")

  const s3result = await s3
    .upload({
      Key: uuid.v4() + "." + mime.extension(contentType),
      ACL: "public-read",
      Body: buffer,
      Bucket: process.env.S3_BUCKET,
      ContentType: contentType,
    })
    .promise()

  return {
    bucket: s3result.Bucket,
    contentType,
    key: s3result.Key,
    location: s3result.Location,
    mimeType: contentType,
    originalName,
  } as FileCreateInput
}

export async function uploadFile(originalName: string, file: string) {

  const buffer = fs.readFileSync(file)

  return await uploadBuffer(originalName, buffer)
}

export async function uploadAndCreateFile(db: Prisma, fileUploadPromise: Promise<FileUpload>) {

  const uploadedFile = await upload(fileUploadPromise)

  const { id } = await db.mutation.createFile({ data: uploadedFile }, "{ id }")

  return { id } as FileWhereUniqueInput
}

export async function uploadAndCreateManyFiles(db: Prisma, fileUploadPromises: Array<Promise<FileUpload>>) {

  return await Promise.all(fileUploadPromises.map((f) => uploadAndCreateFile(db, f)))
}
