import { makeBindingClass, Options } from 'graphql-binding'
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import schema from  './generation-schema'

export interface Query {
    me: <T = User>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    storeLanguages: <T = String[]>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    brand: <T = Brand | null>(args: { where: BrandWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    brandPersonalization: <T = Brand | null>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    brands: <T = Brand[]>(args: { where?: BrandWhereInput, orderBy?: BrandOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    store: <T = Store | null>(args: { where: StoreWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stores: <T = Store[]>(args: { where?: StoreWhereInput, search?: String, orderBy?: StoreOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    storesConnection: <T = StoreConnection>(args: { where?: StoreWhereInput, search?: String, orderBy?: StoreOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    supplier: <T = Supplier | null>(args: { where: SupplierWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    suppliers: <T = Supplier[]>(args: { where?: SupplierWhereInput, orderBy?: SupplierOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    product: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    products: <T = Product[]>(args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    productCategory: <T = ProductCategory | null>(args: { where: ProductCategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    productCategories: <T = ProductCategory[]>(args: { where?: ProductCategoryWhereInput, orderBy?: ProductCategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orderTemplate: <T = OrderTemplate | null>(args: { where: OrderTemplateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orderTemplates: <T = OrderTemplate[]>(args: { where?: OrderTemplateWhereInput, filterByLanguage?: Boolean, search?: String, orderBy?: OrderTemplateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    order: <T = Order | null>(args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orders: <T = Order[]>(args: { where?: OrderWhereInput, search?: String, orderBy?: OrderOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    roles: <T = Role[]>(args: { where?: RoleWhereInput, orderBy?: RoleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    languages: <T = Language[]>(args: { where?: LanguageWhereInput, orderBy?: LanguageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    supportPage: <T = SupportPage | null>(args: { where: SupportPageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    supportPages: <T = SupportPage[]>(args: { where?: SupportPageWhereInput, orderBy?: SupportPageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notification: <T = Notification | null>(args: { id: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notifications: <T = Notification[]>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    canUpdateOwnOrderStatus: <T = Boolean>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    login: <T = AuthPayload>(args: { email: String, password: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    loginWithToken: <T = AuthPayload>(args: { loginToken: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    resetPassword: <T = Boolean>(args: { email: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    changePassword: <T = Boolean>(args: { oldPassword: String, newPassword: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    changePasswordWithToken: <T = Boolean>(args: { loginToken: String, password: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { input: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User>(args: { input: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBrand: <T = Brand>(args: { input: BrandCreateInput, logo?: Upload, backgroundImage?: Upload }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBrand: <T = Brand>(args: { input: BrandUpdateInput, where: BrandWhereUniqueInput, logo?: Upload, backgroundImage?: Upload }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    readNotification: <T = Notification>(args: { where?: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createStore: <T = Store>(args: { input: StoreCreateInput, image?: Upload, files?: Upload[] }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateStore: <T = Store>(args: { input: StoreUpdateInput, where: StoreWhereUniqueInput, image?: Upload, files?: Upload[] }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteStore: <T = Store | null>(args: { where: StoreWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSupplier: <T = Supplier>(args: { input: SupplierCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSupplier: <T = Supplier>(args: { input: SupplierUpdateInput, where: SupplierWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProduct: <T = Product>(args: { input: ProductCreateInput, images?: Upload[] }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProduct: <T = Product>(args: { input: ProductUpdateInput, where: ProductWhereUniqueInput, images?: Upload[] }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProductCategory: <T = ProductCategory>(args: { input: ProductCategoryCreateInput, images?: Upload[] }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProductCategory: <T = ProductCategory>(args: { input: ProductCategoryUpdateInput, where: ProductCategoryWhereUniqueInput, images?: Upload[] }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOrderTemplate: <T = OrderTemplate>(args: { input: OrderTemplateCreateInput, images?: Upload[] }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOrderTemplate: <T = OrderTemplate>(args: { input: OrderTemplateUpdateInput, where: OrderTemplateWhereUniqueInput, images?: Upload[] }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    setOrderTemplateOrder: <T = OrderTemplate[]>(args: { where: OrderTemplateWhereUniqueInput, direction: Direction }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orderTemplateImage: <T = File>(args: { where: OrderTemplateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOrders: <T = Order[]>(args: { orders: OrderInput[] }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOrder: <T = Order>(args: { input: OrderUpdateInput, where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSupportPage: <T = SupportPage>(args: { input: SupportPageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSupportPage: <T = SupportPage>(args: { input: SupportPageUpdateInput, where: SupportPageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSupportPage: <T = SupportPage>(args: { where: SupportPageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    brandExport: <T = File>(args: { where: BrandWhereUniqueInput, type: BrandExportType }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    brandImport: <T = Boolean>(args: { excel?: Upload }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    partialImport: <T = Boolean>(args: { domain: String, excel?: Upload }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    notifications: <T = NotificationSubscriptionPayload | null>(args: { where?: NotificationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    orderTemplates: <T = OrderTemplateSubscriptionPayload | null>(args: { where?: OrderTemplateSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Binding {
  query: Query
  mutation: Mutation
  subscription: Subscription
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
  delegateSubscription(fieldName: string, args?: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(...args): T
}

export const Binding = makeBindingClass<BindingConstructor<Binding>>({ schema })

/**
 * Types
*/

export type OrderTemplateOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC' |
  'sortIndex_ASC' |
  'sortIndex_DESC' |
  'defaultOrderAmount_ASC' |
  'defaultOrderAmount_DESC' |
  'minOrderAmount_ASC' |
  'minOrderAmount_DESC' |
  'maxOrderAmount_ASC' |
  'maxOrderAmount_DESC' |
  'orderable_ASC' |
  'orderable_DESC' |
  'stock_ASC' |
  'stock_DESC' |
  'stockWarning_ASC' |
  'stockWarning_DESC' |
  'visibleFrom_ASC' |
  'visibleFrom_DESC' |
  'visibleUntil_ASC' |
  'visibleUntil_DESC'

export type FilterOptionsType =   'ALL' |
  'ZERO_OR_ONE' |
  'ONE' |
  'ZERO_OR_MORE' |
  'ONE_OR_MORE'

export type ProductOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC' |
  'stock_ASC' |
  'stock_DESC'

export type SupportPageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC' |
  'title_ASC' |
  'title_DESC' |
  'content_ASC' |
  'content_DESC'

export type ProductCategoryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC'

export type LanguageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC' |
  'isoCode_ASC' |
  'isoCode_DESC' |
  'articleCode_ASC' |
  'articleCode_DESC' |
  'name_ASC' |
  'name_DESC'

export type PropertiesOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC' |
  'articleNumber_ASC' |
  'articleNumber_DESC' |
  'price_ASC' |
  'price_DESC' |
  'currency_ASC' |
  'currency_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'weightG_ASC' |
  'weightG_DESC' |
  'widthMm_ASC' |
  'widthMm_DESC' |
  'heightMm_ASC' |
  'heightMm_DESC' |
  'depthMm_ASC' |
  'depthMm_DESC' |
  'color_ASC' |
  'color_DESC' |
  'material_ASC' |
  'material_DESC' |
  'size_ASC' |
  'size_DESC'

export type PermissionAction =   'CREATE_OWN' |
  'CREATE_ALL' |
  'UPDATE_OWN' |
  'UPDATE_ALL' |
  'DELETE_OWN' |
  'DELETE_ALL' |
  'VIEW_OWN' |
  'VIEW_ALL' |
  'ALL'

export type FileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC' |
  'originalName_ASC' |
  'originalName_DESC' |
  'contentType_ASC' |
  'contentType_DESC' |
  'mimeType_ASC' |
  'mimeType_DESC' |
  'bucket_ASC' |
  'bucket_DESC' |
  'key_ASC' |
  'key_DESC' |
  'location_ASC' |
  'location_DESC'

export type RolePermissionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC' |
  'action_ASC' |
  'action_DESC' |
  'model_ASC' |
  'model_DESC'

export type OrderItemOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC' |
  'name_ASC' |
  'name_DESC' |
  'amount_ASC' |
  'amount_DESC' |
  'price_ASC' |
  'price_DESC' |
  'currency_ASC' |
  'currency_DESC'

export type NotificationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC' |
  'title_ASC' |
  'title_DESC' |
  'content_ASC' |
  'content_DESC' |
  'readAt_ASC' |
  'readAt_DESC' |
  'link_ASC' |
  'link_DESC'

export type CommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC' |
  'content_ASC' |
  'content_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type OrderOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC' |
  'orderNumber_ASC' |
  'orderNumber_DESC' |
  'poNumber_ASC' |
  'poNumber_DESC' |
  'trackAndTraceCode_ASC' |
  'trackAndTraceCode_DESC' |
  'status_ASC' |
  'status_DESC' |
  'orderedAt_ASC' |
  'orderedAt_DESC'

export type RoleOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'sendNotificationToEmail_ASC' |
  'sendNotificationToEmail_DESC' |
  'phoneNumber_ASC' |
  'phoneNumber_DESC'

export type Direction =   'up' |
  'down'

export type StoreOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC' |
  'name_ASC' |
  'name_DESC' |
  'storeNumber_ASC' |
  'storeNumber_DESC' |
  'email_ASC' |
  'email_DESC' |
  'phone_ASC' |
  'phone_DESC' |
  'website_ASC' |
  'website_DESC' |
  'contactPerson_ASC' |
  'contactPerson_DESC' |
  'contactEmail_ASC' |
  'contactEmail_DESC' |
  'currency_ASC' |
  'currency_DESC' |
  'size_ASC' |
  'size_DESC' |
  'type_ASC' |
  'type_DESC'

export type OrderStatus =   'WAITING_FOR_APPROVAL' |
  'PENDING' |
  'RECEIVED' |
  'DISPATCHED' |
  'DELIVERED' |
  'INSTALLED' |
  'CANCELLED'

export type PermissionModel =   'USER' |
  'PRODUCT' |
  'ORDER' |
  'ORDER_STATUS' |
  'BRAND' |
  'ROLE' |
  'STORE' |
  'SUPPLIER' |
  'SUPPORT' |
  'NOTIFICATION' |
  'ALL'

export type BrandExportType =   'default' |
  'found'

export type BrandOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC' |
  'domain_ASC' |
  'domain_DESC' |
  'name_ASC' |
  'name_DESC' |
  'primaryColor_ASC' |
  'primaryColor_DESC' |
  'secondaryColor_ASC' |
  'secondaryColor_DESC' |
  'textColor_ASC' |
  'textColor_DESC'

export type SupplierOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC' |
  'name_ASC' |
  'name_DESC'

export interface OrderTemplateCreateWithoutChildrenInput {
  deletedAt?: DateTime
  note?: String
  sortIndex?: Int
  defaultOrderAmount?: Int
  minOrderAmount?: Int
  maxOrderAmount?: Int
  orderable?: Boolean
  stock?: Int
  stockWarning?: Int
  visibleFrom?: DateTime
  visibleUntil?: DateTime
  properties?: PropertiesCreateOneWithoutOrderTemplateInput
  filterOptions?: FilterOptionsCreateOneInput
  brand: BrandCreateOneWithoutOrderTemplatesInput
  parent?: OrderTemplateCreateOneWithoutChildrenInput
  product?: ProductCreateOneInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface ProductCategoryCreateWithoutChildrenInput {
  deletedAt?: DateTime
  note?: String
  properties: PropertiesCreateOneWithoutProductCategoryInput
  brand?: BrandCreateOneWithoutProductCategoriesInput
  parent?: ProductCategoryCreateOneWithoutChildrenInput
  products?: ProductCreateManyWithoutProductCategoriesInput
}

export interface OrderItemWhereUniqueInput {
  id?: ID_Input
}

export interface ProductCreateManyWithoutProductCategoriesInput {
  create?: ProductCreateWithoutProductCategoriesInput[] | ProductCreateWithoutProductCategoriesInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
}

export interface SupplierWhereInput {
  AND?: SupplierWhereInput[] | SupplierWhereInput
  OR?: SupplierWhereInput[] | SupplierWhereInput
  NOT?: SupplierWhereInput[] | SupplierWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  products_every?: PropertiesWhereInput
  products_some?: PropertiesWhereInput
  products_none?: PropertiesWhereInput
  address?: AddressWhereInput
}

export interface ProductCreateWithoutProductCategoriesInput {
  deletedAt?: DateTime
  note?: String
  stock?: Int
  brand?: BrandCreateOneInput
  properties: PropertiesCreateOneWithoutProductInput
}

export interface ProductCategoryWhereInput {
  AND?: ProductCategoryWhereInput[] | ProductCategoryWhereInput
  OR?: ProductCategoryWhereInput[] | ProductCategoryWhereInput
  NOT?: ProductCategoryWhereInput[] | ProductCategoryWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  properties?: PropertiesWhereInput
  brand?: BrandWhereInput
  parent?: ProductCategoryWhereInput
  children_every?: ProductCategoryWhereInput
  children_some?: ProductCategoryWhereInput
  children_none?: ProductCategoryWhereInput
  products_every?: ProductWhereInput
  products_some?: ProductWhereInput
  products_none?: ProductWhereInput
}

export interface ProductCategoryCreateManyWithoutParentInput {
  create?: ProductCategoryCreateWithoutParentInput[] | ProductCategoryCreateWithoutParentInput
  connect?: ProductCategoryWhereUniqueInput[] | ProductCategoryWhereUniqueInput
}

export interface PropertiesWhereInput {
  AND?: PropertiesWhereInput[] | PropertiesWhereInput
  OR?: PropertiesWhereInput[] | PropertiesWhereInput
  NOT?: PropertiesWhereInput[] | PropertiesWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  articleNumber?: String
  articleNumber_not?: String
  articleNumber_in?: String[] | String
  articleNumber_not_in?: String[] | String
  articleNumber_lt?: String
  articleNumber_lte?: String
  articleNumber_gt?: String
  articleNumber_gte?: String
  articleNumber_contains?: String
  articleNumber_not_contains?: String
  articleNumber_starts_with?: String
  articleNumber_not_starts_with?: String
  articleNumber_ends_with?: String
  articleNumber_not_ends_with?: String
  price?: Int
  price_not?: Int
  price_in?: Int[] | Int
  price_not_in?: Int[] | Int
  price_lt?: Int
  price_lte?: Int
  price_gt?: Int
  price_gte?: Int
  currency?: String
  currency_not?: String
  currency_in?: String[] | String
  currency_not_in?: String[] | String
  currency_lt?: String
  currency_lte?: String
  currency_gt?: String
  currency_gte?: String
  currency_contains?: String
  currency_not_contains?: String
  currency_starts_with?: String
  currency_not_starts_with?: String
  currency_ends_with?: String
  currency_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  weightG?: Int
  weightG_not?: Int
  weightG_in?: Int[] | Int
  weightG_not_in?: Int[] | Int
  weightG_lt?: Int
  weightG_lte?: Int
  weightG_gt?: Int
  weightG_gte?: Int
  widthMm?: Int
  widthMm_not?: Int
  widthMm_in?: Int[] | Int
  widthMm_not_in?: Int[] | Int
  widthMm_lt?: Int
  widthMm_lte?: Int
  widthMm_gt?: Int
  widthMm_gte?: Int
  heightMm?: Int
  heightMm_not?: Int
  heightMm_in?: Int[] | Int
  heightMm_not_in?: Int[] | Int
  heightMm_lt?: Int
  heightMm_lte?: Int
  heightMm_gt?: Int
  heightMm_gte?: Int
  depthMm?: Int
  depthMm_not?: Int
  depthMm_in?: Int[] | Int
  depthMm_not_in?: Int[] | Int
  depthMm_lt?: Int
  depthMm_lte?: Int
  depthMm_gt?: Int
  depthMm_gte?: Int
  color?: String
  color_not?: String
  color_in?: String[] | String
  color_not_in?: String[] | String
  color_lt?: String
  color_lte?: String
  color_gt?: String
  color_gte?: String
  color_contains?: String
  color_not_contains?: String
  color_starts_with?: String
  color_not_starts_with?: String
  color_ends_with?: String
  color_not_ends_with?: String
  material?: String
  material_not?: String
  material_in?: String[] | String
  material_not_in?: String[] | String
  material_lt?: String
  material_lte?: String
  material_gt?: String
  material_gte?: String
  material_contains?: String
  material_not_contains?: String
  material_starts_with?: String
  material_not_starts_with?: String
  material_ends_with?: String
  material_not_ends_with?: String
  size?: String
  size_not?: String
  size_in?: String[] | String
  size_not_in?: String[] | String
  size_lt?: String
  size_lte?: String
  size_gt?: String
  size_gte?: String
  size_contains?: String
  size_not_contains?: String
  size_starts_with?: String
  size_not_starts_with?: String
  size_ends_with?: String
  size_not_ends_with?: String
  language?: LanguageWhereInput
  images_every?: FileWhereInput
  images_some?: FileWhereInput
  images_none?: FileWhereInput
  supplier?: SupplierWhereInput
  product?: ProductWhereInput
  productCategory?: ProductCategoryWhereInput
  orderTemplate?: OrderTemplateWhereInput
}

export interface ProductCategoryCreateWithoutParentInput {
  deletedAt?: DateTime
  note?: String
  properties: PropertiesCreateOneWithoutProductCategoryInput
  brand?: BrandCreateOneWithoutProductCategoriesInput
  children?: ProductCategoryCreateManyWithoutParentInput
  products?: ProductCreateManyWithoutProductCategoriesInput
}

export interface OrderTemplateWhereInput {
  AND?: OrderTemplateWhereInput[] | OrderTemplateWhereInput
  OR?: OrderTemplateWhereInput[] | OrderTemplateWhereInput
  NOT?: OrderTemplateWhereInput[] | OrderTemplateWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  sortIndex?: Int
  sortIndex_not?: Int
  sortIndex_in?: Int[] | Int
  sortIndex_not_in?: Int[] | Int
  sortIndex_lt?: Int
  sortIndex_lte?: Int
  sortIndex_gt?: Int
  sortIndex_gte?: Int
  defaultOrderAmount?: Int
  defaultOrderAmount_not?: Int
  defaultOrderAmount_in?: Int[] | Int
  defaultOrderAmount_not_in?: Int[] | Int
  defaultOrderAmount_lt?: Int
  defaultOrderAmount_lte?: Int
  defaultOrderAmount_gt?: Int
  defaultOrderAmount_gte?: Int
  minOrderAmount?: Int
  minOrderAmount_not?: Int
  minOrderAmount_in?: Int[] | Int
  minOrderAmount_not_in?: Int[] | Int
  minOrderAmount_lt?: Int
  minOrderAmount_lte?: Int
  minOrderAmount_gt?: Int
  minOrderAmount_gte?: Int
  maxOrderAmount?: Int
  maxOrderAmount_not?: Int
  maxOrderAmount_in?: Int[] | Int
  maxOrderAmount_not_in?: Int[] | Int
  maxOrderAmount_lt?: Int
  maxOrderAmount_lte?: Int
  maxOrderAmount_gt?: Int
  maxOrderAmount_gte?: Int
  orderable?: Boolean
  orderable_not?: Boolean
  stock?: Int
  stock_not?: Int
  stock_in?: Int[] | Int
  stock_not_in?: Int[] | Int
  stock_lt?: Int
  stock_lte?: Int
  stock_gt?: Int
  stock_gte?: Int
  stockWarning?: Int
  stockWarning_not?: Int
  stockWarning_in?: Int[] | Int
  stockWarning_not_in?: Int[] | Int
  stockWarning_lt?: Int
  stockWarning_lte?: Int
  stockWarning_gt?: Int
  stockWarning_gte?: Int
  visibleFrom?: DateTime
  visibleFrom_not?: DateTime
  visibleFrom_in?: DateTime[] | DateTime
  visibleFrom_not_in?: DateTime[] | DateTime
  visibleFrom_lt?: DateTime
  visibleFrom_lte?: DateTime
  visibleFrom_gt?: DateTime
  visibleFrom_gte?: DateTime
  visibleUntil?: DateTime
  visibleUntil_not?: DateTime
  visibleUntil_in?: DateTime[] | DateTime
  visibleUntil_not_in?: DateTime[] | DateTime
  visibleUntil_lt?: DateTime
  visibleUntil_lte?: DateTime
  visibleUntil_gt?: DateTime
  visibleUntil_gte?: DateTime
  properties?: PropertiesWhereInput
  filterOptions?: FilterOptionsWhereInput
  brand?: BrandWhereInput
  parent?: OrderTemplateWhereInput
  children_every?: OrderTemplateWhereInput
  children_some?: OrderTemplateWhereInput
  children_none?: OrderTemplateWhereInput
  product?: ProductWhereInput
}

export interface OrderItemWhereInput {
  AND?: OrderItemWhereInput[] | OrderItemWhereInput
  OR?: OrderItemWhereInput[] | OrderItemWhereInput
  NOT?: OrderItemWhereInput[] | OrderItemWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  amount?: Int
  amount_not?: Int
  amount_in?: Int[] | Int
  amount_not_in?: Int[] | Int
  amount_lt?: Int
  amount_lte?: Int
  amount_gt?: Int
  amount_gte?: Int
  price?: Int
  price_not?: Int
  price_in?: Int[] | Int
  price_not_in?: Int[] | Int
  price_lt?: Int
  price_lte?: Int
  price_gt?: Int
  price_gte?: Int
  currency?: String
  currency_not?: String
  currency_in?: String[] | String
  currency_not_in?: String[] | String
  currency_lt?: String
  currency_lte?: String
  currency_gt?: String
  currency_gte?: String
  currency_contains?: String
  currency_not_contains?: String
  currency_starts_with?: String
  currency_not_starts_with?: String
  currency_ends_with?: String
  currency_not_ends_with?: String
  orderTemplate?: OrderTemplateWhereInput
  items_every?: OrderItemWhereInput
  items_some?: OrderItemWhereInput
  items_none?: OrderItemWhereInput
  product?: ProductWhereInput
}

export interface OrderTemplateUpdateInput {
  deletedAt?: DateTime
  note?: String
  sortIndex?: Int
  defaultOrderAmount?: Int
  minOrderAmount?: Int
  maxOrderAmount?: Int
  orderable?: Boolean
  stock?: Int
  stockWarning?: Int
  visibleFrom?: DateTime
  visibleUntil?: DateTime
  properties?: PropertiesUpdateOneWithoutOrderTemplateInput
  filterOptions?: FilterOptionsUpdateOneInput
  brand?: BrandUpdateOneRequiredWithoutOrderTemplatesInput
  parent?: OrderTemplateUpdateOneWithoutChildrenInput
  children?: OrderTemplateUpdateManyWithoutParentInput
  product?: ProductUpdateOneInput
}

export interface UserUpdateInput {
  deletedAt?: DateTime
  note?: String
  email?: String
  password?: String
  firstName?: String
  lastName?: String
  sendNotificationToEmail?: Boolean
  phoneNumber?: String
  role?: RoleUpdateOneRequiredWithoutUsersInput
  brand?: BrandUpdateOneRequiredWithoutUsersInput
  contactPersonToBrand?: BrandUpdateManyWithoutContactPersonInput
  stores?: StoreUpdateManyWithoutUsersInput
  notifications?: NotificationUpdateManyWithoutUserInput
  orders?: OrderUpdateManyWithoutCreatedByInput
}

export interface ProductCategoryCreateInput {
  deletedAt?: DateTime
  note?: String
  properties: PropertiesCreateOneWithoutProductCategoryInput
  brand?: BrandCreateOneWithoutProductCategoriesInput
  parent?: ProductCategoryCreateOneWithoutChildrenInput
  children?: ProductCategoryCreateManyWithoutParentInput
  products?: ProductCreateManyWithoutProductCategoriesInput
}

export interface RoleUpdateOneRequiredWithoutUsersInput {
  create?: RoleCreateWithoutUsersInput
  connect?: RoleWhereUniqueInput
  update?: RoleUpdateWithoutUsersDataInput
  upsert?: RoleUpsertWithoutUsersInput
}

export interface ProductUpdateInput {
  deletedAt?: DateTime
  note?: String
  stock?: Int
  brand?: BrandUpdateOneInput
  properties?: PropertiesUpdateOneRequiredWithoutProductInput
  productCategories?: ProductCategoryUpdateOneWithoutProductsInput
}

export interface RoleUpdateWithoutUsersDataInput {
  deletedAt?: DateTime
  note?: String
  name?: String
  description?: String
  permissions?: RolePermissionUpdateManyInput
}

export interface PropertiesUpsertWithWhereUniqueWithoutSupplierInput {
  where: PropertiesWhereUniqueInput
  update: PropertiesUpdateWithoutSupplierDataInput
  create: PropertiesCreateWithoutSupplierInput
}

export interface RolePermissionUpdateManyInput {
  create?: RolePermissionCreateInput[] | RolePermissionCreateInput
  connect?: RolePermissionWhereUniqueInput[] | RolePermissionWhereUniqueInput
  disconnect?: RolePermissionWhereUniqueInput[] | RolePermissionWhereUniqueInput
  delete?: RolePermissionWhereUniqueInput[] | RolePermissionWhereUniqueInput
  update?: RolePermissionUpdateWithWhereUniqueNestedInput[] | RolePermissionUpdateWithWhereUniqueNestedInput
  upsert?: RolePermissionUpsertWithWhereUniqueNestedInput[] | RolePermissionUpsertWithWhereUniqueNestedInput
}

export interface PropertiesUpdateWithoutSupplierDataInput {
  deletedAt?: DateTime
  note?: String
  articleNumber?: String
  price?: Int
  currency?: String
  name?: String
  description?: String
  weightG?: Int
  widthMm?: Int
  heightMm?: Int
  depthMm?: Int
  color?: String
  material?: String
  size?: String
  language?: LanguageUpdateOneInput
  images?: FileUpdateManyInput
  product?: ProductUpdateOneWithoutPropertiesInput
  productCategory?: ProductCategoryUpdateOneWithoutPropertiesInput
  orderTemplate?: OrderTemplateUpdateOneWithoutPropertiesInput
}

export interface RolePermissionUpdateWithWhereUniqueNestedInput {
  where: RolePermissionWhereUniqueInput
  data: RolePermissionUpdateDataInput
}

export interface PropertiesUpdateManyWithoutSupplierInput {
  create?: PropertiesCreateWithoutSupplierInput[] | PropertiesCreateWithoutSupplierInput
  connect?: PropertiesWhereUniqueInput[] | PropertiesWhereUniqueInput
  disconnect?: PropertiesWhereUniqueInput[] | PropertiesWhereUniqueInput
  delete?: PropertiesWhereUniqueInput[] | PropertiesWhereUniqueInput
  update?: PropertiesUpdateWithWhereUniqueWithoutSupplierInput[] | PropertiesUpdateWithWhereUniqueWithoutSupplierInput
  upsert?: PropertiesUpsertWithWhereUniqueWithoutSupplierInput[] | PropertiesUpsertWithWhereUniqueWithoutSupplierInput
}

export interface RolePermissionUpdateDataInput {
  deletedAt?: DateTime
  note?: String
  action?: PermissionAction
  model?: PermissionModel
}

export interface SupplierUpdateInput {
  deletedAt?: DateTime
  note?: String
  name?: String
  products?: PropertiesUpdateManyWithoutSupplierInput
  address?: AddressUpdateOneRequiredInput
}

export interface RolePermissionUpsertWithWhereUniqueNestedInput {
  where: RolePermissionWhereUniqueInput
  update: RolePermissionUpdateDataInput
  create: RolePermissionCreateInput
}

export interface PropertiesCreateWithoutSupplierInput {
  deletedAt?: DateTime
  note?: String
  articleNumber?: String
  price?: Int
  currency?: String
  name?: String
  description?: String
  weightG?: Int
  widthMm?: Int
  heightMm?: Int
  depthMm?: Int
  color?: String
  material?: String
  size?: String
  language?: LanguageCreateOneInput
  images?: FileCreateManyInput
  product?: ProductCreateOneWithoutPropertiesInput
  productCategory?: ProductCategoryCreateOneWithoutPropertiesInput
  orderTemplate?: OrderTemplateCreateOneWithoutPropertiesInput
}

export interface RoleUpsertWithoutUsersInput {
  update: RoleUpdateWithoutUsersDataInput
  create: RoleCreateWithoutUsersInput
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput
  OR?: FileWhereInput[] | FileWhereInput
  NOT?: FileWhereInput[] | FileWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  originalName?: String
  originalName_not?: String
  originalName_in?: String[] | String
  originalName_not_in?: String[] | String
  originalName_lt?: String
  originalName_lte?: String
  originalName_gt?: String
  originalName_gte?: String
  originalName_contains?: String
  originalName_not_contains?: String
  originalName_starts_with?: String
  originalName_not_starts_with?: String
  originalName_ends_with?: String
  originalName_not_ends_with?: String
  contentType?: String
  contentType_not?: String
  contentType_in?: String[] | String
  contentType_not_in?: String[] | String
  contentType_lt?: String
  contentType_lte?: String
  contentType_gt?: String
  contentType_gte?: String
  contentType_contains?: String
  contentType_not_contains?: String
  contentType_starts_with?: String
  contentType_not_starts_with?: String
  contentType_ends_with?: String
  contentType_not_ends_with?: String
  mimeType?: String
  mimeType_not?: String
  mimeType_in?: String[] | String
  mimeType_not_in?: String[] | String
  mimeType_lt?: String
  mimeType_lte?: String
  mimeType_gt?: String
  mimeType_gte?: String
  mimeType_contains?: String
  mimeType_not_contains?: String
  mimeType_starts_with?: String
  mimeType_not_starts_with?: String
  mimeType_ends_with?: String
  mimeType_not_ends_with?: String
  bucket?: String
  bucket_not?: String
  bucket_in?: String[] | String
  bucket_not_in?: String[] | String
  bucket_lt?: String
  bucket_lte?: String
  bucket_gt?: String
  bucket_gte?: String
  bucket_contains?: String
  bucket_not_contains?: String
  bucket_starts_with?: String
  bucket_not_starts_with?: String
  bucket_ends_with?: String
  bucket_not_ends_with?: String
  key?: String
  key_not?: String
  key_in?: String[] | String
  key_not_in?: String[] | String
  key_lt?: String
  key_lte?: String
  key_gt?: String
  key_gte?: String
  key_contains?: String
  key_not_contains?: String
  key_starts_with?: String
  key_not_starts_with?: String
  key_ends_with?: String
  key_not_ends_with?: String
  location?: String
  location_not?: String
  location_in?: String[] | String
  location_not_in?: String[] | String
  location_lt?: String
  location_lte?: String
  location_gt?: String
  location_gte?: String
  location_contains?: String
  location_not_contains?: String
  location_starts_with?: String
  location_not_starts_with?: String
  location_ends_with?: String
  location_not_ends_with?: String
}

export interface BrandUpdateOneRequiredWithoutUsersInput {
  create?: BrandCreateWithoutUsersInput
  connect?: BrandWhereUniqueInput
  update?: BrandUpdateWithoutUsersDataInput
  upsert?: BrandUpsertWithoutUsersInput
}

export interface SupplierCreateInput {
  deletedAt?: DateTime
  note?: String
  name: String
  products?: PropertiesCreateManyWithoutSupplierInput
  address: AddressCreateOneInput
}

export interface BrandUpdateWithoutUsersDataInput {
  deletedAt?: DateTime
  note?: String
  domain?: String
  name?: String
  primaryColor?: String
  secondaryColor?: String
  textColor?: String
  logo?: FileUpdateOneInput
  backgroundImage?: FileUpdateOneInput
  stores?: StoreUpdateManyWithoutBrandInput
  address?: AddressUpdateOneInput
  productCategories?: ProductCategoryUpdateManyWithoutBrandInput
  orderTemplates?: OrderTemplateUpdateManyWithoutBrandInput
  contactPerson?: UserUpdateOneWithoutContactPersonToBrandInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  sendNotificationToEmail?: Boolean
  sendNotificationToEmail_not?: Boolean
  phoneNumber?: String
  phoneNumber_not?: String
  phoneNumber_in?: String[] | String
  phoneNumber_not_in?: String[] | String
  phoneNumber_lt?: String
  phoneNumber_lte?: String
  phoneNumber_gt?: String
  phoneNumber_gte?: String
  phoneNumber_contains?: String
  phoneNumber_not_contains?: String
  phoneNumber_starts_with?: String
  phoneNumber_not_starts_with?: String
  phoneNumber_ends_with?: String
  phoneNumber_not_ends_with?: String
  role?: RoleWhereInput
  brand?: BrandWhereInput
  contactPersonToBrand_every?: BrandWhereInput
  contactPersonToBrand_some?: BrandWhereInput
  contactPersonToBrand_none?: BrandWhereInput
  stores_every?: StoreWhereInput
  stores_some?: StoreWhereInput
  stores_none?: StoreWhereInput
  notifications_every?: NotificationWhereInput
  notifications_some?: NotificationWhereInput
  notifications_none?: NotificationWhereInput
  orders_every?: OrderWhereInput
  orders_some?: OrderWhereInput
  orders_none?: OrderWhereInput
}

export interface FileUpdateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: FileUpdateDataInput
  upsert?: FileUpsertNestedInput
}

export interface StoreUpdateInput {
  deletedAt?: DateTime
  note?: String
  name?: String
  storeNumber?: String
  email?: String
  phone?: String
  website?: String
  contactPerson?: String
  contactEmail?: String
  currency?: String
  size?: String
  type?: String
  address?: AddressUpdateOneInput
  deliveryAddress?: AddressUpdateOneInput
  brand?: BrandUpdateOneWithoutStoresInput
  image?: FileUpdateOneInput
  language?: LanguageUpdateOneInput
  orders?: OrderUpdateManyWithoutStoreInput
  files?: FileUpdateManyInput
  users?: UserUpdateManyWithoutStoresInput
}

export interface FileUpdateDataInput {
  deletedAt?: DateTime
  note?: String
  originalName?: String
  contentType?: String
  mimeType?: String
  bucket?: String
  key?: String
  location?: String
}

export interface StoreCreateInput {
  deletedAt?: DateTime
  note?: String
  name: String
  storeNumber?: String
  email?: String
  phone?: String
  website?: String
  contactPerson?: String
  contactEmail?: String
  currency?: String
  size?: String
  type?: String
  address?: AddressCreateOneInput
  deliveryAddress?: AddressCreateOneInput
  brand?: BrandCreateOneWithoutStoresInput
  image?: FileCreateOneInput
  language?: LanguageCreateOneInput
  orders?: OrderCreateManyWithoutStoreInput
  files?: FileCreateManyInput
  users?: UserCreateManyWithoutStoresInput
}

export interface FileUpsertNestedInput {
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface BrandUpsertWithoutUsersInput {
  update: BrandUpdateWithoutUsersDataInput
  create: BrandCreateWithoutUsersInput
}

export interface StoreUpdateManyWithoutBrandInput {
  create?: StoreCreateWithoutBrandInput[] | StoreCreateWithoutBrandInput
  connect?: StoreWhereUniqueInput[] | StoreWhereUniqueInput
  disconnect?: StoreWhereUniqueInput[] | StoreWhereUniqueInput
  delete?: StoreWhereUniqueInput[] | StoreWhereUniqueInput
  update?: StoreUpdateWithWhereUniqueWithoutBrandInput[] | StoreUpdateWithWhereUniqueWithoutBrandInput
  upsert?: StoreUpsertWithWhereUniqueWithoutBrandInput[] | StoreUpsertWithWhereUniqueWithoutBrandInput
}

export interface BrandWhereUniqueInput {
  id?: ID_Input
  domain?: String
}

export interface StoreUpdateWithWhereUniqueWithoutBrandInput {
  where: StoreWhereUniqueInput
  data: StoreUpdateWithoutBrandDataInput
}

export interface OrderUpsertWithWhereUniqueWithoutStoreInput {
  where: OrderWhereUniqueInput
  update: OrderUpdateWithoutStoreDataInput
  create: OrderCreateWithoutStoreInput
}

export interface StoreUpdateWithoutBrandDataInput {
  deletedAt?: DateTime
  note?: String
  name?: String
  storeNumber?: String
  email?: String
  phone?: String
  website?: String
  contactPerson?: String
  contactEmail?: String
  currency?: String
  size?: String
  type?: String
  address?: AddressUpdateOneInput
  deliveryAddress?: AddressUpdateOneInput
  image?: FileUpdateOneInput
  language?: LanguageUpdateOneInput
  orders?: OrderUpdateManyWithoutStoreInput
  files?: FileUpdateManyInput
  users?: UserUpdateManyWithoutStoresInput
}

export interface UserUpdateWithoutOrdersDataInput {
  deletedAt?: DateTime
  note?: String
  email?: String
  password?: String
  firstName?: String
  lastName?: String
  sendNotificationToEmail?: Boolean
  phoneNumber?: String
  role?: RoleUpdateOneRequiredWithoutUsersInput
  brand?: BrandUpdateOneRequiredWithoutUsersInput
  contactPersonToBrand?: BrandUpdateManyWithoutContactPersonInput
  stores?: StoreUpdateManyWithoutUsersInput
  notifications?: NotificationUpdateManyWithoutUserInput
}

export interface AddressUpdateOneInput {
  create?: AddressCreateInput
  connect?: AddressWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: AddressUpdateDataInput
  upsert?: AddressUpsertNestedInput
}

export interface SupportPageCreateInput {
  deletedAt?: DateTime
  note?: String
  title: String
  content: String
}

export interface AddressUpdateDataInput {
  deletedAt?: DateTime
  note?: String
  countryCode?: String
  country?: String
  city?: String
  street?: String
  number?: String
  postalCode?: String
  addition?: String
  longtitude?: Float
  latitude?: Float
}

export interface ProductCategoryWhereUniqueInput {
  id?: ID_Input
}

export interface AddressUpsertNestedInput {
  update: AddressUpdateDataInput
  create: AddressCreateInput
}

export interface OrderWhereUniqueInput {
  id?: ID_Input
}

export interface LanguageUpdateOneInput {
  create?: LanguageCreateInput
  connect?: LanguageWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LanguageUpdateDataInput
  upsert?: LanguageUpsertNestedInput
}

export interface SupportPageUpdateInput {
  deletedAt?: DateTime
  note?: String
  title?: String
  content?: String
}

export interface LanguageUpdateDataInput {
  deletedAt?: DateTime
  note?: String
  isoCode?: String
  articleCode?: String
  name?: String
}

export interface UserUpdateOneWithoutOrdersInput {
  create?: UserCreateWithoutOrdersInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutOrdersDataInput
  upsert?: UserUpsertWithoutOrdersInput
}

export interface LanguageUpsertNestedInput {
  update: LanguageUpdateDataInput
  create: LanguageCreateInput
}

export interface NotificationSubscriptionWhereInput {
  AND?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  OR?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  NOT?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: NotificationWhereInput
}

export interface OrderUpdateManyWithoutStoreInput {
  create?: OrderCreateWithoutStoreInput[] | OrderCreateWithoutStoreInput
  connect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
  disconnect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
  delete?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
  update?: OrderUpdateWithWhereUniqueWithoutStoreInput[] | OrderUpdateWithWhereUniqueWithoutStoreInput
  upsert?: OrderUpsertWithWhereUniqueWithoutStoreInput[] | OrderUpsertWithWhereUniqueWithoutStoreInput
}

export interface CommentUpsertWithWhereUniqueWithoutOrderInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateWithoutOrderDataInput
  create: CommentCreateWithoutOrderInput
}

export interface OrderUpdateWithWhereUniqueWithoutStoreInput {
  where: OrderWhereUniqueInput
  data: OrderUpdateWithoutStoreDataInput
}

export interface RoleCreateOneWithoutUsersInput {
  create?: RoleCreateWithoutUsersInput
  connect?: RoleWhereUniqueInput
}

export interface OrderUpdateWithoutStoreDataInput {
  deletedAt?: DateTime
  note?: String
  orderNumber?: String
  poNumber?: String
  trackAndTraceCode?: String
  status?: OrderStatus
  orderedAt?: DateTime
  comments?: CommentUpdateManyWithoutOrderInput
  createdBy?: UserUpdateOneWithoutOrdersInput
  items?: OrderItemUpdateManyInput
  address?: AddressUpdateOneInput
}

export interface RolePermissionCreateManyInput {
  create?: RolePermissionCreateInput[] | RolePermissionCreateInput
  connect?: RolePermissionWhereUniqueInput[] | RolePermissionWhereUniqueInput
}

export interface CommentUpdateManyWithoutOrderInput {
  create?: CommentCreateWithoutOrderInput[] | CommentCreateWithoutOrderInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  update?: CommentUpdateWithWhereUniqueWithoutOrderInput[] | CommentUpdateWithWhereUniqueWithoutOrderInput
  upsert?: CommentUpsertWithWhereUniqueWithoutOrderInput[] | CommentUpsertWithWhereUniqueWithoutOrderInput
}

export interface RolePermissionWhereUniqueInput {
  id?: ID_Input
}

export interface CommentUpdateWithWhereUniqueWithoutOrderInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateWithoutOrderDataInput
}

export interface BrandCreateOneWithoutUsersInput {
  create?: BrandCreateWithoutUsersInput
  connect?: BrandWhereUniqueInput
}

export interface CommentUpdateWithoutOrderDataInput {
  deletedAt?: DateTime
  note?: String
  content?: String
  user?: UserUpdateOneRequiredInput
}

export interface FileCreateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface FileWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateDataInput {
  deletedAt?: DateTime
  note?: String
  email?: String
  password?: String
  firstName?: String
  lastName?: String
  sendNotificationToEmail?: Boolean
  phoneNumber?: String
  role?: RoleUpdateOneRequiredWithoutUsersInput
  brand?: BrandUpdateOneRequiredWithoutUsersInput
  contactPersonToBrand?: BrandUpdateManyWithoutContactPersonInput
  stores?: StoreUpdateManyWithoutUsersInput
  notifications?: NotificationUpdateManyWithoutUserInput
  orders?: OrderUpdateManyWithoutCreatedByInput
}

export interface StoreCreateWithoutBrandInput {
  deletedAt?: DateTime
  note?: String
  name: String
  storeNumber?: String
  email?: String
  phone?: String
  website?: String
  contactPerson?: String
  contactEmail?: String
  currency?: String
  size?: String
  type?: String
  address?: AddressCreateOneInput
  deliveryAddress?: AddressCreateOneInput
  image?: FileCreateOneInput
  language?: LanguageCreateOneInput
  orders?: OrderCreateManyWithoutStoreInput
  files?: FileCreateManyInput
  users?: UserCreateManyWithoutStoresInput
}

export interface BrandUpdateManyWithoutContactPersonInput {
  create?: BrandCreateWithoutContactPersonInput[] | BrandCreateWithoutContactPersonInput
  connect?: BrandWhereUniqueInput[] | BrandWhereUniqueInput
  disconnect?: BrandWhereUniqueInput[] | BrandWhereUniqueInput
  delete?: BrandWhereUniqueInput[] | BrandWhereUniqueInput
  update?: BrandUpdateWithWhereUniqueWithoutContactPersonInput[] | BrandUpdateWithWhereUniqueWithoutContactPersonInput
  upsert?: BrandUpsertWithWhereUniqueWithoutContactPersonInput[] | BrandUpsertWithWhereUniqueWithoutContactPersonInput
}

export interface AddressCreateInput {
  deletedAt?: DateTime
  note?: String
  countryCode: String
  country?: String
  city: String
  street: String
  number?: String
  postalCode: String
  addition?: String
  longtitude?: Float
  latitude?: Float
}

export interface BrandUpdateWithWhereUniqueWithoutContactPersonInput {
  where: BrandWhereUniqueInput
  data: BrandUpdateWithoutContactPersonDataInput
}

export interface LanguageCreateOneInput {
  create?: LanguageCreateInput
  connect?: LanguageWhereUniqueInput
}

export interface BrandUpdateWithoutContactPersonDataInput {
  deletedAt?: DateTime
  note?: String
  domain?: String
  name?: String
  primaryColor?: String
  secondaryColor?: String
  textColor?: String
  logo?: FileUpdateOneInput
  backgroundImage?: FileUpdateOneInput
  stores?: StoreUpdateManyWithoutBrandInput
  address?: AddressUpdateOneInput
  productCategories?: ProductCategoryUpdateManyWithoutBrandInput
  orderTemplates?: OrderTemplateUpdateManyWithoutBrandInput
  users?: UserUpdateManyWithoutBrandInput
}

export interface LanguageWhereUniqueInput {
  id?: ID_Input
  isoCode?: String
  articleCode?: String
}

export interface ProductCategoryUpdateManyWithoutBrandInput {
  create?: ProductCategoryCreateWithoutBrandInput[] | ProductCategoryCreateWithoutBrandInput
  connect?: ProductCategoryWhereUniqueInput[] | ProductCategoryWhereUniqueInput
  disconnect?: ProductCategoryWhereUniqueInput[] | ProductCategoryWhereUniqueInput
  delete?: ProductCategoryWhereUniqueInput[] | ProductCategoryWhereUniqueInput
  update?: ProductCategoryUpdateWithWhereUniqueWithoutBrandInput[] | ProductCategoryUpdateWithWhereUniqueWithoutBrandInput
  upsert?: ProductCategoryUpsertWithWhereUniqueWithoutBrandInput[] | ProductCategoryUpsertWithWhereUniqueWithoutBrandInput
}

export interface OrderCreateWithoutStoreInput {
  deletedAt?: DateTime
  note?: String
  orderNumber?: String
  poNumber?: String
  trackAndTraceCode?: String
  status: OrderStatus
  orderedAt?: DateTime
  comments?: CommentCreateManyWithoutOrderInput
  createdBy?: UserCreateOneWithoutOrdersInput
  items?: OrderItemCreateManyInput
  address?: AddressCreateOneInput
}

export interface ProductCategoryUpdateWithWhereUniqueWithoutBrandInput {
  where: ProductCategoryWhereUniqueInput
  data: ProductCategoryUpdateWithoutBrandDataInput
}

export interface CommentCreateWithoutOrderInput {
  deletedAt?: DateTime
  note?: String
  content?: String
  user: UserCreateOneInput
}

export interface ProductCategoryUpdateWithoutBrandDataInput {
  deletedAt?: DateTime
  note?: String
  properties?: PropertiesUpdateOneRequiredWithoutProductCategoryInput
  parent?: ProductCategoryUpdateOneWithoutChildrenInput
  children?: ProductCategoryUpdateManyWithoutParentInput
  products?: ProductUpdateManyWithoutProductCategoriesInput
}

export interface CommentWhereUniqueInput {
  id?: ID_Input
}

export interface PropertiesUpdateOneRequiredWithoutProductCategoryInput {
  create?: PropertiesCreateWithoutProductCategoryInput
  connect?: PropertiesWhereUniqueInput
  update?: PropertiesUpdateWithoutProductCategoryDataInput
  upsert?: PropertiesUpsertWithoutProductCategoryInput
}

export interface UserCreateWithoutOrdersInput {
  deletedAt?: DateTime
  note?: String
  email: String
  password: String
  firstName: String
  lastName: String
  sendNotificationToEmail?: Boolean
  phoneNumber?: String
  role: RoleCreateOneWithoutUsersInput
  brand: BrandCreateOneWithoutUsersInput
  contactPersonToBrand?: BrandCreateManyWithoutContactPersonInput
  stores?: StoreCreateManyWithoutUsersInput
  notifications?: NotificationCreateManyWithoutUserInput
}

export interface PropertiesUpdateWithoutProductCategoryDataInput {
  deletedAt?: DateTime
  note?: String
  articleNumber?: String
  price?: Int
  currency?: String
  name?: String
  description?: String
  weightG?: Int
  widthMm?: Int
  heightMm?: Int
  depthMm?: Int
  color?: String
  material?: String
  size?: String
  language?: LanguageUpdateOneInput
  images?: FileUpdateManyInput
  supplier?: SupplierUpdateOneWithoutProductsInput
  product?: ProductUpdateOneWithoutPropertiesInput
  orderTemplate?: OrderTemplateUpdateOneWithoutPropertiesInput
}

export interface BrandCreateWithoutContactPersonInput {
  deletedAt?: DateTime
  note?: String
  domain: String
  name: String
  primaryColor: String
  secondaryColor: String
  textColor: String
  logo?: FileCreateOneInput
  backgroundImage?: FileCreateOneInput
  stores?: StoreCreateManyWithoutBrandInput
  address?: AddressCreateOneInput
  productCategories?: ProductCategoryCreateManyWithoutBrandInput
  orderTemplates?: OrderTemplateCreateManyWithoutBrandInput
  users?: UserCreateManyWithoutBrandInput
}

export interface FileUpdateManyInput {
  create?: FileCreateInput[] | FileCreateInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
  disconnect?: FileWhereUniqueInput[] | FileWhereUniqueInput
  delete?: FileWhereUniqueInput[] | FileWhereUniqueInput
  update?: FileUpdateWithWhereUniqueNestedInput[] | FileUpdateWithWhereUniqueNestedInput
  upsert?: FileUpsertWithWhereUniqueNestedInput[] | FileUpsertWithWhereUniqueNestedInput
}

export interface ProductCategoryCreateWithoutBrandInput {
  deletedAt?: DateTime
  note?: String
  properties: PropertiesCreateOneWithoutProductCategoryInput
  parent?: ProductCategoryCreateOneWithoutChildrenInput
  children?: ProductCategoryCreateManyWithoutParentInput
  products?: ProductCreateManyWithoutProductCategoriesInput
}

export interface FileUpdateWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput
  data: FileUpdateDataInput
}

export interface PropertiesCreateWithoutProductCategoryInput {
  deletedAt?: DateTime
  note?: String
  articleNumber?: String
  price?: Int
  currency?: String
  name?: String
  description?: String
  weightG?: Int
  widthMm?: Int
  heightMm?: Int
  depthMm?: Int
  color?: String
  material?: String
  size?: String
  language?: LanguageCreateOneInput
  images?: FileCreateManyInput
  supplier?: SupplierCreateOneWithoutProductsInput
  product?: ProductCreateOneWithoutPropertiesInput
  orderTemplate?: OrderTemplateCreateOneWithoutPropertiesInput
}

export interface FileUpsertWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface SupplierCreateOneWithoutProductsInput {
  create?: SupplierCreateWithoutProductsInput
  connect?: SupplierWhereUniqueInput
}

export interface SupplierUpdateOneWithoutProductsInput {
  create?: SupplierCreateWithoutProductsInput
  connect?: SupplierWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: SupplierUpdateWithoutProductsDataInput
  upsert?: SupplierUpsertWithoutProductsInput
}

export interface ProductCreateOneWithoutPropertiesInput {
  create?: ProductCreateWithoutPropertiesInput
  connect?: ProductWhereUniqueInput
}

export interface SupplierUpdateWithoutProductsDataInput {
  deletedAt?: DateTime
  note?: String
  name?: String
  address?: AddressUpdateOneRequiredInput
}

export interface BrandCreateOneInput {
  create?: BrandCreateInput
  connect?: BrandWhereUniqueInput
}

export interface AddressUpdateOneRequiredInput {
  create?: AddressCreateInput
  connect?: AddressWhereUniqueInput
  update?: AddressUpdateDataInput
  upsert?: AddressUpsertNestedInput
}

export interface OrderTemplateCreateManyWithoutBrandInput {
  create?: OrderTemplateCreateWithoutBrandInput[] | OrderTemplateCreateWithoutBrandInput
  connect?: OrderTemplateWhereUniqueInput[] | OrderTemplateWhereUniqueInput
}

export interface SupplierUpsertWithoutProductsInput {
  update: SupplierUpdateWithoutProductsDataInput
  create: SupplierCreateWithoutProductsInput
}

export interface PropertiesCreateOneWithoutOrderTemplateInput {
  create?: PropertiesCreateWithoutOrderTemplateInput
  connect?: PropertiesWhereUniqueInput
}

export interface ProductUpdateOneWithoutPropertiesInput {
  create?: ProductCreateWithoutPropertiesInput
  connect?: ProductWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ProductUpdateWithoutPropertiesDataInput
  upsert?: ProductUpsertWithoutPropertiesInput
}

export interface ProductCategoryCreateOneWithoutPropertiesInput {
  create?: ProductCategoryCreateWithoutPropertiesInput
  connect?: ProductCategoryWhereUniqueInput
}

export interface ProductUpdateWithoutPropertiesDataInput {
  deletedAt?: DateTime
  note?: String
  stock?: Int
  brand?: BrandUpdateOneInput
  productCategories?: ProductCategoryUpdateOneWithoutProductsInput
}

export interface BrandCreateOneWithoutProductCategoriesInput {
  create?: BrandCreateWithoutProductCategoriesInput
  connect?: BrandWhereUniqueInput
}

export interface BrandUpdateOneInput {
  create?: BrandCreateInput
  connect?: BrandWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BrandUpdateDataInput
  upsert?: BrandUpsertNestedInput
}

export interface UserCreateOneWithoutContactPersonToBrandInput {
  create?: UserCreateWithoutContactPersonToBrandInput
  connect?: UserWhereUniqueInput
}

export interface BrandUpdateDataInput {
  deletedAt?: DateTime
  note?: String
  domain?: String
  name?: String
  primaryColor?: String
  secondaryColor?: String
  textColor?: String
  logo?: FileUpdateOneInput
  backgroundImage?: FileUpdateOneInput
  stores?: StoreUpdateManyWithoutBrandInput
  address?: AddressUpdateOneInput
  productCategories?: ProductCategoryUpdateManyWithoutBrandInput
  orderTemplates?: OrderTemplateUpdateManyWithoutBrandInput
  contactPerson?: UserUpdateOneWithoutContactPersonToBrandInput
  users?: UserUpdateManyWithoutBrandInput
}

export interface StoreCreateManyWithoutUsersInput {
  create?: StoreCreateWithoutUsersInput[] | StoreCreateWithoutUsersInput
  connect?: StoreWhereUniqueInput[] | StoreWhereUniqueInput
}

export interface OrderTemplateUpdateManyWithoutBrandInput {
  create?: OrderTemplateCreateWithoutBrandInput[] | OrderTemplateCreateWithoutBrandInput
  connect?: OrderTemplateWhereUniqueInput[] | OrderTemplateWhereUniqueInput
  disconnect?: OrderTemplateWhereUniqueInput[] | OrderTemplateWhereUniqueInput
  delete?: OrderTemplateWhereUniqueInput[] | OrderTemplateWhereUniqueInput
  update?: OrderTemplateUpdateWithWhereUniqueWithoutBrandInput[] | OrderTemplateUpdateWithWhereUniqueWithoutBrandInput
  upsert?: OrderTemplateUpsertWithWhereUniqueWithoutBrandInput[] | OrderTemplateUpsertWithWhereUniqueWithoutBrandInput
}

export interface BrandCreateOneWithoutStoresInput {
  create?: BrandCreateWithoutStoresInput
  connect?: BrandWhereUniqueInput
}

export interface OrderTemplateUpdateWithWhereUniqueWithoutBrandInput {
  where: OrderTemplateWhereUniqueInput
  data: OrderTemplateUpdateWithoutBrandDataInput
}

export interface UserCreateManyWithoutBrandInput {
  create?: UserCreateWithoutBrandInput[] | UserCreateWithoutBrandInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface OrderTemplateUpdateWithoutBrandDataInput {
  deletedAt?: DateTime
  note?: String
  sortIndex?: Int
  defaultOrderAmount?: Int
  minOrderAmount?: Int
  maxOrderAmount?: Int
  orderable?: Boolean
  stock?: Int
  stockWarning?: Int
  visibleFrom?: DateTime
  visibleUntil?: DateTime
  properties?: PropertiesUpdateOneWithoutOrderTemplateInput
  filterOptions?: FilterOptionsUpdateOneInput
  parent?: OrderTemplateUpdateOneWithoutChildrenInput
  children?: OrderTemplateUpdateManyWithoutParentInput
  product?: ProductUpdateOneInput
}

export interface NotificationCreateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
}

export interface PropertiesUpdateOneWithoutOrderTemplateInput {
  create?: PropertiesCreateWithoutOrderTemplateInput
  connect?: PropertiesWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PropertiesUpdateWithoutOrderTemplateDataInput
  upsert?: PropertiesUpsertWithoutOrderTemplateInput
}

export interface OrderCreateManyWithoutCreatedByInput {
  create?: OrderCreateWithoutCreatedByInput[] | OrderCreateWithoutCreatedByInput
  connect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
}

export interface PropertiesUpdateWithoutOrderTemplateDataInput {
  deletedAt?: DateTime
  note?: String
  articleNumber?: String
  price?: Int
  currency?: String
  name?: String
  description?: String
  weightG?: Int
  widthMm?: Int
  heightMm?: Int
  depthMm?: Int
  color?: String
  material?: String
  size?: String
  language?: LanguageUpdateOneInput
  images?: FileUpdateManyInput
  supplier?: SupplierUpdateOneWithoutProductsInput
  product?: ProductUpdateOneWithoutPropertiesInput
  productCategory?: ProductCategoryUpdateOneWithoutPropertiesInput
}

export interface StoreCreateOneWithoutOrdersInput {
  create?: StoreCreateWithoutOrdersInput
  connect?: StoreWhereUniqueInput
}

export interface ProductCategoryUpdateOneWithoutPropertiesInput {
  create?: ProductCategoryCreateWithoutPropertiesInput
  connect?: ProductCategoryWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ProductCategoryUpdateWithoutPropertiesDataInput
  upsert?: ProductCategoryUpsertWithoutPropertiesInput
}

export interface UserCreateManyWithoutStoresInput {
  create?: UserCreateWithoutStoresInput[] | UserCreateWithoutStoresInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ProductCategoryUpdateWithoutPropertiesDataInput {
  deletedAt?: DateTime
  note?: String
  brand?: BrandUpdateOneWithoutProductCategoriesInput
  parent?: ProductCategoryUpdateOneWithoutChildrenInput
  children?: ProductCategoryUpdateManyWithoutParentInput
  products?: ProductUpdateManyWithoutProductCategoriesInput
}

export interface OrderItemCreateManyInput {
  create?: OrderItemCreateInput[] | OrderItemCreateInput
  connect?: OrderItemWhereUniqueInput[] | OrderItemWhereUniqueInput
}

export interface BrandUpdateOneWithoutProductCategoriesInput {
  create?: BrandCreateWithoutProductCategoriesInput
  connect?: BrandWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BrandUpdateWithoutProductCategoriesDataInput
  upsert?: BrandUpsertWithoutProductCategoriesInput
}

export interface OrderTemplateCreateOneInput {
  create?: OrderTemplateCreateInput
  connect?: OrderTemplateWhereUniqueInput
}

export interface BrandUpdateWithoutProductCategoriesDataInput {
  deletedAt?: DateTime
  note?: String
  domain?: String
  name?: String
  primaryColor?: String
  secondaryColor?: String
  textColor?: String
  logo?: FileUpdateOneInput
  backgroundImage?: FileUpdateOneInput
  stores?: StoreUpdateManyWithoutBrandInput
  address?: AddressUpdateOneInput
  orderTemplates?: OrderTemplateUpdateManyWithoutBrandInput
  contactPerson?: UserUpdateOneWithoutContactPersonToBrandInput
  users?: UserUpdateManyWithoutBrandInput
}

export interface FilterOptionsCreateOneInput {
  create?: FilterOptionsCreateInput
  connect?: FilterOptionsWhereUniqueInput
}

export interface UserUpdateOneWithoutContactPersonToBrandInput {
  create?: UserCreateWithoutContactPersonToBrandInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutContactPersonToBrandDataInput
  upsert?: UserUpsertWithoutContactPersonToBrandInput
}

export interface FilterOptionsWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateWithoutContactPersonToBrandDataInput {
  deletedAt?: DateTime
  note?: String
  email?: String
  password?: String
  firstName?: String
  lastName?: String
  sendNotificationToEmail?: Boolean
  phoneNumber?: String
  role?: RoleUpdateOneRequiredWithoutUsersInput
  brand?: BrandUpdateOneRequiredWithoutUsersInput
  stores?: StoreUpdateManyWithoutUsersInput
  notifications?: NotificationUpdateManyWithoutUserInput
  orders?: OrderUpdateManyWithoutCreatedByInput
}

export interface BrandCreateWithoutOrderTemplatesInput {
  deletedAt?: DateTime
  note?: String
  domain: String
  name: String
  primaryColor: String
  secondaryColor: String
  textColor: String
  logo?: FileCreateOneInput
  backgroundImage?: FileCreateOneInput
  stores?: StoreCreateManyWithoutBrandInput
  address?: AddressCreateOneInput
  productCategories?: ProductCategoryCreateManyWithoutBrandInput
  contactPerson?: UserCreateOneWithoutContactPersonToBrandInput
  users?: UserCreateManyWithoutBrandInput
}

export interface StoreUpdateManyWithoutUsersInput {
  create?: StoreCreateWithoutUsersInput[] | StoreCreateWithoutUsersInput
  connect?: StoreWhereUniqueInput[] | StoreWhereUniqueInput
  disconnect?: StoreWhereUniqueInput[] | StoreWhereUniqueInput
  delete?: StoreWhereUniqueInput[] | StoreWhereUniqueInput
  update?: StoreUpdateWithWhereUniqueWithoutUsersInput[] | StoreUpdateWithWhereUniqueWithoutUsersInput
  upsert?: StoreUpsertWithWhereUniqueWithoutUsersInput[] | StoreUpsertWithWhereUniqueWithoutUsersInput
}

export interface OrderTemplateSubscriptionWhereInput {
  AND?: OrderTemplateSubscriptionWhereInput[] | OrderTemplateSubscriptionWhereInput
  OR?: OrderTemplateSubscriptionWhereInput[] | OrderTemplateSubscriptionWhereInput
  NOT?: OrderTemplateSubscriptionWhereInput[] | OrderTemplateSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OrderTemplateWhereInput
}

export interface StoreUpdateWithWhereUniqueWithoutUsersInput {
  where: StoreWhereUniqueInput
  data: StoreUpdateWithoutUsersDataInput
}

export interface ProductCreateInput {
  deletedAt?: DateTime
  note?: String
  stock?: Int
  brand?: BrandCreateOneInput
  properties: PropertiesCreateOneWithoutProductInput
  productCategories?: ProductCategoryCreateOneWithoutProductsInput
}

export interface StoreUpdateWithoutUsersDataInput {
  deletedAt?: DateTime
  note?: String
  name?: String
  storeNumber?: String
  email?: String
  phone?: String
  website?: String
  contactPerson?: String
  contactEmail?: String
  currency?: String
  size?: String
  type?: String
  address?: AddressUpdateOneInput
  deliveryAddress?: AddressUpdateOneInput
  brand?: BrandUpdateOneWithoutStoresInput
  image?: FileUpdateOneInput
  language?: LanguageUpdateOneInput
  orders?: OrderUpdateManyWithoutStoreInput
  files?: FileUpdateManyInput
}

export interface PropertiesCreateWithoutProductInput {
  deletedAt?: DateTime
  note?: String
  articleNumber?: String
  price?: Int
  currency?: String
  name?: String
  description?: String
  weightG?: Int
  widthMm?: Int
  heightMm?: Int
  depthMm?: Int
  color?: String
  material?: String
  size?: String
  language?: LanguageCreateOneInput
  images?: FileCreateManyInput
  supplier?: SupplierCreateOneWithoutProductsInput
  productCategory?: ProductCategoryCreateOneWithoutPropertiesInput
  orderTemplate?: OrderTemplateCreateOneWithoutPropertiesInput
}

export interface BrandUpdateOneWithoutStoresInput {
  create?: BrandCreateWithoutStoresInput
  connect?: BrandWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BrandUpdateWithoutStoresDataInput
  upsert?: BrandUpsertWithoutStoresInput
}

export interface OrderTemplateCreateWithoutPropertiesInput {
  deletedAt?: DateTime
  note?: String
  sortIndex?: Int
  defaultOrderAmount?: Int
  minOrderAmount?: Int
  maxOrderAmount?: Int
  orderable?: Boolean
  stock?: Int
  stockWarning?: Int
  visibleFrom?: DateTime
  visibleUntil?: DateTime
  filterOptions?: FilterOptionsCreateOneInput
  brand: BrandCreateOneWithoutOrderTemplatesInput
  parent?: OrderTemplateCreateOneWithoutChildrenInput
  children?: OrderTemplateCreateManyWithoutParentInput
  product?: ProductCreateOneInput
}

export interface BrandUpdateWithoutStoresDataInput {
  deletedAt?: DateTime
  note?: String
  domain?: String
  name?: String
  primaryColor?: String
  secondaryColor?: String
  textColor?: String
  logo?: FileUpdateOneInput
  backgroundImage?: FileUpdateOneInput
  address?: AddressUpdateOneInput
  productCategories?: ProductCategoryUpdateManyWithoutBrandInput
  orderTemplates?: OrderTemplateUpdateManyWithoutBrandInput
  contactPerson?: UserUpdateOneWithoutContactPersonToBrandInput
  users?: UserUpdateManyWithoutBrandInput
}

export interface OrderTemplateCreateWithoutParentInput {
  deletedAt?: DateTime
  note?: String
  sortIndex?: Int
  defaultOrderAmount?: Int
  minOrderAmount?: Int
  maxOrderAmount?: Int
  orderable?: Boolean
  stock?: Int
  stockWarning?: Int
  visibleFrom?: DateTime
  visibleUntil?: DateTime
  properties?: PropertiesCreateOneWithoutOrderTemplateInput
  filterOptions?: FilterOptionsCreateOneInput
  brand: BrandCreateOneWithoutOrderTemplatesInput
  children?: OrderTemplateCreateManyWithoutParentInput
  product?: ProductCreateOneInput
}

export interface UserUpdateManyWithoutBrandInput {
  create?: UserCreateWithoutBrandInput[] | UserCreateWithoutBrandInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutBrandInput[] | UserUpdateWithWhereUniqueWithoutBrandInput
  upsert?: UserUpsertWithWhereUniqueWithoutBrandInput[] | UserUpsertWithWhereUniqueWithoutBrandInput
}

export interface ProductCategoryCreateOneWithoutProductsInput {
  create?: ProductCategoryCreateWithoutProductsInput
  connect?: ProductCategoryWhereUniqueInput
}

export interface UserUpdateWithWhereUniqueWithoutBrandInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutBrandDataInput
}

export interface ProductCategoryCreateOneWithoutChildrenInput {
  create?: ProductCategoryCreateWithoutChildrenInput
  connect?: ProductCategoryWhereUniqueInput
}

export interface UserUpdateWithoutBrandDataInput {
  deletedAt?: DateTime
  note?: String
  email?: String
  password?: String
  firstName?: String
  lastName?: String
  sendNotificationToEmail?: Boolean
  phoneNumber?: String
  role?: RoleUpdateOneRequiredWithoutUsersInput
  contactPersonToBrand?: BrandUpdateManyWithoutContactPersonInput
  stores?: StoreUpdateManyWithoutUsersInput
  notifications?: NotificationUpdateManyWithoutUserInput
  orders?: OrderUpdateManyWithoutCreatedByInput
}

export interface FilterOptionsWhereInput {
  AND?: FilterOptionsWhereInput[] | FilterOptionsWhereInput
  OR?: FilterOptionsWhereInput[] | FilterOptionsWhereInput
  NOT?: FilterOptionsWhereInput[] | FilterOptionsWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  type?: FilterOptionsType
  type_not?: FilterOptionsType
  type_in?: FilterOptionsType[] | FilterOptionsType
  type_not_in?: FilterOptionsType[] | FilterOptionsType
  storeType?: String
  storeType_not?: String
  storeType_in?: String[] | String
  storeType_not_in?: String[] | String
  storeType_lt?: String
  storeType_lte?: String
  storeType_gt?: String
  storeType_gte?: String
  storeType_contains?: String
  storeType_not_contains?: String
  storeType_starts_with?: String
  storeType_not_starts_with?: String
  storeType_ends_with?: String
  storeType_not_ends_with?: String
  size?: String
  size_not?: String
  size_in?: String[] | String
  size_not_in?: String[] | String
  size_lt?: String
  size_lte?: String
  size_gt?: String
  size_gte?: String
  size_contains?: String
  size_not_contains?: String
  size_starts_with?: String
  size_not_starts_with?: String
  size_ends_with?: String
  size_not_ends_with?: String
  currency?: String
  currency_not?: String
  currency_in?: String[] | String
  currency_not_in?: String[] | String
  currency_lt?: String
  currency_lte?: String
  currency_gt?: String
  currency_gte?: String
  currency_contains?: String
  currency_not_contains?: String
  currency_starts_with?: String
  currency_not_starts_with?: String
  currency_ends_with?: String
  currency_not_ends_with?: String
  language?: LanguageWhereInput
}

export interface NotificationUpdateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  disconnect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  delete?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  update?: NotificationUpdateWithWhereUniqueWithoutUserInput[] | NotificationUpdateWithWhereUniqueWithoutUserInput
  upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput[] | NotificationUpsertWithWhereUniqueWithoutUserInput
}

export interface OrderInput {
  store: StoreWhereUniqueInput
  order: OrderItemInput[] | OrderItemInput
  address: AddressCreateInput
  comment?: String
  poNumber?: String
}

export interface NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateWithoutUserDataInput
}

export interface ProductCategoryUpdateInput {
  deletedAt?: DateTime
  note?: String
  properties?: PropertiesUpdateOneRequiredWithoutProductCategoryInput
  brand?: BrandUpdateOneWithoutProductCategoriesInput
  parent?: ProductCategoryUpdateOneWithoutChildrenInput
  children?: ProductCategoryUpdateManyWithoutParentInput
  products?: ProductUpdateManyWithoutProductCategoriesInput
}

export interface NotificationUpdateWithoutUserDataInput {
  deletedAt?: DateTime
  note?: String
  title?: String
  content?: String
  readAt?: DateTime
  link?: String
}

export interface LanguageWhereInput {
  AND?: LanguageWhereInput[] | LanguageWhereInput
  OR?: LanguageWhereInput[] | LanguageWhereInput
  NOT?: LanguageWhereInput[] | LanguageWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  isoCode?: String
  isoCode_not?: String
  isoCode_in?: String[] | String
  isoCode_not_in?: String[] | String
  isoCode_lt?: String
  isoCode_lte?: String
  isoCode_gt?: String
  isoCode_gte?: String
  isoCode_contains?: String
  isoCode_not_contains?: String
  isoCode_starts_with?: String
  isoCode_not_starts_with?: String
  isoCode_ends_with?: String
  isoCode_not_ends_with?: String
  articleCode?: String
  articleCode_not?: String
  articleCode_in?: String[] | String
  articleCode_not_in?: String[] | String
  articleCode_lt?: String
  articleCode_lte?: String
  articleCode_gt?: String
  articleCode_gte?: String
  articleCode_contains?: String
  articleCode_not_contains?: String
  articleCode_starts_with?: String
  articleCode_not_starts_with?: String
  articleCode_ends_with?: String
  articleCode_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
}

export interface NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  update: NotificationUpdateWithoutUserDataInput
  create: NotificationCreateWithoutUserInput
}

export interface PropertiesUpdateWithWhereUniqueWithoutSupplierInput {
  where: PropertiesWhereUniqueInput
  data: PropertiesUpdateWithoutSupplierDataInput
}

export interface OrderUpdateManyWithoutCreatedByInput {
  create?: OrderCreateWithoutCreatedByInput[] | OrderCreateWithoutCreatedByInput
  connect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
  disconnect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
  delete?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
  update?: OrderUpdateWithWhereUniqueWithoutCreatedByInput[] | OrderUpdateWithWhereUniqueWithoutCreatedByInput
  upsert?: OrderUpsertWithWhereUniqueWithoutCreatedByInput[] | OrderUpsertWithWhereUniqueWithoutCreatedByInput
}

export interface StoreWhereInput {
  AND?: StoreWhereInput[] | StoreWhereInput
  OR?: StoreWhereInput[] | StoreWhereInput
  NOT?: StoreWhereInput[] | StoreWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  storeNumber?: String
  storeNumber_not?: String
  storeNumber_in?: String[] | String
  storeNumber_not_in?: String[] | String
  storeNumber_lt?: String
  storeNumber_lte?: String
  storeNumber_gt?: String
  storeNumber_gte?: String
  storeNumber_contains?: String
  storeNumber_not_contains?: String
  storeNumber_starts_with?: String
  storeNumber_not_starts_with?: String
  storeNumber_ends_with?: String
  storeNumber_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  phone?: String
  phone_not?: String
  phone_in?: String[] | String
  phone_not_in?: String[] | String
  phone_lt?: String
  phone_lte?: String
  phone_gt?: String
  phone_gte?: String
  phone_contains?: String
  phone_not_contains?: String
  phone_starts_with?: String
  phone_not_starts_with?: String
  phone_ends_with?: String
  phone_not_ends_with?: String
  website?: String
  website_not?: String
  website_in?: String[] | String
  website_not_in?: String[] | String
  website_lt?: String
  website_lte?: String
  website_gt?: String
  website_gte?: String
  website_contains?: String
  website_not_contains?: String
  website_starts_with?: String
  website_not_starts_with?: String
  website_ends_with?: String
  website_not_ends_with?: String
  contactPerson?: String
  contactPerson_not?: String
  contactPerson_in?: String[] | String
  contactPerson_not_in?: String[] | String
  contactPerson_lt?: String
  contactPerson_lte?: String
  contactPerson_gt?: String
  contactPerson_gte?: String
  contactPerson_contains?: String
  contactPerson_not_contains?: String
  contactPerson_starts_with?: String
  contactPerson_not_starts_with?: String
  contactPerson_ends_with?: String
  contactPerson_not_ends_with?: String
  contactEmail?: String
  contactEmail_not?: String
  contactEmail_in?: String[] | String
  contactEmail_not_in?: String[] | String
  contactEmail_lt?: String
  contactEmail_lte?: String
  contactEmail_gt?: String
  contactEmail_gte?: String
  contactEmail_contains?: String
  contactEmail_not_contains?: String
  contactEmail_starts_with?: String
  contactEmail_not_starts_with?: String
  contactEmail_ends_with?: String
  contactEmail_not_ends_with?: String
  currency?: String
  currency_not?: String
  currency_in?: String[] | String
  currency_not_in?: String[] | String
  currency_lt?: String
  currency_lte?: String
  currency_gt?: String
  currency_gte?: String
  currency_contains?: String
  currency_not_contains?: String
  currency_starts_with?: String
  currency_not_starts_with?: String
  currency_ends_with?: String
  currency_not_ends_with?: String
  size?: String
  size_not?: String
  size_in?: String[] | String
  size_not_in?: String[] | String
  size_lt?: String
  size_lte?: String
  size_gt?: String
  size_gte?: String
  size_contains?: String
  size_not_contains?: String
  size_starts_with?: String
  size_not_starts_with?: String
  size_ends_with?: String
  size_not_ends_with?: String
  type?: String
  type_not?: String
  type_in?: String[] | String
  type_not_in?: String[] | String
  type_lt?: String
  type_lte?: String
  type_gt?: String
  type_gte?: String
  type_contains?: String
  type_not_contains?: String
  type_starts_with?: String
  type_not_starts_with?: String
  type_ends_with?: String
  type_not_ends_with?: String
  address?: AddressWhereInput
  deliveryAddress?: AddressWhereInput
  brand?: BrandWhereInput
  image?: FileWhereInput
  language?: LanguageWhereInput
  orders_every?: OrderWhereInput
  orders_some?: OrderWhereInput
  orders_none?: OrderWhereInput
  files_every?: FileWhereInput
  files_some?: FileWhereInput
  files_none?: FileWhereInput
  users_every?: UserWhereInput
  users_some?: UserWhereInput
  users_none?: UserWhereInput
}

export interface OrderUpdateWithWhereUniqueWithoutCreatedByInput {
  where: OrderWhereUniqueInput
  data: OrderUpdateWithoutCreatedByDataInput
}

export interface BrandWhereInput {
  AND?: BrandWhereInput[] | BrandWhereInput
  OR?: BrandWhereInput[] | BrandWhereInput
  NOT?: BrandWhereInput[] | BrandWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  domain?: String
  domain_not?: String
  domain_in?: String[] | String
  domain_not_in?: String[] | String
  domain_lt?: String
  domain_lte?: String
  domain_gt?: String
  domain_gte?: String
  domain_contains?: String
  domain_not_contains?: String
  domain_starts_with?: String
  domain_not_starts_with?: String
  domain_ends_with?: String
  domain_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  primaryColor?: String
  primaryColor_not?: String
  primaryColor_in?: String[] | String
  primaryColor_not_in?: String[] | String
  primaryColor_lt?: String
  primaryColor_lte?: String
  primaryColor_gt?: String
  primaryColor_gte?: String
  primaryColor_contains?: String
  primaryColor_not_contains?: String
  primaryColor_starts_with?: String
  primaryColor_not_starts_with?: String
  primaryColor_ends_with?: String
  primaryColor_not_ends_with?: String
  secondaryColor?: String
  secondaryColor_not?: String
  secondaryColor_in?: String[] | String
  secondaryColor_not_in?: String[] | String
  secondaryColor_lt?: String
  secondaryColor_lte?: String
  secondaryColor_gt?: String
  secondaryColor_gte?: String
  secondaryColor_contains?: String
  secondaryColor_not_contains?: String
  secondaryColor_starts_with?: String
  secondaryColor_not_starts_with?: String
  secondaryColor_ends_with?: String
  secondaryColor_not_ends_with?: String
  textColor?: String
  textColor_not?: String
  textColor_in?: String[] | String
  textColor_not_in?: String[] | String
  textColor_lt?: String
  textColor_lte?: String
  textColor_gt?: String
  textColor_gte?: String
  textColor_contains?: String
  textColor_not_contains?: String
  textColor_starts_with?: String
  textColor_not_starts_with?: String
  textColor_ends_with?: String
  textColor_not_ends_with?: String
  logo?: FileWhereInput
  backgroundImage?: FileWhereInput
  stores_every?: StoreWhereInput
  stores_some?: StoreWhereInput
  stores_none?: StoreWhereInput
  address?: AddressWhereInput
  productCategories_every?: ProductCategoryWhereInput
  productCategories_some?: ProductCategoryWhereInput
  productCategories_none?: ProductCategoryWhereInput
  orderTemplates_every?: OrderTemplateWhereInput
  orderTemplates_some?: OrderTemplateWhereInput
  orderTemplates_none?: OrderTemplateWhereInput
  contactPerson?: UserWhereInput
  users_every?: UserWhereInput
  users_some?: UserWhereInput
  users_none?: UserWhereInput
}

export interface OrderUpdateWithoutCreatedByDataInput {
  deletedAt?: DateTime
  note?: String
  orderNumber?: String
  poNumber?: String
  trackAndTraceCode?: String
  status?: OrderStatus
  orderedAt?: DateTime
  store?: StoreUpdateOneRequiredWithoutOrdersInput
  comments?: CommentUpdateManyWithoutOrderInput
  items?: OrderItemUpdateManyInput
  address?: AddressUpdateOneInput
}

export interface OrderUpdateInput {
  deletedAt?: DateTime
  note?: String
  orderNumber?: String
  poNumber?: String
  trackAndTraceCode?: String
  status?: OrderStatus
  orderedAt?: DateTime
  store?: StoreUpdateOneRequiredWithoutOrdersInput
  comments?: CommentUpdateManyWithoutOrderInput
  createdBy?: UserUpdateOneWithoutOrdersInput
  items?: OrderItemUpdateManyInput
  address?: AddressUpdateOneInput
}

export interface StoreUpdateOneRequiredWithoutOrdersInput {
  create?: StoreCreateWithoutOrdersInput
  connect?: StoreWhereUniqueInput
  update?: StoreUpdateWithoutOrdersDataInput
  upsert?: StoreUpsertWithoutOrdersInput
}

export interface BrandUpdateInput {
  deletedAt?: DateTime
  note?: String
  domain?: String
  name?: String
  primaryColor?: String
  secondaryColor?: String
  textColor?: String
  logo?: FileUpdateOneInput
  backgroundImage?: FileUpdateOneInput
  stores?: StoreUpdateManyWithoutBrandInput
  address?: AddressUpdateOneInput
  productCategories?: ProductCategoryUpdateManyWithoutBrandInput
  orderTemplates?: OrderTemplateUpdateManyWithoutBrandInput
  contactPerson?: UserUpdateOneWithoutContactPersonToBrandInput
  users?: UserUpdateManyWithoutBrandInput
}

export interface StoreUpdateWithoutOrdersDataInput {
  deletedAt?: DateTime
  note?: String
  name?: String
  storeNumber?: String
  email?: String
  phone?: String
  website?: String
  contactPerson?: String
  contactEmail?: String
  currency?: String
  size?: String
  type?: String
  address?: AddressUpdateOneInput
  deliveryAddress?: AddressUpdateOneInput
  brand?: BrandUpdateOneWithoutStoresInput
  image?: FileUpdateOneInput
  language?: LanguageUpdateOneInput
  files?: FileUpdateManyInput
  users?: UserUpdateManyWithoutStoresInput
}

export interface StoreWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateManyWithoutStoresInput {
  create?: UserCreateWithoutStoresInput[] | UserCreateWithoutStoresInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutStoresInput[] | UserUpdateWithWhereUniqueWithoutStoresInput
  upsert?: UserUpsertWithWhereUniqueWithoutStoresInput[] | UserUpsertWithWhereUniqueWithoutStoresInput
}

export interface SupplierWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateWithWhereUniqueWithoutStoresInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutStoresDataInput
}

export interface OrderTemplateWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateWithoutStoresDataInput {
  deletedAt?: DateTime
  note?: String
  email?: String
  password?: String
  firstName?: String
  lastName?: String
  sendNotificationToEmail?: Boolean
  phoneNumber?: String
  role?: RoleUpdateOneRequiredWithoutUsersInput
  brand?: BrandUpdateOneRequiredWithoutUsersInput
  contactPersonToBrand?: BrandUpdateManyWithoutContactPersonInput
  notifications?: NotificationUpdateManyWithoutUserInput
  orders?: OrderUpdateManyWithoutCreatedByInput
}

export interface SupportPageWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpsertWithWhereUniqueWithoutStoresInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutStoresDataInput
  create: UserCreateWithoutStoresInput
}

export interface NotificationWhereUniqueInput {
  id?: ID_Input
}

export interface StoreUpsertWithoutOrdersInput {
  update: StoreUpdateWithoutOrdersDataInput
  create: StoreCreateWithoutOrdersInput
}

export interface RoleCreateWithoutUsersInput {
  deletedAt?: DateTime
  note?: String
  name: String
  description?: String
  permissions?: RolePermissionCreateManyInput
}

export interface OrderItemUpdateManyInput {
  create?: OrderItemCreateInput[] | OrderItemCreateInput
  connect?: OrderItemWhereUniqueInput[] | OrderItemWhereUniqueInput
  disconnect?: OrderItemWhereUniqueInput[] | OrderItemWhereUniqueInput
  delete?: OrderItemWhereUniqueInput[] | OrderItemWhereUniqueInput
  update?: OrderItemUpdateWithWhereUniqueNestedInput[] | OrderItemUpdateWithWhereUniqueNestedInput
  upsert?: OrderItemUpsertWithWhereUniqueNestedInput[] | OrderItemUpsertWithWhereUniqueNestedInput
}

export interface RoleWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface OrderItemUpdateWithWhereUniqueNestedInput {
  where: OrderItemWhereUniqueInput
  data: OrderItemUpdateDataInput
}

export interface FileCreateInput {
  deletedAt?: DateTime
  note?: String
  originalName?: String
  contentType?: String
  mimeType: String
  bucket: String
  key: String
  location: String
}

export interface OrderItemUpdateDataInput {
  deletedAt?: DateTime
  note?: String
  name?: String
  amount?: Int
  price?: Int
  currency?: String
  orderTemplate?: OrderTemplateUpdateOneInput
  items?: OrderItemUpdateManyInput
  product?: ProductUpdateOneInput
}

export interface AddressCreateOneInput {
  create?: AddressCreateInput
  connect?: AddressWhereUniqueInput
}

export interface OrderTemplateUpdateOneInput {
  create?: OrderTemplateCreateInput
  connect?: OrderTemplateWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OrderTemplateUpdateDataInput
  upsert?: OrderTemplateUpsertNestedInput
}

export interface LanguageCreateInput {
  deletedAt?: DateTime
  note?: String
  isoCode: String
  articleCode: String
  name: String
}

export interface OrderTemplateUpdateDataInput {
  deletedAt?: DateTime
  note?: String
  sortIndex?: Int
  defaultOrderAmount?: Int
  minOrderAmount?: Int
  maxOrderAmount?: Int
  orderable?: Boolean
  stock?: Int
  stockWarning?: Int
  visibleFrom?: DateTime
  visibleUntil?: DateTime
  properties?: PropertiesUpdateOneWithoutOrderTemplateInput
  filterOptions?: FilterOptionsUpdateOneInput
  brand?: BrandUpdateOneRequiredWithoutOrderTemplatesInput
  parent?: OrderTemplateUpdateOneWithoutChildrenInput
  children?: OrderTemplateUpdateManyWithoutParentInput
  product?: ProductUpdateOneInput
}

export interface CommentCreateManyWithoutOrderInput {
  create?: CommentCreateWithoutOrderInput[] | CommentCreateWithoutOrderInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
}

export interface FilterOptionsUpdateOneInput {
  create?: FilterOptionsCreateInput
  connect?: FilterOptionsWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: FilterOptionsUpdateDataInput
  upsert?: FilterOptionsUpsertNestedInput
}

export interface UserCreateOneWithoutOrdersInput {
  create?: UserCreateWithoutOrdersInput
  connect?: UserWhereUniqueInput
}

export interface FilterOptionsUpdateDataInput {
  deletedAt?: DateTime
  note?: String
  type?: FilterOptionsType
  storeType?: String
  size?: String
  currency?: String
  language?: LanguageUpdateOneInput
}

export interface ProductCategoryCreateManyWithoutBrandInput {
  create?: ProductCategoryCreateWithoutBrandInput[] | ProductCategoryCreateWithoutBrandInput
  connect?: ProductCategoryWhereUniqueInput[] | ProductCategoryWhereUniqueInput
}

export interface FilterOptionsUpsertNestedInput {
  update: FilterOptionsUpdateDataInput
  create: FilterOptionsCreateInput
}

export interface FileCreateManyInput {
  create?: FileCreateInput[] | FileCreateInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
}

export interface BrandUpdateOneRequiredWithoutOrderTemplatesInput {
  create?: BrandCreateWithoutOrderTemplatesInput
  connect?: BrandWhereUniqueInput
  update?: BrandUpdateWithoutOrderTemplatesDataInput
  upsert?: BrandUpsertWithoutOrderTemplatesInput
}

export interface ProductCreateWithoutPropertiesInput {
  deletedAt?: DateTime
  note?: String
  stock?: Int
  brand?: BrandCreateOneInput
  productCategories?: ProductCategoryCreateOneWithoutProductsInput
}

export interface BrandUpdateWithoutOrderTemplatesDataInput {
  deletedAt?: DateTime
  note?: String
  domain?: String
  name?: String
  primaryColor?: String
  secondaryColor?: String
  textColor?: String
  logo?: FileUpdateOneInput
  backgroundImage?: FileUpdateOneInput
  stores?: StoreUpdateManyWithoutBrandInput
  address?: AddressUpdateOneInput
  productCategories?: ProductCategoryUpdateManyWithoutBrandInput
  contactPerson?: UserUpdateOneWithoutContactPersonToBrandInput
  users?: UserUpdateManyWithoutBrandInput
}

export interface OrderTemplateCreateWithoutBrandInput {
  deletedAt?: DateTime
  note?: String
  sortIndex?: Int
  defaultOrderAmount?: Int
  minOrderAmount?: Int
  maxOrderAmount?: Int
  orderable?: Boolean
  stock?: Int
  stockWarning?: Int
  visibleFrom?: DateTime
  visibleUntil?: DateTime
  properties?: PropertiesCreateOneWithoutOrderTemplateInput
  filterOptions?: FilterOptionsCreateOneInput
  parent?: OrderTemplateCreateOneWithoutChildrenInput
  children?: OrderTemplateCreateManyWithoutParentInput
  product?: ProductCreateOneInput
}

export interface BrandUpsertWithoutOrderTemplatesInput {
  update: BrandUpdateWithoutOrderTemplatesDataInput
  create: BrandCreateWithoutOrderTemplatesInput
}

export interface ProductCategoryCreateWithoutPropertiesInput {
  deletedAt?: DateTime
  note?: String
  brand?: BrandCreateOneWithoutProductCategoriesInput
  parent?: ProductCategoryCreateOneWithoutChildrenInput
  children?: ProductCategoryCreateManyWithoutParentInput
  products?: ProductCreateManyWithoutProductCategoriesInput
}

export interface OrderTemplateUpdateOneWithoutChildrenInput {
  create?: OrderTemplateCreateWithoutChildrenInput
  connect?: OrderTemplateWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OrderTemplateUpdateWithoutChildrenDataInput
  upsert?: OrderTemplateUpsertWithoutChildrenInput
}

export interface UserCreateWithoutContactPersonToBrandInput {
  deletedAt?: DateTime
  note?: String
  email: String
  password: String
  firstName: String
  lastName: String
  sendNotificationToEmail?: Boolean
  phoneNumber?: String
  role: RoleCreateOneWithoutUsersInput
  brand: BrandCreateOneWithoutUsersInput
  stores?: StoreCreateManyWithoutUsersInput
  notifications?: NotificationCreateManyWithoutUserInput
  orders?: OrderCreateManyWithoutCreatedByInput
}

export interface OrderTemplateUpdateWithoutChildrenDataInput {
  deletedAt?: DateTime
  note?: String
  sortIndex?: Int
  defaultOrderAmount?: Int
  minOrderAmount?: Int
  maxOrderAmount?: Int
  orderable?: Boolean
  stock?: Int
  stockWarning?: Int
  visibleFrom?: DateTime
  visibleUntil?: DateTime
  properties?: PropertiesUpdateOneWithoutOrderTemplateInput
  filterOptions?: FilterOptionsUpdateOneInput
  brand?: BrandUpdateOneRequiredWithoutOrderTemplatesInput
  parent?: OrderTemplateUpdateOneWithoutChildrenInput
  product?: ProductUpdateOneInput
}

export interface BrandCreateWithoutStoresInput {
  deletedAt?: DateTime
  note?: String
  domain: String
  name: String
  primaryColor: String
  secondaryColor: String
  textColor: String
  logo?: FileCreateOneInput
  backgroundImage?: FileCreateOneInput
  address?: AddressCreateOneInput
  productCategories?: ProductCategoryCreateManyWithoutBrandInput
  orderTemplates?: OrderTemplateCreateManyWithoutBrandInput
  contactPerson?: UserCreateOneWithoutContactPersonToBrandInput
  users?: UserCreateManyWithoutBrandInput
}

export interface ProductUpdateOneInput {
  create?: ProductCreateInput
  connect?: ProductWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ProductUpdateDataInput
  upsert?: ProductUpsertNestedInput
}

export interface NotificationCreateWithoutUserInput {
  deletedAt?: DateTime
  note?: String
  title: String
  content: String
  readAt?: DateTime
  link?: String
}

export interface ProductUpdateDataInput {
  deletedAt?: DateTime
  note?: String
  stock?: Int
  brand?: BrandUpdateOneInput
  properties?: PropertiesUpdateOneRequiredWithoutProductInput
  productCategories?: ProductCategoryUpdateOneWithoutProductsInput
}

export interface StoreCreateWithoutOrdersInput {
  deletedAt?: DateTime
  note?: String
  name: String
  storeNumber?: String
  email?: String
  phone?: String
  website?: String
  contactPerson?: String
  contactEmail?: String
  currency?: String
  size?: String
  type?: String
  address?: AddressCreateOneInput
  deliveryAddress?: AddressCreateOneInput
  brand?: BrandCreateOneWithoutStoresInput
  image?: FileCreateOneInput
  language?: LanguageCreateOneInput
  files?: FileCreateManyInput
  users?: UserCreateManyWithoutStoresInput
}

export interface PropertiesUpdateOneRequiredWithoutProductInput {
  create?: PropertiesCreateWithoutProductInput
  connect?: PropertiesWhereUniqueInput
  update?: PropertiesUpdateWithoutProductDataInput
  upsert?: PropertiesUpsertWithoutProductInput
}

export interface OrderItemCreateInput {
  deletedAt?: DateTime
  note?: String
  name?: String
  amount?: Int
  price?: Int
  currency?: String
  orderTemplate?: OrderTemplateCreateOneInput
  items?: OrderItemCreateManyInput
  product?: ProductCreateOneInput
}

export interface PropertiesUpdateWithoutProductDataInput {
  deletedAt?: DateTime
  note?: String
  articleNumber?: String
  price?: Int
  currency?: String
  name?: String
  description?: String
  weightG?: Int
  widthMm?: Int
  heightMm?: Int
  depthMm?: Int
  color?: String
  material?: String
  size?: String
  language?: LanguageUpdateOneInput
  images?: FileUpdateManyInput
  supplier?: SupplierUpdateOneWithoutProductsInput
  productCategory?: ProductCategoryUpdateOneWithoutPropertiesInput
  orderTemplate?: OrderTemplateUpdateOneWithoutPropertiesInput
}

export interface FilterOptionsCreateInput {
  deletedAt?: DateTime
  note?: String
  type?: FilterOptionsType
  storeType?: String
  size?: String
  currency?: String
  language?: LanguageCreateOneInput
}

export interface OrderTemplateUpdateOneWithoutPropertiesInput {
  create?: OrderTemplateCreateWithoutPropertiesInput
  connect?: OrderTemplateWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OrderTemplateUpdateWithoutPropertiesDataInput
  upsert?: OrderTemplateUpsertWithoutPropertiesInput
}

export interface OrderTemplateCreateOneWithoutChildrenInput {
  create?: OrderTemplateCreateWithoutChildrenInput
  connect?: OrderTemplateWhereUniqueInput
}

export interface OrderTemplateUpdateWithoutPropertiesDataInput {
  deletedAt?: DateTime
  note?: String
  sortIndex?: Int
  defaultOrderAmount?: Int
  minOrderAmount?: Int
  maxOrderAmount?: Int
  orderable?: Boolean
  stock?: Int
  stockWarning?: Int
  visibleFrom?: DateTime
  visibleUntil?: DateTime
  filterOptions?: FilterOptionsUpdateOneInput
  brand?: BrandUpdateOneRequiredWithoutOrderTemplatesInput
  parent?: OrderTemplateUpdateOneWithoutChildrenInput
  children?: OrderTemplateUpdateManyWithoutParentInput
  product?: ProductUpdateOneInput
}

export interface PropertiesCreateOneWithoutProductInput {
  create?: PropertiesCreateWithoutProductInput
  connect?: PropertiesWhereUniqueInput
}

export interface OrderTemplateUpdateManyWithoutParentInput {
  create?: OrderTemplateCreateWithoutParentInput[] | OrderTemplateCreateWithoutParentInput
  connect?: OrderTemplateWhereUniqueInput[] | OrderTemplateWhereUniqueInput
  disconnect?: OrderTemplateWhereUniqueInput[] | OrderTemplateWhereUniqueInput
  delete?: OrderTemplateWhereUniqueInput[] | OrderTemplateWhereUniqueInput
  update?: OrderTemplateUpdateWithWhereUniqueWithoutParentInput[] | OrderTemplateUpdateWithWhereUniqueWithoutParentInput
  upsert?: OrderTemplateUpsertWithWhereUniqueWithoutParentInput[] | OrderTemplateUpsertWithWhereUniqueWithoutParentInput
}

export interface OrderTemplateCreateManyWithoutParentInput {
  create?: OrderTemplateCreateWithoutParentInput[] | OrderTemplateCreateWithoutParentInput
  connect?: OrderTemplateWhereUniqueInput[] | OrderTemplateWhereUniqueInput
}

export interface OrderTemplateUpdateWithWhereUniqueWithoutParentInput {
  where: OrderTemplateWhereUniqueInput
  data: OrderTemplateUpdateWithoutParentDataInput
}

export interface ProductCategoryCreateWithoutProductsInput {
  deletedAt?: DateTime
  note?: String
  properties: PropertiesCreateOneWithoutProductCategoryInput
  brand?: BrandCreateOneWithoutProductCategoriesInput
  parent?: ProductCategoryCreateOneWithoutChildrenInput
  children?: ProductCategoryCreateManyWithoutParentInput
}

export interface OrderTemplateUpdateWithoutParentDataInput {
  deletedAt?: DateTime
  note?: String
  sortIndex?: Int
  defaultOrderAmount?: Int
  minOrderAmount?: Int
  maxOrderAmount?: Int
  orderable?: Boolean
  stock?: Int
  stockWarning?: Int
  visibleFrom?: DateTime
  visibleUntil?: DateTime
  properties?: PropertiesUpdateOneWithoutOrderTemplateInput
  filterOptions?: FilterOptionsUpdateOneInput
  brand?: BrandUpdateOneRequiredWithoutOrderTemplatesInput
  children?: OrderTemplateUpdateManyWithoutParentInput
  product?: ProductUpdateOneInput
}

export interface NotificationWhereInput {
  AND?: NotificationWhereInput[] | NotificationWhereInput
  OR?: NotificationWhereInput[] | NotificationWhereInput
  NOT?: NotificationWhereInput[] | NotificationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  content?: String
  content_not?: String
  content_in?: String[] | String
  content_not_in?: String[] | String
  content_lt?: String
  content_lte?: String
  content_gt?: String
  content_gte?: String
  content_contains?: String
  content_not_contains?: String
  content_starts_with?: String
  content_not_starts_with?: String
  content_ends_with?: String
  content_not_ends_with?: String
  readAt?: DateTime
  readAt_not?: DateTime
  readAt_in?: DateTime[] | DateTime
  readAt_not_in?: DateTime[] | DateTime
  readAt_lt?: DateTime
  readAt_lte?: DateTime
  readAt_gt?: DateTime
  readAt_gte?: DateTime
  link?: String
  link_not?: String
  link_in?: String[] | String
  link_not_in?: String[] | String
  link_lt?: String
  link_lte?: String
  link_gt?: String
  link_gte?: String
  link_contains?: String
  link_not_contains?: String
  link_starts_with?: String
  link_not_starts_with?: String
  link_ends_with?: String
  link_not_ends_with?: String
  user?: UserWhereInput
}

export interface OrderTemplateUpsertWithWhereUniqueWithoutParentInput {
  where: OrderTemplateWhereUniqueInput
  update: OrderTemplateUpdateWithoutParentDataInput
  create: OrderTemplateCreateWithoutParentInput
}

export interface OrderWhereInput {
  AND?: OrderWhereInput[] | OrderWhereInput
  OR?: OrderWhereInput[] | OrderWhereInput
  NOT?: OrderWhereInput[] | OrderWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  orderNumber?: String
  orderNumber_not?: String
  orderNumber_in?: String[] | String
  orderNumber_not_in?: String[] | String
  orderNumber_lt?: String
  orderNumber_lte?: String
  orderNumber_gt?: String
  orderNumber_gte?: String
  orderNumber_contains?: String
  orderNumber_not_contains?: String
  orderNumber_starts_with?: String
  orderNumber_not_starts_with?: String
  orderNumber_ends_with?: String
  orderNumber_not_ends_with?: String
  poNumber?: String
  poNumber_not?: String
  poNumber_in?: String[] | String
  poNumber_not_in?: String[] | String
  poNumber_lt?: String
  poNumber_lte?: String
  poNumber_gt?: String
  poNumber_gte?: String
  poNumber_contains?: String
  poNumber_not_contains?: String
  poNumber_starts_with?: String
  poNumber_not_starts_with?: String
  poNumber_ends_with?: String
  poNumber_not_ends_with?: String
  trackAndTraceCode?: String
  trackAndTraceCode_not?: String
  trackAndTraceCode_in?: String[] | String
  trackAndTraceCode_not_in?: String[] | String
  trackAndTraceCode_lt?: String
  trackAndTraceCode_lte?: String
  trackAndTraceCode_gt?: String
  trackAndTraceCode_gte?: String
  trackAndTraceCode_contains?: String
  trackAndTraceCode_not_contains?: String
  trackAndTraceCode_starts_with?: String
  trackAndTraceCode_not_starts_with?: String
  trackAndTraceCode_ends_with?: String
  trackAndTraceCode_not_ends_with?: String
  status?: OrderStatus
  status_not?: OrderStatus
  status_in?: OrderStatus[] | OrderStatus
  status_not_in?: OrderStatus[] | OrderStatus
  orderedAt?: DateTime
  orderedAt_not?: DateTime
  orderedAt_in?: DateTime[] | DateTime
  orderedAt_not_in?: DateTime[] | DateTime
  orderedAt_lt?: DateTime
  orderedAt_lte?: DateTime
  orderedAt_gt?: DateTime
  orderedAt_gte?: DateTime
  store?: StoreWhereInput
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
  createdBy?: UserWhereInput
  items_every?: OrderItemWhereInput
  items_some?: OrderItemWhereInput
  items_none?: OrderItemWhereInput
  address?: AddressWhereInput
}

export interface OrderTemplateUpsertWithoutPropertiesInput {
  update: OrderTemplateUpdateWithoutPropertiesDataInput
  create: OrderTemplateCreateWithoutPropertiesInput
}

export interface AddressWhereInput {
  AND?: AddressWhereInput[] | AddressWhereInput
  OR?: AddressWhereInput[] | AddressWhereInput
  NOT?: AddressWhereInput[] | AddressWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  countryCode?: String
  countryCode_not?: String
  countryCode_in?: String[] | String
  countryCode_not_in?: String[] | String
  countryCode_lt?: String
  countryCode_lte?: String
  countryCode_gt?: String
  countryCode_gte?: String
  countryCode_contains?: String
  countryCode_not_contains?: String
  countryCode_starts_with?: String
  countryCode_not_starts_with?: String
  countryCode_ends_with?: String
  countryCode_not_ends_with?: String
  country?: String
  country_not?: String
  country_in?: String[] | String
  country_not_in?: String[] | String
  country_lt?: String
  country_lte?: String
  country_gt?: String
  country_gte?: String
  country_contains?: String
  country_not_contains?: String
  country_starts_with?: String
  country_not_starts_with?: String
  country_ends_with?: String
  country_not_ends_with?: String
  city?: String
  city_not?: String
  city_in?: String[] | String
  city_not_in?: String[] | String
  city_lt?: String
  city_lte?: String
  city_gt?: String
  city_gte?: String
  city_contains?: String
  city_not_contains?: String
  city_starts_with?: String
  city_not_starts_with?: String
  city_ends_with?: String
  city_not_ends_with?: String
  street?: String
  street_not?: String
  street_in?: String[] | String
  street_not_in?: String[] | String
  street_lt?: String
  street_lte?: String
  street_gt?: String
  street_gte?: String
  street_contains?: String
  street_not_contains?: String
  street_starts_with?: String
  street_not_starts_with?: String
  street_ends_with?: String
  street_not_ends_with?: String
  number?: String
  number_not?: String
  number_in?: String[] | String
  number_not_in?: String[] | String
  number_lt?: String
  number_lte?: String
  number_gt?: String
  number_gte?: String
  number_contains?: String
  number_not_contains?: String
  number_starts_with?: String
  number_not_starts_with?: String
  number_ends_with?: String
  number_not_ends_with?: String
  postalCode?: String
  postalCode_not?: String
  postalCode_in?: String[] | String
  postalCode_not_in?: String[] | String
  postalCode_lt?: String
  postalCode_lte?: String
  postalCode_gt?: String
  postalCode_gte?: String
  postalCode_contains?: String
  postalCode_not_contains?: String
  postalCode_starts_with?: String
  postalCode_not_starts_with?: String
  postalCode_ends_with?: String
  postalCode_not_ends_with?: String
  addition?: String
  addition_not?: String
  addition_in?: String[] | String
  addition_not_in?: String[] | String
  addition_lt?: String
  addition_lte?: String
  addition_gt?: String
  addition_gte?: String
  addition_contains?: String
  addition_not_contains?: String
  addition_starts_with?: String
  addition_not_starts_with?: String
  addition_ends_with?: String
  addition_not_ends_with?: String
  longtitude?: Float
  longtitude_not?: Float
  longtitude_in?: Float[] | Float
  longtitude_not_in?: Float[] | Float
  longtitude_lt?: Float
  longtitude_lte?: Float
  longtitude_gt?: Float
  longtitude_gte?: Float
  latitude?: Float
  latitude_not?: Float
  latitude_in?: Float[] | Float
  latitude_not_in?: Float[] | Float
  latitude_lt?: Float
  latitude_lte?: Float
  latitude_gt?: Float
  latitude_gte?: Float
}

export interface PropertiesUpsertWithoutProductInput {
  update: PropertiesUpdateWithoutProductDataInput
  create: PropertiesCreateWithoutProductInput
}

export interface RoleWhereInput {
  AND?: RoleWhereInput[] | RoleWhereInput
  OR?: RoleWhereInput[] | RoleWhereInput
  NOT?: RoleWhereInput[] | RoleWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  permissions_every?: RolePermissionWhereInput
  permissions_some?: RolePermissionWhereInput
  permissions_none?: RolePermissionWhereInput
  users_every?: UserWhereInput
  users_some?: UserWhereInput
  users_none?: UserWhereInput
}

export interface ProductCategoryUpdateOneWithoutProductsInput {
  create?: ProductCategoryCreateWithoutProductsInput
  connect?: ProductCategoryWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ProductCategoryUpdateWithoutProductsDataInput
  upsert?: ProductCategoryUpsertWithoutProductsInput
}

export interface StoreUpsertWithWhereUniqueWithoutBrandInput {
  where: StoreWhereUniqueInput
  update: StoreUpdateWithoutBrandDataInput
  create: StoreCreateWithoutBrandInput
}

export interface ProductCategoryUpdateWithoutProductsDataInput {
  deletedAt?: DateTime
  note?: String
  properties?: PropertiesUpdateOneRequiredWithoutProductCategoryInput
  brand?: BrandUpdateOneWithoutProductCategoriesInput
  parent?: ProductCategoryUpdateOneWithoutChildrenInput
  children?: ProductCategoryUpdateManyWithoutParentInput
}

export interface ProductWhereUniqueInput {
  id?: ID_Input
}

export interface ProductCategoryUpdateOneWithoutChildrenInput {
  create?: ProductCategoryCreateWithoutChildrenInput
  connect?: ProductCategoryWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ProductCategoryUpdateWithoutChildrenDataInput
  upsert?: ProductCategoryUpsertWithoutChildrenInput
}

export interface SupportPageWhereInput {
  AND?: SupportPageWhereInput[] | SupportPageWhereInput
  OR?: SupportPageWhereInput[] | SupportPageWhereInput
  NOT?: SupportPageWhereInput[] | SupportPageWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  content?: String
  content_not?: String
  content_in?: String[] | String
  content_not_in?: String[] | String
  content_lt?: String
  content_lte?: String
  content_gt?: String
  content_gte?: String
  content_contains?: String
  content_not_contains?: String
  content_starts_with?: String
  content_not_starts_with?: String
  content_ends_with?: String
  content_not_ends_with?: String
}

export interface ProductCategoryUpdateWithoutChildrenDataInput {
  deletedAt?: DateTime
  note?: String
  properties?: PropertiesUpdateOneRequiredWithoutProductCategoryInput
  brand?: BrandUpdateOneWithoutProductCategoriesInput
  parent?: ProductCategoryUpdateOneWithoutChildrenInput
  products?: ProductUpdateManyWithoutProductCategoriesInput
}

export interface RolePermissionCreateInput {
  deletedAt?: DateTime
  note?: String
  action: PermissionAction
  model: PermissionModel
}

export interface ProductUpdateManyWithoutProductCategoriesInput {
  create?: ProductCreateWithoutProductCategoriesInput[] | ProductCreateWithoutProductCategoriesInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  update?: ProductUpdateWithWhereUniqueWithoutProductCategoriesInput[] | ProductUpdateWithWhereUniqueWithoutProductCategoriesInput
  upsert?: ProductUpsertWithWhereUniqueWithoutProductCategoriesInput[] | ProductUpsertWithWhereUniqueWithoutProductCategoriesInput
}

export interface StoreCreateManyWithoutBrandInput {
  create?: StoreCreateWithoutBrandInput[] | StoreCreateWithoutBrandInput
  connect?: StoreWhereUniqueInput[] | StoreWhereUniqueInput
}

export interface ProductUpdateWithWhereUniqueWithoutProductCategoriesInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutProductCategoriesDataInput
}

export interface OrderCreateManyWithoutStoreInput {
  create?: OrderCreateWithoutStoreInput[] | OrderCreateWithoutStoreInput
  connect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
}

export interface ProductUpdateWithoutProductCategoriesDataInput {
  deletedAt?: DateTime
  note?: String
  stock?: Int
  brand?: BrandUpdateOneInput
  properties?: PropertiesUpdateOneRequiredWithoutProductInput
}

export interface BrandCreateManyWithoutContactPersonInput {
  create?: BrandCreateWithoutContactPersonInput[] | BrandCreateWithoutContactPersonInput
  connect?: BrandWhereUniqueInput[] | BrandWhereUniqueInput
}

export interface ProductUpsertWithWhereUniqueWithoutProductCategoriesInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutProductCategoriesDataInput
  create: ProductCreateWithoutProductCategoriesInput
}

export interface SupplierCreateWithoutProductsInput {
  deletedAt?: DateTime
  note?: String
  name: String
  address: AddressCreateOneInput
}

export interface ProductCategoryUpsertWithoutChildrenInput {
  update: ProductCategoryUpdateWithoutChildrenDataInput
  create: ProductCategoryCreateWithoutChildrenInput
}

export interface PropertiesCreateWithoutOrderTemplateInput {
  deletedAt?: DateTime
  note?: String
  articleNumber?: String
  price?: Int
  currency?: String
  name?: String
  description?: String
  weightG?: Int
  widthMm?: Int
  heightMm?: Int
  depthMm?: Int
  color?: String
  material?: String
  size?: String
  language?: LanguageCreateOneInput
  images?: FileCreateManyInput
  supplier?: SupplierCreateOneWithoutProductsInput
  product?: ProductCreateOneWithoutPropertiesInput
  productCategory?: ProductCategoryCreateOneWithoutPropertiesInput
}

export interface ProductCategoryUpdateManyWithoutParentInput {
  create?: ProductCategoryCreateWithoutParentInput[] | ProductCategoryCreateWithoutParentInput
  connect?: ProductCategoryWhereUniqueInput[] | ProductCategoryWhereUniqueInput
  disconnect?: ProductCategoryWhereUniqueInput[] | ProductCategoryWhereUniqueInput
  delete?: ProductCategoryWhereUniqueInput[] | ProductCategoryWhereUniqueInput
  update?: ProductCategoryUpdateWithWhereUniqueWithoutParentInput[] | ProductCategoryUpdateWithWhereUniqueWithoutParentInput
  upsert?: ProductCategoryUpsertWithWhereUniqueWithoutParentInput[] | ProductCategoryUpsertWithWhereUniqueWithoutParentInput
}

export interface StoreCreateWithoutUsersInput {
  deletedAt?: DateTime
  note?: String
  name: String
  storeNumber?: String
  email?: String
  phone?: String
  website?: String
  contactPerson?: String
  contactEmail?: String
  currency?: String
  size?: String
  type?: String
  address?: AddressCreateOneInput
  deliveryAddress?: AddressCreateOneInput
  brand?: BrandCreateOneWithoutStoresInput
  image?: FileCreateOneInput
  language?: LanguageCreateOneInput
  orders?: OrderCreateManyWithoutStoreInput
  files?: FileCreateManyInput
}

export interface ProductCategoryUpdateWithWhereUniqueWithoutParentInput {
  where: ProductCategoryWhereUniqueInput
  data: ProductCategoryUpdateWithoutParentDataInput
}

export interface OrderCreateWithoutCreatedByInput {
  deletedAt?: DateTime
  note?: String
  orderNumber?: String
  poNumber?: String
  trackAndTraceCode?: String
  status: OrderStatus
  orderedAt?: DateTime
  store: StoreCreateOneWithoutOrdersInput
  comments?: CommentCreateManyWithoutOrderInput
  items?: OrderItemCreateManyInput
  address?: AddressCreateOneInput
}

export interface ProductCategoryUpdateWithoutParentDataInput {
  deletedAt?: DateTime
  note?: String
  properties?: PropertiesUpdateOneRequiredWithoutProductCategoryInput
  brand?: BrandUpdateOneWithoutProductCategoriesInput
  children?: ProductCategoryUpdateManyWithoutParentInput
  products?: ProductUpdateManyWithoutProductCategoriesInput
}

export interface OrderTemplateCreateInput {
  deletedAt?: DateTime
  note?: String
  sortIndex?: Int
  defaultOrderAmount?: Int
  minOrderAmount?: Int
  maxOrderAmount?: Int
  orderable?: Boolean
  stock?: Int
  stockWarning?: Int
  visibleFrom?: DateTime
  visibleUntil?: DateTime
  properties?: PropertiesCreateOneWithoutOrderTemplateInput
  filterOptions?: FilterOptionsCreateOneInput
  brand: BrandCreateOneWithoutOrderTemplatesInput
  parent?: OrderTemplateCreateOneWithoutChildrenInput
  children?: OrderTemplateCreateManyWithoutParentInput
  product?: ProductCreateOneInput
}

export interface ProductCategoryUpsertWithWhereUniqueWithoutParentInput {
  where: ProductCategoryWhereUniqueInput
  update: ProductCategoryUpdateWithoutParentDataInput
  create: ProductCategoryCreateWithoutParentInput
}

export interface ProductCreateOneInput {
  create?: ProductCreateInput
  connect?: ProductWhereUniqueInput
}

export interface ProductCategoryUpsertWithoutProductsInput {
  update: ProductCategoryUpdateWithoutProductsDataInput
  create: ProductCategoryCreateWithoutProductsInput
}

export interface PropertiesWhereUniqueInput {
  id?: ID_Input
}

export interface ProductUpsertNestedInput {
  update: ProductUpdateDataInput
  create: ProductCreateInput
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[] | CommentWhereInput
  OR?: CommentWhereInput[] | CommentWhereInput
  NOT?: CommentWhereInput[] | CommentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  content?: String
  content_not?: String
  content_in?: String[] | String
  content_not_in?: String[] | String
  content_lt?: String
  content_lte?: String
  content_gt?: String
  content_gte?: String
  content_contains?: String
  content_not_contains?: String
  content_starts_with?: String
  content_not_starts_with?: String
  content_ends_with?: String
  content_not_ends_with?: String
  user?: UserWhereInput
  order?: OrderWhereInput
}

export interface OrderTemplateUpsertWithoutChildrenInput {
  update: OrderTemplateUpdateWithoutChildrenDataInput
  create: OrderTemplateCreateWithoutChildrenInput
}

export interface PropertiesCreateManyWithoutSupplierInput {
  create?: PropertiesCreateWithoutSupplierInput[] | PropertiesCreateWithoutSupplierInput
  connect?: PropertiesWhereUniqueInput[] | PropertiesWhereUniqueInput
}

export interface OrderTemplateUpsertNestedInput {
  update: OrderTemplateUpdateDataInput
  create: OrderTemplateCreateInput
}

export interface UserUpsertWithoutOrdersInput {
  update: UserUpdateWithoutOrdersDataInput
  create: UserCreateWithoutOrdersInput
}

export interface OrderItemUpsertWithWhereUniqueNestedInput {
  where: OrderItemWhereUniqueInput
  update: OrderItemUpdateDataInput
  create: OrderItemCreateInput
}

export interface UserCreateInput {
  deletedAt?: DateTime
  note?: String
  email: String
  password: String
  firstName: String
  lastName: String
  sendNotificationToEmail?: Boolean
  phoneNumber?: String
  role: RoleCreateOneWithoutUsersInput
  brand: BrandCreateOneWithoutUsersInput
  contactPersonToBrand?: BrandCreateManyWithoutContactPersonInput
  stores?: StoreCreateManyWithoutUsersInput
  notifications?: NotificationCreateManyWithoutUserInput
  orders?: OrderCreateManyWithoutCreatedByInput
}

export interface OrderUpsertWithWhereUniqueWithoutCreatedByInput {
  where: OrderWhereUniqueInput
  update: OrderUpdateWithoutCreatedByDataInput
  create: OrderCreateWithoutCreatedByInput
}

export interface AddressWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpsertWithWhereUniqueWithoutBrandInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutBrandDataInput
  create: UserCreateWithoutBrandInput
}

export interface PropertiesCreateOneWithoutProductCategoryInput {
  create?: PropertiesCreateWithoutProductCategoryInput
  connect?: PropertiesWhereUniqueInput
}

export interface BrandUpsertWithoutStoresInput {
  update: BrandUpdateWithoutStoresDataInput
  create: BrandCreateWithoutStoresInput
}

export interface BrandCreateWithoutProductCategoriesInput {
  deletedAt?: DateTime
  note?: String
  domain: String
  name: String
  primaryColor: String
  secondaryColor: String
  textColor: String
  logo?: FileCreateOneInput
  backgroundImage?: FileCreateOneInput
  stores?: StoreCreateManyWithoutBrandInput
  address?: AddressCreateOneInput
  orderTemplates?: OrderTemplateCreateManyWithoutBrandInput
  contactPerson?: UserCreateOneWithoutContactPersonToBrandInput
  users?: UserCreateManyWithoutBrandInput
}

export interface StoreUpsertWithWhereUniqueWithoutUsersInput {
  where: StoreWhereUniqueInput
  update: StoreUpdateWithoutUsersDataInput
  create: StoreCreateWithoutUsersInput
}

export interface UserCreateWithoutStoresInput {
  deletedAt?: DateTime
  note?: String
  email: String
  password: String
  firstName: String
  lastName: String
  sendNotificationToEmail?: Boolean
  phoneNumber?: String
  role: RoleCreateOneWithoutUsersInput
  brand: BrandCreateOneWithoutUsersInput
  contactPersonToBrand?: BrandCreateManyWithoutContactPersonInput
  notifications?: NotificationCreateManyWithoutUserInput
  orders?: OrderCreateManyWithoutCreatedByInput
}

export interface UserUpsertWithoutContactPersonToBrandInput {
  update: UserUpdateWithoutContactPersonToBrandDataInput
  create: UserCreateWithoutContactPersonToBrandInput
}

export interface OrderTemplateCreateOneWithoutPropertiesInput {
  create?: OrderTemplateCreateWithoutPropertiesInput
  connect?: OrderTemplateWhereUniqueInput
}

export interface BrandUpsertWithoutProductCategoriesInput {
  update: BrandUpdateWithoutProductCategoriesDataInput
  create: BrandCreateWithoutProductCategoriesInput
}

export interface OrderItemInput {
  amount?: Int
  orderTemplate?: OrderTemplateWhereUniqueInput
  children?: OrderItemInput[] | OrderItemInput
}

export interface ProductCategoryUpsertWithoutPropertiesInput {
  update: ProductCategoryUpdateWithoutPropertiesDataInput
  create: ProductCategoryCreateWithoutPropertiesInput
}

export interface RolePermissionWhereInput {
  AND?: RolePermissionWhereInput[] | RolePermissionWhereInput
  OR?: RolePermissionWhereInput[] | RolePermissionWhereInput
  NOT?: RolePermissionWhereInput[] | RolePermissionWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  action?: PermissionAction
  action_not?: PermissionAction
  action_in?: PermissionAction[] | PermissionAction
  action_not_in?: PermissionAction[] | PermissionAction
  model?: PermissionModel
  model_not?: PermissionModel
  model_in?: PermissionModel[] | PermissionModel
  model_not_in?: PermissionModel[] | PermissionModel
}

export interface PropertiesUpsertWithoutOrderTemplateInput {
  update: PropertiesUpdateWithoutOrderTemplateDataInput
  create: PropertiesCreateWithoutOrderTemplateInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface OrderTemplateUpsertWithWhereUniqueWithoutBrandInput {
  where: OrderTemplateWhereUniqueInput
  update: OrderTemplateUpdateWithoutBrandDataInput
  create: OrderTemplateCreateWithoutBrandInput
}

export interface UserCreateWithoutBrandInput {
  deletedAt?: DateTime
  note?: String
  email: String
  password: String
  firstName: String
  lastName: String
  sendNotificationToEmail?: Boolean
  phoneNumber?: String
  role: RoleCreateOneWithoutUsersInput
  contactPersonToBrand?: BrandCreateManyWithoutContactPersonInput
  stores?: StoreCreateManyWithoutUsersInput
  notifications?: NotificationCreateManyWithoutUserInput
  orders?: OrderCreateManyWithoutCreatedByInput
}

export interface BrandUpsertNestedInput {
  update: BrandUpdateDataInput
  create: BrandCreateInput
}

export interface ProductWhereInput {
  AND?: ProductWhereInput[] | ProductWhereInput
  OR?: ProductWhereInput[] | ProductWhereInput
  NOT?: ProductWhereInput[] | ProductWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  stock?: Int
  stock_not?: Int
  stock_in?: Int[] | Int
  stock_not_in?: Int[] | Int
  stock_lt?: Int
  stock_lte?: Int
  stock_gt?: Int
  stock_gte?: Int
  brand?: BrandWhereInput
  properties?: PropertiesWhereInput
  productCategories?: ProductCategoryWhereInput
}

export interface BrandUpsertWithWhereUniqueWithoutContactPersonInput {
  where: BrandWhereUniqueInput
  update: BrandUpdateWithoutContactPersonDataInput
  create: BrandCreateWithoutContactPersonInput
}

export interface ProductCategoryUpsertWithWhereUniqueWithoutBrandInput {
  where: ProductCategoryWhereUniqueInput
  update: ProductCategoryUpdateWithoutBrandDataInput
  create: ProductCategoryCreateWithoutBrandInput
}

export interface PropertiesUpsertWithoutProductCategoryInput {
  update: PropertiesUpdateWithoutProductCategoryDataInput
  create: PropertiesCreateWithoutProductCategoryInput
}

export interface ProductUpsertWithoutPropertiesInput {
  update: ProductUpdateWithoutPropertiesDataInput
  create: ProductCreateWithoutPropertiesInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface BrandCreateOneWithoutOrderTemplatesInput {
  create?: BrandCreateWithoutOrderTemplatesInput
  connect?: BrandWhereUniqueInput
}

export interface BrandCreateInput {
  deletedAt?: DateTime
  note?: String
  domain: String
  name: String
  primaryColor: String
  secondaryColor: String
  textColor: String
  logo?: FileCreateOneInput
  backgroundImage?: FileCreateOneInput
  stores?: StoreCreateManyWithoutBrandInput
  address?: AddressCreateOneInput
  productCategories?: ProductCategoryCreateManyWithoutBrandInput
  orderTemplates?: OrderTemplateCreateManyWithoutBrandInput
  contactPerson?: UserCreateOneWithoutContactPersonToBrandInput
  users?: UserCreateManyWithoutBrandInput
}

export interface BrandCreateWithoutUsersInput {
  deletedAt?: DateTime
  note?: String
  domain: String
  name: String
  primaryColor: String
  secondaryColor: String
  textColor: String
  logo?: FileCreateOneInput
  backgroundImage?: FileCreateOneInput
  stores?: StoreCreateManyWithoutBrandInput
  address?: AddressCreateOneInput
  productCategories?: ProductCategoryCreateManyWithoutBrandInput
  orderTemplates?: OrderTemplateCreateManyWithoutBrandInput
  contactPerson?: UserCreateOneWithoutContactPersonToBrandInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface OrderTemplatePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  sortIndex?: Int
  defaultOrderAmount?: Int
  minOrderAmount?: Int
  maxOrderAmount?: Int
  orderable?: Boolean
  stock?: Int
  stockWarning?: Int
  visibleFrom?: DateTime
  visibleUntil?: DateTime
}

export interface Comment extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  content?: String
  user: User
  order: Order
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  email: String
  password: String
  firstName: String
  lastName: String
  sendNotificationToEmail: Boolean
  phoneNumber?: String
  role: Role
  brand: Brand
  contactPersonToBrand?: Brand[]
  stores?: Store[]
  notifications?: Notification[]
  orders?: Order[]
}

export interface Order extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  orderNumber?: String
  poNumber?: String
  store: Store
  trackAndTraceCode?: String
  status: OrderStatus
  comments?: Comment[]
  createdBy?: User
  orderedAt?: DateTime
  items?: OrderItem[]
  address?: Address
}

export interface AuthPayload {
  token: String
  user: User
}

export interface Language extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  isoCode: String
  articleCode: String
  name: String
}

export interface AggregateStore {
  count: Int
}

export interface Address extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  countryCode: String
  country?: String
  city: String
  street: String
  number?: String
  postalCode: String
  addition?: String
  longtitude?: Float
  latitude?: Float
}

/*
 * A connection to a list of items.

 */
export interface StoreConnection {
  pageInfo: PageInfo
  edges: StoreEdge[]
  aggregate: AggregateStore
}

export interface Store extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  name: String
  storeNumber?: String
  address?: Address
  deliveryAddress?: Address
  brand?: Brand
  image?: File
  email?: String
  phone?: String
  website?: String
  contactPerson?: String
  contactEmail?: String
  currency?: String
  size?: String
  type?: String
  language?: Language
  orders?: Order[]
  files?: File[]
  users?: User[]
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface File extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  originalName?: String
  contentType?: String
  mimeType: String
  bucket: String
  key: String
  location: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface Brand extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  domain: String
  name: String
  primaryColor: String
  secondaryColor: String
  textColor: String
  logo?: File
  backgroundImage?: File
  stores?: Store[]
  address?: Address
  productCategories?: ProductCategory[]
  orderTemplates?: OrderTemplate[]
  contactPerson?: User
  users?: User[]
}

export interface Notification extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  title: String
  content: String
  readAt?: DateTime
  link?: String
  user: User
}

export interface ProductCategory extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  properties: Properties
  brand?: Brand
  parent?: ProductCategory
  children?: ProductCategory[]
  products?: Product[]
}

export interface Supplier extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  name: String
  products?: Properties[]
  address: Address
}

export interface RolePermission extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  action: PermissionAction
  model: PermissionModel
}

export interface OrderTemplate extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  sortIndex?: Int
  defaultOrderAmount?: Int
  minOrderAmount?: Int
  maxOrderAmount?: Int
  orderable?: Boolean
  stock?: Int
  stockWarning?: Int
  visibleFrom?: DateTime
  visibleUntil?: DateTime
  properties?: Properties
  filterOptions?: FilterOptions
  brand: Brand
  parent?: OrderTemplate
  children?: OrderTemplate[]
  product?: Product
}

export interface Properties extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  articleNumber?: String
  price?: Int
  currency?: String
  name?: String
  description?: String
  weightG?: Int
  widthMm?: Int
  heightMm?: Int
  depthMm?: Int
  color?: String
  material?: String
  size?: String
  language?: Language
  images?: File[]
  supplier?: Supplier
  product?: Product
  productCategory?: ProductCategory
  orderTemplate?: OrderTemplate
}

export interface NotificationSubscriptionPayload {
  mutation: MutationType
  node?: Notification
  updatedFields?: String[]
  previousValues?: NotificationPreviousValues
}

export interface SupportPage extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  title: String
  content: String
}

export interface NotificationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  title: String
  content: String
  readAt?: DateTime
  link?: String
}

export interface Role extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  name: String
  description?: String
  permissions?: RolePermission[]
  users?: User[]
}

/*
 * An edge in a connection.

 */
export interface StoreEdge {
  node: Store
  cursor: String
}

export interface OrderItem extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  name?: String
  amount?: Int
  price?: Int
  currency?: String
  orderTemplate?: OrderTemplate
  items?: OrderItem[]
  product?: Product
}

export interface AggregateUser {
  count: Int
}

export interface Product extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  stock?: Int
  brand?: Brand
  properties: Properties
  productCategories?: ProductCategory
}

export interface FilterOptions extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  type?: FilterOptionsType
  language?: Language
  storeType?: String
  size?: String
  currency?: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface OrderTemplateSubscriptionPayload {
  mutation: MutationType
  node?: OrderTemplate
  updatedFields?: String[]
  previousValues?: OrderTemplatePreviousValues
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number

export type Upload = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string