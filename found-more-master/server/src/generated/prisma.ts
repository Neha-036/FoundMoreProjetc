import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    stores: <T = Store[]>(args: { where?: StoreWhereInput, orderBy?: StoreOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    roles: <T = Role[]>(args: { where?: RoleWhereInput, orderBy?: RoleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    productCategories: <T = ProductCategory[]>(args: { where?: ProductCategoryWhereInput, orderBy?: ProductCategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    propertieses: <T = Properties[]>(args: { where?: PropertiesWhereInput, orderBy?: PropertiesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orders: <T = Order[]>(args: { where?: OrderWhereInput, orderBy?: OrderOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comments: <T = Comment[]>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    suppliers: <T = Supplier[]>(args: { where?: SupplierWhereInput, orderBy?: SupplierOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    supportPages: <T = SupportPage[]>(args: { where?: SupportPageWhereInput, orderBy?: SupportPageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notifications: <T = Notification[]>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orderTemplates: <T = OrderTemplate[]>(args: { where?: OrderTemplateWhereInput, orderBy?: OrderTemplateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filterOptionses: <T = FilterOptions[]>(args: { where?: FilterOptionsWhereInput, orderBy?: FilterOptionsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orderItems: <T = OrderItem[]>(args: { where?: OrderItemWhereInput, orderBy?: OrderItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    rolePermissions: <T = RolePermission[]>(args: { where?: RolePermissionWhereInput, orderBy?: RolePermissionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    brands: <T = Brand[]>(args: { where?: BrandWhereInput, orderBy?: BrandOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = File[]>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    products: <T = Product[]>(args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    languages: <T = Language[]>(args: { where?: LanguageWhereInput, orderBy?: LanguageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    addresses: <T = Address[]>(args: { where?: AddressWhereInput, orderBy?: AddressOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    store: <T = Store | null>(args: { where: StoreWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    role: <T = Role | null>(args: { where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    productCategory: <T = ProductCategory | null>(args: { where: ProductCategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    properties: <T = Properties | null>(args: { where: PropertiesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    order: <T = Order | null>(args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    supplier: <T = Supplier | null>(args: { where: SupplierWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    supportPage: <T = SupportPage | null>(args: { where: SupportPageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orderTemplate: <T = OrderTemplate | null>(args: { where: OrderTemplateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filterOptions: <T = FilterOptions | null>(args: { where: FilterOptionsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orderItem: <T = OrderItem | null>(args: { where: OrderItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    rolePermission: <T = RolePermission | null>(args: { where: RolePermissionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    brand: <T = Brand | null>(args: { where: BrandWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    product: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    language: <T = Language | null>(args: { where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    address: <T = Address | null>(args: { where: AddressWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    storesConnection: <T = StoreConnection>(args: { where?: StoreWhereInput, orderBy?: StoreOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    rolesConnection: <T = RoleConnection>(args: { where?: RoleWhereInput, orderBy?: RoleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    productCategoriesConnection: <T = ProductCategoryConnection>(args: { where?: ProductCategoryWhereInput, orderBy?: ProductCategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    propertiesesConnection: <T = PropertiesConnection>(args: { where?: PropertiesWhereInput, orderBy?: PropertiesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ordersConnection: <T = OrderConnection>(args: { where?: OrderWhereInput, orderBy?: OrderOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commentsConnection: <T = CommentConnection>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    suppliersConnection: <T = SupplierConnection>(args: { where?: SupplierWhereInput, orderBy?: SupplierOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    supportPagesConnection: <T = SupportPageConnection>(args: { where?: SupportPageWhereInput, orderBy?: SupportPageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationsConnection: <T = NotificationConnection>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orderTemplatesConnection: <T = OrderTemplateConnection>(args: { where?: OrderTemplateWhereInput, orderBy?: OrderTemplateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filterOptionsesConnection: <T = FilterOptionsConnection>(args: { where?: FilterOptionsWhereInput, orderBy?: FilterOptionsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orderItemsConnection: <T = OrderItemConnection>(args: { where?: OrderItemWhereInput, orderBy?: OrderItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    rolePermissionsConnection: <T = RolePermissionConnection>(args: { where?: RolePermissionWhereInput, orderBy?: RolePermissionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    brandsConnection: <T = BrandConnection>(args: { where?: BrandWhereInput, orderBy?: BrandOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    productsConnection: <T = ProductConnection>(args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    languagesConnection: <T = LanguageConnection>(args: { where?: LanguageWhereInput, orderBy?: LanguageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    addressesConnection: <T = AddressConnection>(args: { where?: AddressWhereInput, orderBy?: AddressOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createStore: <T = Store>(args: { data: StoreCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRole: <T = Role>(args: { data: RoleCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProductCategory: <T = ProductCategory>(args: { data: ProductCategoryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProperties: <T = Properties>(args: { data: PropertiesCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOrder: <T = Order>(args: { data: OrderCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSupplier: <T = Supplier>(args: { data: SupplierCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSupportPage: <T = SupportPage>(args: { data: SupportPageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNotification: <T = Notification>(args: { data: NotificationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOrderTemplate: <T = OrderTemplate>(args: { data: OrderTemplateCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFilterOptions: <T = FilterOptions>(args: { data: FilterOptionsCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOrderItem: <T = OrderItem>(args: { data: OrderItemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRolePermission: <T = RolePermission>(args: { data: RolePermissionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBrand: <T = Brand>(args: { data: BrandCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProduct: <T = Product>(args: { data: ProductCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLanguage: <T = Language>(args: { data: LanguageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAddress: <T = Address>(args: { data: AddressCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateStore: <T = Store | null>(args: { data: StoreUpdateInput, where: StoreWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRole: <T = Role | null>(args: { data: RoleUpdateInput, where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProductCategory: <T = ProductCategory | null>(args: { data: ProductCategoryUpdateInput, where: ProductCategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProperties: <T = Properties | null>(args: { data: PropertiesUpdateInput, where: PropertiesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOrder: <T = Order | null>(args: { data: OrderUpdateInput, where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateComment: <T = Comment | null>(args: { data: CommentUpdateInput, where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSupplier: <T = Supplier | null>(args: { data: SupplierUpdateInput, where: SupplierWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSupportPage: <T = SupportPage | null>(args: { data: SupportPageUpdateInput, where: SupportPageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNotification: <T = Notification | null>(args: { data: NotificationUpdateInput, where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOrderTemplate: <T = OrderTemplate | null>(args: { data: OrderTemplateUpdateInput, where: OrderTemplateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFilterOptions: <T = FilterOptions | null>(args: { data: FilterOptionsUpdateInput, where: FilterOptionsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOrderItem: <T = OrderItem | null>(args: { data: OrderItemUpdateInput, where: OrderItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRolePermission: <T = RolePermission | null>(args: { data: RolePermissionUpdateInput, where: RolePermissionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBrand: <T = Brand | null>(args: { data: BrandUpdateInput, where: BrandWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProduct: <T = Product | null>(args: { data: ProductUpdateInput, where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLanguage: <T = Language | null>(args: { data: LanguageUpdateInput, where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAddress: <T = Address | null>(args: { data: AddressUpdateInput, where: AddressWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteStore: <T = Store | null>(args: { where: StoreWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRole: <T = Role | null>(args: { where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteProductCategory: <T = ProductCategory | null>(args: { where: ProductCategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteProperties: <T = Properties | null>(args: { where: PropertiesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOrder: <T = Order | null>(args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteComment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSupplier: <T = Supplier | null>(args: { where: SupplierWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSupportPage: <T = SupportPage | null>(args: { where: SupportPageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNotification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOrderTemplate: <T = OrderTemplate | null>(args: { where: OrderTemplateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFilterOptions: <T = FilterOptions | null>(args: { where: FilterOptionsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOrderItem: <T = OrderItem | null>(args: { where: OrderItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRolePermission: <T = RolePermission | null>(args: { where: RolePermissionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBrand: <T = Brand | null>(args: { where: BrandWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteProduct: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLanguage: <T = Language | null>(args: { where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAddress: <T = Address | null>(args: { where: AddressWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertStore: <T = Store>(args: { where: StoreWhereUniqueInput, create: StoreCreateInput, update: StoreUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRole: <T = Role>(args: { where: RoleWhereUniqueInput, create: RoleCreateInput, update: RoleUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProductCategory: <T = ProductCategory>(args: { where: ProductCategoryWhereUniqueInput, create: ProductCategoryCreateInput, update: ProductCategoryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProperties: <T = Properties>(args: { where: PropertiesWhereUniqueInput, create: PropertiesCreateInput, update: PropertiesUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOrder: <T = Order>(args: { where: OrderWhereUniqueInput, create: OrderCreateInput, update: OrderUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertComment: <T = Comment>(args: { where: CommentWhereUniqueInput, create: CommentCreateInput, update: CommentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSupplier: <T = Supplier>(args: { where: SupplierWhereUniqueInput, create: SupplierCreateInput, update: SupplierUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSupportPage: <T = SupportPage>(args: { where: SupportPageWhereUniqueInput, create: SupportPageCreateInput, update: SupportPageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNotification: <T = Notification>(args: { where: NotificationWhereUniqueInput, create: NotificationCreateInput, update: NotificationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOrderTemplate: <T = OrderTemplate>(args: { where: OrderTemplateWhereUniqueInput, create: OrderTemplateCreateInput, update: OrderTemplateUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFilterOptions: <T = FilterOptions>(args: { where: FilterOptionsWhereUniqueInput, create: FilterOptionsCreateInput, update: FilterOptionsUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOrderItem: <T = OrderItem>(args: { where: OrderItemWhereUniqueInput, create: OrderItemCreateInput, update: OrderItemUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRolePermission: <T = RolePermission>(args: { where: RolePermissionWhereUniqueInput, create: RolePermissionCreateInput, update: RolePermissionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBrand: <T = Brand>(args: { where: BrandWhereUniqueInput, create: BrandCreateInput, update: BrandUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProduct: <T = Product>(args: { where: ProductWhereUniqueInput, create: ProductCreateInput, update: ProductUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLanguage: <T = Language>(args: { where: LanguageWhereUniqueInput, create: LanguageCreateInput, update: LanguageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAddress: <T = Address>(args: { where: AddressWhereUniqueInput, create: AddressCreateInput, update: AddressUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyStores: <T = BatchPayload>(args: { data: StoreUpdateManyMutationInput, where?: StoreWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRoles: <T = BatchPayload>(args: { data: RoleUpdateManyMutationInput, where?: RoleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProductCategories: <T = BatchPayload>(args: { data: ProductCategoryUpdateManyMutationInput, where?: ProductCategoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPropertieses: <T = BatchPayload>(args: { data: PropertiesUpdateManyMutationInput, where?: PropertiesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOrders: <T = BatchPayload>(args: { data: OrderUpdateManyMutationInput, where?: OrderWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyComments: <T = BatchPayload>(args: { data: CommentUpdateManyMutationInput, where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySuppliers: <T = BatchPayload>(args: { data: SupplierUpdateManyMutationInput, where?: SupplierWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySupportPages: <T = BatchPayload>(args: { data: SupportPageUpdateManyMutationInput, where?: SupportPageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNotifications: <T = BatchPayload>(args: { data: NotificationUpdateManyMutationInput, where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOrderTemplates: <T = BatchPayload>(args: { data: OrderTemplateUpdateManyMutationInput, where?: OrderTemplateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFilterOptionses: <T = BatchPayload>(args: { data: FilterOptionsUpdateManyMutationInput, where?: FilterOptionsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOrderItems: <T = BatchPayload>(args: { data: OrderItemUpdateManyMutationInput, where?: OrderItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRolePermissions: <T = BatchPayload>(args: { data: RolePermissionUpdateManyMutationInput, where?: RolePermissionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBrands: <T = BatchPayload>(args: { data: BrandUpdateManyMutationInput, where?: BrandWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateManyMutationInput, where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProducts: <T = BatchPayload>(args: { data: ProductUpdateManyMutationInput, where?: ProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLanguages: <T = BatchPayload>(args: { data: LanguageUpdateManyMutationInput, where?: LanguageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAddresses: <T = BatchPayload>(args: { data: AddressUpdateManyMutationInput, where?: AddressWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyStores: <T = BatchPayload>(args: { where?: StoreWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRoles: <T = BatchPayload>(args: { where?: RoleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProductCategories: <T = BatchPayload>(args: { where?: ProductCategoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPropertieses: <T = BatchPayload>(args: { where?: PropertiesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOrders: <T = BatchPayload>(args: { where?: OrderWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyComments: <T = BatchPayload>(args: { where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySuppliers: <T = BatchPayload>(args: { where?: SupplierWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySupportPages: <T = BatchPayload>(args: { where?: SupportPageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNotifications: <T = BatchPayload>(args: { where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOrderTemplates: <T = BatchPayload>(args: { where?: OrderTemplateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFilterOptionses: <T = BatchPayload>(args: { where?: FilterOptionsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOrderItems: <T = BatchPayload>(args: { where?: OrderItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRolePermissions: <T = BatchPayload>(args: { where?: RolePermissionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBrands: <T = BatchPayload>(args: { where?: BrandWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProducts: <T = BatchPayload>(args: { where?: ProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLanguages: <T = BatchPayload>(args: { where?: LanguageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAddresses: <T = BatchPayload>(args: { where?: AddressWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    store: <T = StoreSubscriptionPayload | null>(args: { where?: StoreSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    role: <T = RoleSubscriptionPayload | null>(args: { where?: RoleSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    productCategory: <T = ProductCategorySubscriptionPayload | null>(args: { where?: ProductCategorySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    properties: <T = PropertiesSubscriptionPayload | null>(args: { where?: PropertiesSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    order: <T = OrderSubscriptionPayload | null>(args: { where?: OrderSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    comment: <T = CommentSubscriptionPayload | null>(args: { where?: CommentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    supplier: <T = SupplierSubscriptionPayload | null>(args: { where?: SupplierSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    supportPage: <T = SupportPageSubscriptionPayload | null>(args: { where?: SupportPageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    notification: <T = NotificationSubscriptionPayload | null>(args: { where?: NotificationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    orderTemplate: <T = OrderTemplateSubscriptionPayload | null>(args: { where?: OrderTemplateSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    filterOptions: <T = FilterOptionsSubscriptionPayload | null>(args: { where?: FilterOptionsSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    orderItem: <T = OrderItemSubscriptionPayload | null>(args: { where?: OrderItemSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    rolePermission: <T = RolePermissionSubscriptionPayload | null>(args: { where?: RolePermissionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    brand: <T = BrandSubscriptionPayload | null>(args: { where?: BrandSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    product: <T = ProductSubscriptionPayload | null>(args: { where?: ProductSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    language: <T = LanguageSubscriptionPayload | null>(args: { where?: LanguageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    address: <T = AddressSubscriptionPayload | null>(args: { where?: AddressSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Store: (where?: StoreWhereInput) => Promise<boolean>
  Role: (where?: RoleWhereInput) => Promise<boolean>
  ProductCategory: (where?: ProductCategoryWhereInput) => Promise<boolean>
  Properties: (where?: PropertiesWhereInput) => Promise<boolean>
  Order: (where?: OrderWhereInput) => Promise<boolean>
  Comment: (where?: CommentWhereInput) => Promise<boolean>
  Supplier: (where?: SupplierWhereInput) => Promise<boolean>
  SupportPage: (where?: SupportPageWhereInput) => Promise<boolean>
  Notification: (where?: NotificationWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  OrderTemplate: (where?: OrderTemplateWhereInput) => Promise<boolean>
  FilterOptions: (where?: FilterOptionsWhereInput) => Promise<boolean>
  OrderItem: (where?: OrderItemWhereInput) => Promise<boolean>
  RolePermission: (where?: RolePermissionWhereInput) => Promise<boolean>
  Brand: (where?: BrandWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
  Product: (where?: ProductWhereInput) => Promise<boolean>
  Language: (where?: LanguageWhereInput) => Promise<boolean>
  Address: (where?: AddressWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
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
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type Address implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  countryCode: String!
  country: String
  city: String!
  street: String!
  number: String
  postalCode: String!
  addition: String
  longtitude: Float
  latitude: Float
}

"""A connection to a list of items."""
type AddressConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AddressEdge]!
  aggregate: AggregateAddress!
}

input AddressCreateInput {
  deletedAt: DateTime
  note: String
  countryCode: String!
  country: String
  city: String!
  street: String!
  number: String
  postalCode: String!
  addition: String
  longtitude: Float
  latitude: Float
}

input AddressCreateOneInput {
  create: AddressCreateInput
  connect: AddressWhereUniqueInput
}

"""An edge in a connection."""
type AddressEdge {
  """The item at the end of the edge."""
  node: Address!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AddressOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
  countryCode_ASC
  countryCode_DESC
  country_ASC
  country_DESC
  city_ASC
  city_DESC
  street_ASC
  street_DESC
  number_ASC
  number_DESC
  postalCode_ASC
  postalCode_DESC
  addition_ASC
  addition_DESC
  longtitude_ASC
  longtitude_DESC
  latitude_ASC
  latitude_DESC
}

type AddressPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  countryCode: String!
  country: String
  city: String!
  street: String!
  number: String
  postalCode: String!
  addition: String
  longtitude: Float
  latitude: Float
}

type AddressSubscriptionPayload {
  mutation: MutationType!
  node: Address
  updatedFields: [String!]
  previousValues: AddressPreviousValues
}

input AddressSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AddressSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AddressSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AddressSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AddressWhereInput
}

input AddressUpdateDataInput {
  deletedAt: DateTime
  note: String
  countryCode: String
  country: String
  city: String
  street: String
  number: String
  postalCode: String
  addition: String
  longtitude: Float
  latitude: Float
}

input AddressUpdateInput {
  deletedAt: DateTime
  note: String
  countryCode: String
  country: String
  city: String
  street: String
  number: String
  postalCode: String
  addition: String
  longtitude: Float
  latitude: Float
}

input AddressUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
  countryCode: String
  country: String
  city: String
  street: String
  number: String
  postalCode: String
  addition: String
  longtitude: Float
  latitude: Float
}

input AddressUpdateOneInput {
  create: AddressCreateInput
  connect: AddressWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: AddressUpdateDataInput
  upsert: AddressUpsertNestedInput
}

input AddressUpdateOneRequiredInput {
  create: AddressCreateInput
  connect: AddressWhereUniqueInput
  update: AddressUpdateDataInput
  upsert: AddressUpsertNestedInput
}

input AddressUpsertNestedInput {
  update: AddressUpdateDataInput!
  create: AddressCreateInput!
}

input AddressWhereInput {
  """Logical AND on all given filters."""
  AND: [AddressWhereInput!]

  """Logical OR on all given filters."""
  OR: [AddressWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AddressWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  countryCode: String

  """All values that are not equal to given value."""
  countryCode_not: String

  """All values that are contained in given list."""
  countryCode_in: [String!]

  """All values that are not contained in given list."""
  countryCode_not_in: [String!]

  """All values less than the given value."""
  countryCode_lt: String

  """All values less than or equal the given value."""
  countryCode_lte: String

  """All values greater than the given value."""
  countryCode_gt: String

  """All values greater than or equal the given value."""
  countryCode_gte: String

  """All values containing the given string."""
  countryCode_contains: String

  """All values not containing the given string."""
  countryCode_not_contains: String

  """All values starting with the given string."""
  countryCode_starts_with: String

  """All values not starting with the given string."""
  countryCode_not_starts_with: String

  """All values ending with the given string."""
  countryCode_ends_with: String

  """All values not ending with the given string."""
  countryCode_not_ends_with: String
  country: String

  """All values that are not equal to given value."""
  country_not: String

  """All values that are contained in given list."""
  country_in: [String!]

  """All values that are not contained in given list."""
  country_not_in: [String!]

  """All values less than the given value."""
  country_lt: String

  """All values less than or equal the given value."""
  country_lte: String

  """All values greater than the given value."""
  country_gt: String

  """All values greater than or equal the given value."""
  country_gte: String

  """All values containing the given string."""
  country_contains: String

  """All values not containing the given string."""
  country_not_contains: String

  """All values starting with the given string."""
  country_starts_with: String

  """All values not starting with the given string."""
  country_not_starts_with: String

  """All values ending with the given string."""
  country_ends_with: String

  """All values not ending with the given string."""
  country_not_ends_with: String
  city: String

  """All values that are not equal to given value."""
  city_not: String

  """All values that are contained in given list."""
  city_in: [String!]

  """All values that are not contained in given list."""
  city_not_in: [String!]

  """All values less than the given value."""
  city_lt: String

  """All values less than or equal the given value."""
  city_lte: String

  """All values greater than the given value."""
  city_gt: String

  """All values greater than or equal the given value."""
  city_gte: String

  """All values containing the given string."""
  city_contains: String

  """All values not containing the given string."""
  city_not_contains: String

  """All values starting with the given string."""
  city_starts_with: String

  """All values not starting with the given string."""
  city_not_starts_with: String

  """All values ending with the given string."""
  city_ends_with: String

  """All values not ending with the given string."""
  city_not_ends_with: String
  street: String

  """All values that are not equal to given value."""
  street_not: String

  """All values that are contained in given list."""
  street_in: [String!]

  """All values that are not contained in given list."""
  street_not_in: [String!]

  """All values less than the given value."""
  street_lt: String

  """All values less than or equal the given value."""
  street_lte: String

  """All values greater than the given value."""
  street_gt: String

  """All values greater than or equal the given value."""
  street_gte: String

  """All values containing the given string."""
  street_contains: String

  """All values not containing the given string."""
  street_not_contains: String

  """All values starting with the given string."""
  street_starts_with: String

  """All values not starting with the given string."""
  street_not_starts_with: String

  """All values ending with the given string."""
  street_ends_with: String

  """All values not ending with the given string."""
  street_not_ends_with: String
  number: String

  """All values that are not equal to given value."""
  number_not: String

  """All values that are contained in given list."""
  number_in: [String!]

  """All values that are not contained in given list."""
  number_not_in: [String!]

  """All values less than the given value."""
  number_lt: String

  """All values less than or equal the given value."""
  number_lte: String

  """All values greater than the given value."""
  number_gt: String

  """All values greater than or equal the given value."""
  number_gte: String

  """All values containing the given string."""
  number_contains: String

  """All values not containing the given string."""
  number_not_contains: String

  """All values starting with the given string."""
  number_starts_with: String

  """All values not starting with the given string."""
  number_not_starts_with: String

  """All values ending with the given string."""
  number_ends_with: String

  """All values not ending with the given string."""
  number_not_ends_with: String
  postalCode: String

  """All values that are not equal to given value."""
  postalCode_not: String

  """All values that are contained in given list."""
  postalCode_in: [String!]

  """All values that are not contained in given list."""
  postalCode_not_in: [String!]

  """All values less than the given value."""
  postalCode_lt: String

  """All values less than or equal the given value."""
  postalCode_lte: String

  """All values greater than the given value."""
  postalCode_gt: String

  """All values greater than or equal the given value."""
  postalCode_gte: String

  """All values containing the given string."""
  postalCode_contains: String

  """All values not containing the given string."""
  postalCode_not_contains: String

  """All values starting with the given string."""
  postalCode_starts_with: String

  """All values not starting with the given string."""
  postalCode_not_starts_with: String

  """All values ending with the given string."""
  postalCode_ends_with: String

  """All values not ending with the given string."""
  postalCode_not_ends_with: String
  addition: String

  """All values that are not equal to given value."""
  addition_not: String

  """All values that are contained in given list."""
  addition_in: [String!]

  """All values that are not contained in given list."""
  addition_not_in: [String!]

  """All values less than the given value."""
  addition_lt: String

  """All values less than or equal the given value."""
  addition_lte: String

  """All values greater than the given value."""
  addition_gt: String

  """All values greater than or equal the given value."""
  addition_gte: String

  """All values containing the given string."""
  addition_contains: String

  """All values not containing the given string."""
  addition_not_contains: String

  """All values starting with the given string."""
  addition_starts_with: String

  """All values not starting with the given string."""
  addition_not_starts_with: String

  """All values ending with the given string."""
  addition_ends_with: String

  """All values not ending with the given string."""
  addition_not_ends_with: String
  longtitude: Float

  """All values that are not equal to given value."""
  longtitude_not: Float

  """All values that are contained in given list."""
  longtitude_in: [Float!]

  """All values that are not contained in given list."""
  longtitude_not_in: [Float!]

  """All values less than the given value."""
  longtitude_lt: Float

  """All values less than or equal the given value."""
  longtitude_lte: Float

  """All values greater than the given value."""
  longtitude_gt: Float

  """All values greater than or equal the given value."""
  longtitude_gte: Float
  latitude: Float

  """All values that are not equal to given value."""
  latitude_not: Float

  """All values that are contained in given list."""
  latitude_in: [Float!]

  """All values that are not contained in given list."""
  latitude_not_in: [Float!]

  """All values less than the given value."""
  latitude_lt: Float

  """All values less than or equal the given value."""
  latitude_lte: Float

  """All values greater than the given value."""
  latitude_gt: Float

  """All values greater than or equal the given value."""
  latitude_gte: Float
}

input AddressWhereUniqueInput {
  id: ID
}

type AggregateAddress {
  count: Int!
}

type AggregateBrand {
  count: Int!
}

type AggregateComment {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateFilterOptions {
  count: Int!
}

type AggregateLanguage {
  count: Int!
}

type AggregateNotification {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateOrderItem {
  count: Int!
}

type AggregateOrderTemplate {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateProductCategory {
  count: Int!
}

type AggregateProperties {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateRolePermission {
  count: Int!
}

type AggregateStore {
  count: Int!
}

type AggregateSupplier {
  count: Int!
}

type AggregateSupportPage {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Brand implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  domain: String!
  name: String!
  primaryColor: String!
  secondaryColor: String!
  textColor: String!
  logo: File
  backgroundImage: File
  stores(where: StoreWhereInput, orderBy: StoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Store!]
  address: Address
  productCategories(where: ProductCategoryWhereInput, orderBy: ProductCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductCategory!]
  orderTemplates(where: OrderTemplateWhereInput, orderBy: OrderTemplateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderTemplate!]
  contactPerson: User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

"""A connection to a list of items."""
type BrandConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BrandEdge]!
  aggregate: AggregateBrand!
}

input BrandCreateInput {
  deletedAt: DateTime
  note: String
  domain: String!
  name: String!
  primaryColor: String!
  secondaryColor: String!
  textColor: String!
  logo: FileCreateOneInput
  backgroundImage: FileCreateOneInput
  stores: StoreCreateManyWithoutBrandInput
  address: AddressCreateOneInput
  productCategories: ProductCategoryCreateManyWithoutBrandInput
  orderTemplates: OrderTemplateCreateManyWithoutBrandInput
  contactPerson: UserCreateOneWithoutContactPersonToBrandInput
  users: UserCreateManyWithoutBrandInput
}

input BrandCreateManyWithoutContactPersonInput {
  create: [BrandCreateWithoutContactPersonInput!]
  connect: [BrandWhereUniqueInput!]
}

input BrandCreateOneInput {
  create: BrandCreateInput
  connect: BrandWhereUniqueInput
}

input BrandCreateOneWithoutOrderTemplatesInput {
  create: BrandCreateWithoutOrderTemplatesInput
  connect: BrandWhereUniqueInput
}

input BrandCreateOneWithoutProductCategoriesInput {
  create: BrandCreateWithoutProductCategoriesInput
  connect: BrandWhereUniqueInput
}

input BrandCreateOneWithoutStoresInput {
  create: BrandCreateWithoutStoresInput
  connect: BrandWhereUniqueInput
}

input BrandCreateOneWithoutUsersInput {
  create: BrandCreateWithoutUsersInput
  connect: BrandWhereUniqueInput
}

input BrandCreateWithoutContactPersonInput {
  deletedAt: DateTime
  note: String
  domain: String!
  name: String!
  primaryColor: String!
  secondaryColor: String!
  textColor: String!
  logo: FileCreateOneInput
  backgroundImage: FileCreateOneInput
  stores: StoreCreateManyWithoutBrandInput
  address: AddressCreateOneInput
  productCategories: ProductCategoryCreateManyWithoutBrandInput
  orderTemplates: OrderTemplateCreateManyWithoutBrandInput
  users: UserCreateManyWithoutBrandInput
}

input BrandCreateWithoutOrderTemplatesInput {
  deletedAt: DateTime
  note: String
  domain: String!
  name: String!
  primaryColor: String!
  secondaryColor: String!
  textColor: String!
  logo: FileCreateOneInput
  backgroundImage: FileCreateOneInput
  stores: StoreCreateManyWithoutBrandInput
  address: AddressCreateOneInput
  productCategories: ProductCategoryCreateManyWithoutBrandInput
  contactPerson: UserCreateOneWithoutContactPersonToBrandInput
  users: UserCreateManyWithoutBrandInput
}

input BrandCreateWithoutProductCategoriesInput {
  deletedAt: DateTime
  note: String
  domain: String!
  name: String!
  primaryColor: String!
  secondaryColor: String!
  textColor: String!
  logo: FileCreateOneInput
  backgroundImage: FileCreateOneInput
  stores: StoreCreateManyWithoutBrandInput
  address: AddressCreateOneInput
  orderTemplates: OrderTemplateCreateManyWithoutBrandInput
  contactPerson: UserCreateOneWithoutContactPersonToBrandInput
  users: UserCreateManyWithoutBrandInput
}

input BrandCreateWithoutStoresInput {
  deletedAt: DateTime
  note: String
  domain: String!
  name: String!
  primaryColor: String!
  secondaryColor: String!
  textColor: String!
  logo: FileCreateOneInput
  backgroundImage: FileCreateOneInput
  address: AddressCreateOneInput
  productCategories: ProductCategoryCreateManyWithoutBrandInput
  orderTemplates: OrderTemplateCreateManyWithoutBrandInput
  contactPerson: UserCreateOneWithoutContactPersonToBrandInput
  users: UserCreateManyWithoutBrandInput
}

input BrandCreateWithoutUsersInput {
  deletedAt: DateTime
  note: String
  domain: String!
  name: String!
  primaryColor: String!
  secondaryColor: String!
  textColor: String!
  logo: FileCreateOneInput
  backgroundImage: FileCreateOneInput
  stores: StoreCreateManyWithoutBrandInput
  address: AddressCreateOneInput
  productCategories: ProductCategoryCreateManyWithoutBrandInput
  orderTemplates: OrderTemplateCreateManyWithoutBrandInput
  contactPerson: UserCreateOneWithoutContactPersonToBrandInput
}

"""An edge in a connection."""
type BrandEdge {
  """The item at the end of the edge."""
  node: Brand!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BrandOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
  domain_ASC
  domain_DESC
  name_ASC
  name_DESC
  primaryColor_ASC
  primaryColor_DESC
  secondaryColor_ASC
  secondaryColor_DESC
  textColor_ASC
  textColor_DESC
}

type BrandPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  domain: String!
  name: String!
  primaryColor: String!
  secondaryColor: String!
  textColor: String!
}

type BrandSubscriptionPayload {
  mutation: MutationType!
  node: Brand
  updatedFields: [String!]
  previousValues: BrandPreviousValues
}

input BrandSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BrandSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BrandSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BrandSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BrandWhereInput
}

input BrandUpdateDataInput {
  deletedAt: DateTime
  note: String
  domain: String
  name: String
  primaryColor: String
  secondaryColor: String
  textColor: String
  logo: FileUpdateOneInput
  backgroundImage: FileUpdateOneInput
  stores: StoreUpdateManyWithoutBrandInput
  address: AddressUpdateOneInput
  productCategories: ProductCategoryUpdateManyWithoutBrandInput
  orderTemplates: OrderTemplateUpdateManyWithoutBrandInput
  contactPerson: UserUpdateOneWithoutContactPersonToBrandInput
  users: UserUpdateManyWithoutBrandInput
}

input BrandUpdateInput {
  deletedAt: DateTime
  note: String
  domain: String
  name: String
  primaryColor: String
  secondaryColor: String
  textColor: String
  logo: FileUpdateOneInput
  backgroundImage: FileUpdateOneInput
  stores: StoreUpdateManyWithoutBrandInput
  address: AddressUpdateOneInput
  productCategories: ProductCategoryUpdateManyWithoutBrandInput
  orderTemplates: OrderTemplateUpdateManyWithoutBrandInput
  contactPerson: UserUpdateOneWithoutContactPersonToBrandInput
  users: UserUpdateManyWithoutBrandInput
}

input BrandUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
  domain: String
  name: String
  primaryColor: String
  secondaryColor: String
  textColor: String
}

input BrandUpdateManyWithoutContactPersonInput {
  create: [BrandCreateWithoutContactPersonInput!]
  connect: [BrandWhereUniqueInput!]
  disconnect: [BrandWhereUniqueInput!]
  delete: [BrandWhereUniqueInput!]
  update: [BrandUpdateWithWhereUniqueWithoutContactPersonInput!]
  upsert: [BrandUpsertWithWhereUniqueWithoutContactPersonInput!]
}

input BrandUpdateOneInput {
  create: BrandCreateInput
  connect: BrandWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: BrandUpdateDataInput
  upsert: BrandUpsertNestedInput
}

input BrandUpdateOneRequiredWithoutOrderTemplatesInput {
  create: BrandCreateWithoutOrderTemplatesInput
  connect: BrandWhereUniqueInput
  update: BrandUpdateWithoutOrderTemplatesDataInput
  upsert: BrandUpsertWithoutOrderTemplatesInput
}

input BrandUpdateOneRequiredWithoutUsersInput {
  create: BrandCreateWithoutUsersInput
  connect: BrandWhereUniqueInput
  update: BrandUpdateWithoutUsersDataInput
  upsert: BrandUpsertWithoutUsersInput
}

input BrandUpdateOneWithoutProductCategoriesInput {
  create: BrandCreateWithoutProductCategoriesInput
  connect: BrandWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: BrandUpdateWithoutProductCategoriesDataInput
  upsert: BrandUpsertWithoutProductCategoriesInput
}

input BrandUpdateOneWithoutStoresInput {
  create: BrandCreateWithoutStoresInput
  connect: BrandWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: BrandUpdateWithoutStoresDataInput
  upsert: BrandUpsertWithoutStoresInput
}

input BrandUpdateWithoutContactPersonDataInput {
  deletedAt: DateTime
  note: String
  domain: String
  name: String
  primaryColor: String
  secondaryColor: String
  textColor: String
  logo: FileUpdateOneInput
  backgroundImage: FileUpdateOneInput
  stores: StoreUpdateManyWithoutBrandInput
  address: AddressUpdateOneInput
  productCategories: ProductCategoryUpdateManyWithoutBrandInput
  orderTemplates: OrderTemplateUpdateManyWithoutBrandInput
  users: UserUpdateManyWithoutBrandInput
}

input BrandUpdateWithoutOrderTemplatesDataInput {
  deletedAt: DateTime
  note: String
  domain: String
  name: String
  primaryColor: String
  secondaryColor: String
  textColor: String
  logo: FileUpdateOneInput
  backgroundImage: FileUpdateOneInput
  stores: StoreUpdateManyWithoutBrandInput
  address: AddressUpdateOneInput
  productCategories: ProductCategoryUpdateManyWithoutBrandInput
  contactPerson: UserUpdateOneWithoutContactPersonToBrandInput
  users: UserUpdateManyWithoutBrandInput
}

input BrandUpdateWithoutProductCategoriesDataInput {
  deletedAt: DateTime
  note: String
  domain: String
  name: String
  primaryColor: String
  secondaryColor: String
  textColor: String
  logo: FileUpdateOneInput
  backgroundImage: FileUpdateOneInput
  stores: StoreUpdateManyWithoutBrandInput
  address: AddressUpdateOneInput
  orderTemplates: OrderTemplateUpdateManyWithoutBrandInput
  contactPerson: UserUpdateOneWithoutContactPersonToBrandInput
  users: UserUpdateManyWithoutBrandInput
}

input BrandUpdateWithoutStoresDataInput {
  deletedAt: DateTime
  note: String
  domain: String
  name: String
  primaryColor: String
  secondaryColor: String
  textColor: String
  logo: FileUpdateOneInput
  backgroundImage: FileUpdateOneInput
  address: AddressUpdateOneInput
  productCategories: ProductCategoryUpdateManyWithoutBrandInput
  orderTemplates: OrderTemplateUpdateManyWithoutBrandInput
  contactPerson: UserUpdateOneWithoutContactPersonToBrandInput
  users: UserUpdateManyWithoutBrandInput
}

input BrandUpdateWithoutUsersDataInput {
  deletedAt: DateTime
  note: String
  domain: String
  name: String
  primaryColor: String
  secondaryColor: String
  textColor: String
  logo: FileUpdateOneInput
  backgroundImage: FileUpdateOneInput
  stores: StoreUpdateManyWithoutBrandInput
  address: AddressUpdateOneInput
  productCategories: ProductCategoryUpdateManyWithoutBrandInput
  orderTemplates: OrderTemplateUpdateManyWithoutBrandInput
  contactPerson: UserUpdateOneWithoutContactPersonToBrandInput
}

input BrandUpdateWithWhereUniqueWithoutContactPersonInput {
  where: BrandWhereUniqueInput!
  data: BrandUpdateWithoutContactPersonDataInput!
}

input BrandUpsertNestedInput {
  update: BrandUpdateDataInput!
  create: BrandCreateInput!
}

input BrandUpsertWithoutOrderTemplatesInput {
  update: BrandUpdateWithoutOrderTemplatesDataInput!
  create: BrandCreateWithoutOrderTemplatesInput!
}

input BrandUpsertWithoutProductCategoriesInput {
  update: BrandUpdateWithoutProductCategoriesDataInput!
  create: BrandCreateWithoutProductCategoriesInput!
}

input BrandUpsertWithoutStoresInput {
  update: BrandUpdateWithoutStoresDataInput!
  create: BrandCreateWithoutStoresInput!
}

input BrandUpsertWithoutUsersInput {
  update: BrandUpdateWithoutUsersDataInput!
  create: BrandCreateWithoutUsersInput!
}

input BrandUpsertWithWhereUniqueWithoutContactPersonInput {
  where: BrandWhereUniqueInput!
  update: BrandUpdateWithoutContactPersonDataInput!
  create: BrandCreateWithoutContactPersonInput!
}

input BrandWhereInput {
  """Logical AND on all given filters."""
  AND: [BrandWhereInput!]

  """Logical OR on all given filters."""
  OR: [BrandWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BrandWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  domain: String

  """All values that are not equal to given value."""
  domain_not: String

  """All values that are contained in given list."""
  domain_in: [String!]

  """All values that are not contained in given list."""
  domain_not_in: [String!]

  """All values less than the given value."""
  domain_lt: String

  """All values less than or equal the given value."""
  domain_lte: String

  """All values greater than the given value."""
  domain_gt: String

  """All values greater than or equal the given value."""
  domain_gte: String

  """All values containing the given string."""
  domain_contains: String

  """All values not containing the given string."""
  domain_not_contains: String

  """All values starting with the given string."""
  domain_starts_with: String

  """All values not starting with the given string."""
  domain_not_starts_with: String

  """All values ending with the given string."""
  domain_ends_with: String

  """All values not ending with the given string."""
  domain_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  primaryColor: String

  """All values that are not equal to given value."""
  primaryColor_not: String

  """All values that are contained in given list."""
  primaryColor_in: [String!]

  """All values that are not contained in given list."""
  primaryColor_not_in: [String!]

  """All values less than the given value."""
  primaryColor_lt: String

  """All values less than or equal the given value."""
  primaryColor_lte: String

  """All values greater than the given value."""
  primaryColor_gt: String

  """All values greater than or equal the given value."""
  primaryColor_gte: String

  """All values containing the given string."""
  primaryColor_contains: String

  """All values not containing the given string."""
  primaryColor_not_contains: String

  """All values starting with the given string."""
  primaryColor_starts_with: String

  """All values not starting with the given string."""
  primaryColor_not_starts_with: String

  """All values ending with the given string."""
  primaryColor_ends_with: String

  """All values not ending with the given string."""
  primaryColor_not_ends_with: String
  secondaryColor: String

  """All values that are not equal to given value."""
  secondaryColor_not: String

  """All values that are contained in given list."""
  secondaryColor_in: [String!]

  """All values that are not contained in given list."""
  secondaryColor_not_in: [String!]

  """All values less than the given value."""
  secondaryColor_lt: String

  """All values less than or equal the given value."""
  secondaryColor_lte: String

  """All values greater than the given value."""
  secondaryColor_gt: String

  """All values greater than or equal the given value."""
  secondaryColor_gte: String

  """All values containing the given string."""
  secondaryColor_contains: String

  """All values not containing the given string."""
  secondaryColor_not_contains: String

  """All values starting with the given string."""
  secondaryColor_starts_with: String

  """All values not starting with the given string."""
  secondaryColor_not_starts_with: String

  """All values ending with the given string."""
  secondaryColor_ends_with: String

  """All values not ending with the given string."""
  secondaryColor_not_ends_with: String
  textColor: String

  """All values that are not equal to given value."""
  textColor_not: String

  """All values that are contained in given list."""
  textColor_in: [String!]

  """All values that are not contained in given list."""
  textColor_not_in: [String!]

  """All values less than the given value."""
  textColor_lt: String

  """All values less than or equal the given value."""
  textColor_lte: String

  """All values greater than the given value."""
  textColor_gt: String

  """All values greater than or equal the given value."""
  textColor_gte: String

  """All values containing the given string."""
  textColor_contains: String

  """All values not containing the given string."""
  textColor_not_contains: String

  """All values starting with the given string."""
  textColor_starts_with: String

  """All values not starting with the given string."""
  textColor_not_starts_with: String

  """All values ending with the given string."""
  textColor_ends_with: String

  """All values not ending with the given string."""
  textColor_not_ends_with: String
  logo: FileWhereInput
  backgroundImage: FileWhereInput
  stores_every: StoreWhereInput
  stores_some: StoreWhereInput
  stores_none: StoreWhereInput
  address: AddressWhereInput
  productCategories_every: ProductCategoryWhereInput
  productCategories_some: ProductCategoryWhereInput
  productCategories_none: ProductCategoryWhereInput
  orderTemplates_every: OrderTemplateWhereInput
  orderTemplates_some: OrderTemplateWhereInput
  orderTemplates_none: OrderTemplateWhereInput
  contactPerson: UserWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
}

input BrandWhereUniqueInput {
  id: ID
  domain: String
}

type Comment implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  content: String
  user: User!
  order: Order!
}

"""A connection to a list of items."""
type CommentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  deletedAt: DateTime
  note: String
  content: String
  user: UserCreateOneInput!
  order: OrderCreateOneWithoutCommentsInput!
}

input CommentCreateManyWithoutOrderInput {
  create: [CommentCreateWithoutOrderInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateWithoutOrderInput {
  deletedAt: DateTime
  note: String
  content: String
  user: UserCreateOneInput!
}

"""An edge in a connection."""
type CommentEdge {
  """The item at the end of the edge."""
  node: Comment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
  content_ASC
  content_DESC
}

type CommentPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  content: String
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
}

input CommentUpdateInput {
  deletedAt: DateTime
  note: String
  content: String
  user: UserUpdateOneRequiredInput
  order: OrderUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
  content: String
}

input CommentUpdateManyWithoutOrderInput {
  create: [CommentCreateWithoutOrderInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  delete: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutOrderInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutOrderInput!]
}

input CommentUpdateWithoutOrderDataInput {
  deletedAt: DateTime
  note: String
  content: String
  user: UserUpdateOneRequiredInput
}

input CommentUpdateWithWhereUniqueWithoutOrderInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutOrderDataInput!
}

input CommentUpsertWithWhereUniqueWithoutOrderInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutOrderDataInput!
  create: CommentCreateWithoutOrderInput!
}

input CommentWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  user: UserWhereInput
  order: OrderWhereInput
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

type File implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  originalName: String
  contentType: String
  mimeType: String!
  bucket: String!
  key: String!
  location: String!
}

"""A connection to a list of items."""
type FileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  deletedAt: DateTime
  note: String
  originalName: String
  contentType: String
  mimeType: String!
  bucket: String!
  key: String!
  location: String!
}

input FileCreateManyInput {
  create: [FileCreateInput!]
  connect: [FileWhereUniqueInput!]
}

input FileCreateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
}

"""An edge in a connection."""
type FileEdge {
  """The item at the end of the edge."""
  node: File!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
  originalName_ASC
  originalName_DESC
  contentType_ASC
  contentType_DESC
  mimeType_ASC
  mimeType_DESC
  bucket_ASC
  bucket_DESC
  key_ASC
  key_DESC
  location_ASC
  location_DESC
}

type FilePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  originalName: String
  contentType: String
  mimeType: String!
  bucket: String!
  key: String!
  location: String!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FileWhereInput
}

input FileUpdateDataInput {
  deletedAt: DateTime
  note: String
  originalName: String
  contentType: String
  mimeType: String
  bucket: String
  key: String
  location: String
}

input FileUpdateInput {
  deletedAt: DateTime
  note: String
  originalName: String
  contentType: String
  mimeType: String
  bucket: String
  key: String
  location: String
}

input FileUpdateManyInput {
  create: [FileCreateInput!]
  connect: [FileWhereUniqueInput!]
  disconnect: [FileWhereUniqueInput!]
  delete: [FileWhereUniqueInput!]
  update: [FileUpdateWithWhereUniqueNestedInput!]
  upsert: [FileUpsertWithWhereUniqueNestedInput!]
}

input FileUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
  originalName: String
  contentType: String
  mimeType: String
  bucket: String
  key: String
  location: String
}

input FileUpdateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: FileUpdateDataInput
  upsert: FileUpsertNestedInput
}

input FileUpdateWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput!
  data: FileUpdateDataInput!
}

input FileUpsertNestedInput {
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileUpsertWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput!
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileWhereInput {
  """Logical AND on all given filters."""
  AND: [FileWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  originalName: String

  """All values that are not equal to given value."""
  originalName_not: String

  """All values that are contained in given list."""
  originalName_in: [String!]

  """All values that are not contained in given list."""
  originalName_not_in: [String!]

  """All values less than the given value."""
  originalName_lt: String

  """All values less than or equal the given value."""
  originalName_lte: String

  """All values greater than the given value."""
  originalName_gt: String

  """All values greater than or equal the given value."""
  originalName_gte: String

  """All values containing the given string."""
  originalName_contains: String

  """All values not containing the given string."""
  originalName_not_contains: String

  """All values starting with the given string."""
  originalName_starts_with: String

  """All values not starting with the given string."""
  originalName_not_starts_with: String

  """All values ending with the given string."""
  originalName_ends_with: String

  """All values not ending with the given string."""
  originalName_not_ends_with: String
  contentType: String

  """All values that are not equal to given value."""
  contentType_not: String

  """All values that are contained in given list."""
  contentType_in: [String!]

  """All values that are not contained in given list."""
  contentType_not_in: [String!]

  """All values less than the given value."""
  contentType_lt: String

  """All values less than or equal the given value."""
  contentType_lte: String

  """All values greater than the given value."""
  contentType_gt: String

  """All values greater than or equal the given value."""
  contentType_gte: String

  """All values containing the given string."""
  contentType_contains: String

  """All values not containing the given string."""
  contentType_not_contains: String

  """All values starting with the given string."""
  contentType_starts_with: String

  """All values not starting with the given string."""
  contentType_not_starts_with: String

  """All values ending with the given string."""
  contentType_ends_with: String

  """All values not ending with the given string."""
  contentType_not_ends_with: String
  mimeType: String

  """All values that are not equal to given value."""
  mimeType_not: String

  """All values that are contained in given list."""
  mimeType_in: [String!]

  """All values that are not contained in given list."""
  mimeType_not_in: [String!]

  """All values less than the given value."""
  mimeType_lt: String

  """All values less than or equal the given value."""
  mimeType_lte: String

  """All values greater than the given value."""
  mimeType_gt: String

  """All values greater than or equal the given value."""
  mimeType_gte: String

  """All values containing the given string."""
  mimeType_contains: String

  """All values not containing the given string."""
  mimeType_not_contains: String

  """All values starting with the given string."""
  mimeType_starts_with: String

  """All values not starting with the given string."""
  mimeType_not_starts_with: String

  """All values ending with the given string."""
  mimeType_ends_with: String

  """All values not ending with the given string."""
  mimeType_not_ends_with: String
  bucket: String

  """All values that are not equal to given value."""
  bucket_not: String

  """All values that are contained in given list."""
  bucket_in: [String!]

  """All values that are not contained in given list."""
  bucket_not_in: [String!]

  """All values less than the given value."""
  bucket_lt: String

  """All values less than or equal the given value."""
  bucket_lte: String

  """All values greater than the given value."""
  bucket_gt: String

  """All values greater than or equal the given value."""
  bucket_gte: String

  """All values containing the given string."""
  bucket_contains: String

  """All values not containing the given string."""
  bucket_not_contains: String

  """All values starting with the given string."""
  bucket_starts_with: String

  """All values not starting with the given string."""
  bucket_not_starts_with: String

  """All values ending with the given string."""
  bucket_ends_with: String

  """All values not ending with the given string."""
  bucket_not_ends_with: String
  key: String

  """All values that are not equal to given value."""
  key_not: String

  """All values that are contained in given list."""
  key_in: [String!]

  """All values that are not contained in given list."""
  key_not_in: [String!]

  """All values less than the given value."""
  key_lt: String

  """All values less than or equal the given value."""
  key_lte: String

  """All values greater than the given value."""
  key_gt: String

  """All values greater than or equal the given value."""
  key_gte: String

  """All values containing the given string."""
  key_contains: String

  """All values not containing the given string."""
  key_not_contains: String

  """All values starting with the given string."""
  key_starts_with: String

  """All values not starting with the given string."""
  key_not_starts_with: String

  """All values ending with the given string."""
  key_ends_with: String

  """All values not ending with the given string."""
  key_not_ends_with: String
  location: String

  """All values that are not equal to given value."""
  location_not: String

  """All values that are contained in given list."""
  location_in: [String!]

  """All values that are not contained in given list."""
  location_not_in: [String!]

  """All values less than the given value."""
  location_lt: String

  """All values less than or equal the given value."""
  location_lte: String

  """All values greater than the given value."""
  location_gt: String

  """All values greater than or equal the given value."""
  location_gte: String

  """All values containing the given string."""
  location_contains: String

  """All values not containing the given string."""
  location_not_contains: String

  """All values starting with the given string."""
  location_starts_with: String

  """All values not starting with the given string."""
  location_not_starts_with: String

  """All values ending with the given string."""
  location_ends_with: String

  """All values not ending with the given string."""
  location_not_ends_with: String
}

input FileWhereUniqueInput {
  id: ID
}

type FilterOptions implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  type: FilterOptionsType
  language: Language
  storeType: String
  size: String
  currency: String
}

"""A connection to a list of items."""
type FilterOptionsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FilterOptionsEdge]!
  aggregate: AggregateFilterOptions!
}

input FilterOptionsCreateInput {
  deletedAt: DateTime
  note: String
  type: FilterOptionsType
  storeType: String
  size: String
  currency: String
  language: LanguageCreateOneInput
}

input FilterOptionsCreateOneInput {
  create: FilterOptionsCreateInput
  connect: FilterOptionsWhereUniqueInput
}

"""An edge in a connection."""
type FilterOptionsEdge {
  """The item at the end of the edge."""
  node: FilterOptions!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FilterOptionsOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
  type_ASC
  type_DESC
  storeType_ASC
  storeType_DESC
  size_ASC
  size_DESC
  currency_ASC
  currency_DESC
}

type FilterOptionsPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  type: FilterOptionsType
  storeType: String
  size: String
  currency: String
}

type FilterOptionsSubscriptionPayload {
  mutation: MutationType!
  node: FilterOptions
  updatedFields: [String!]
  previousValues: FilterOptionsPreviousValues
}

input FilterOptionsSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FilterOptionsSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FilterOptionsSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FilterOptionsSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FilterOptionsWhereInput
}

enum FilterOptionsType {
  ALL
  ZERO_OR_ONE
  ONE
  ZERO_OR_MORE
  ONE_OR_MORE
}

input FilterOptionsUpdateDataInput {
  deletedAt: DateTime
  note: String
  type: FilterOptionsType
  storeType: String
  size: String
  currency: String
  language: LanguageUpdateOneInput
}

input FilterOptionsUpdateInput {
  deletedAt: DateTime
  note: String
  type: FilterOptionsType
  storeType: String
  size: String
  currency: String
  language: LanguageUpdateOneInput
}

input FilterOptionsUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
  type: FilterOptionsType
  storeType: String
  size: String
  currency: String
}

input FilterOptionsUpdateOneInput {
  create: FilterOptionsCreateInput
  connect: FilterOptionsWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: FilterOptionsUpdateDataInput
  upsert: FilterOptionsUpsertNestedInput
}

input FilterOptionsUpsertNestedInput {
  update: FilterOptionsUpdateDataInput!
  create: FilterOptionsCreateInput!
}

input FilterOptionsWhereInput {
  """Logical AND on all given filters."""
  AND: [FilterOptionsWhereInput!]

  """Logical OR on all given filters."""
  OR: [FilterOptionsWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FilterOptionsWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  type: FilterOptionsType

  """All values that are not equal to given value."""
  type_not: FilterOptionsType

  """All values that are contained in given list."""
  type_in: [FilterOptionsType!]

  """All values that are not contained in given list."""
  type_not_in: [FilterOptionsType!]
  storeType: String

  """All values that are not equal to given value."""
  storeType_not: String

  """All values that are contained in given list."""
  storeType_in: [String!]

  """All values that are not contained in given list."""
  storeType_not_in: [String!]

  """All values less than the given value."""
  storeType_lt: String

  """All values less than or equal the given value."""
  storeType_lte: String

  """All values greater than the given value."""
  storeType_gt: String

  """All values greater than or equal the given value."""
  storeType_gte: String

  """All values containing the given string."""
  storeType_contains: String

  """All values not containing the given string."""
  storeType_not_contains: String

  """All values starting with the given string."""
  storeType_starts_with: String

  """All values not starting with the given string."""
  storeType_not_starts_with: String

  """All values ending with the given string."""
  storeType_ends_with: String

  """All values not ending with the given string."""
  storeType_not_ends_with: String
  size: String

  """All values that are not equal to given value."""
  size_not: String

  """All values that are contained in given list."""
  size_in: [String!]

  """All values that are not contained in given list."""
  size_not_in: [String!]

  """All values less than the given value."""
  size_lt: String

  """All values less than or equal the given value."""
  size_lte: String

  """All values greater than the given value."""
  size_gt: String

  """All values greater than or equal the given value."""
  size_gte: String

  """All values containing the given string."""
  size_contains: String

  """All values not containing the given string."""
  size_not_contains: String

  """All values starting with the given string."""
  size_starts_with: String

  """All values not starting with the given string."""
  size_not_starts_with: String

  """All values ending with the given string."""
  size_ends_with: String

  """All values not ending with the given string."""
  size_not_ends_with: String
  currency: String

  """All values that are not equal to given value."""
  currency_not: String

  """All values that are contained in given list."""
  currency_in: [String!]

  """All values that are not contained in given list."""
  currency_not_in: [String!]

  """All values less than the given value."""
  currency_lt: String

  """All values less than or equal the given value."""
  currency_lte: String

  """All values greater than the given value."""
  currency_gt: String

  """All values greater than or equal the given value."""
  currency_gte: String

  """All values containing the given string."""
  currency_contains: String

  """All values not containing the given string."""
  currency_not_contains: String

  """All values starting with the given string."""
  currency_starts_with: String

  """All values not starting with the given string."""
  currency_not_starts_with: String

  """All values ending with the given string."""
  currency_ends_with: String

  """All values not ending with the given string."""
  currency_not_ends_with: String
  language: LanguageWhereInput
}

input FilterOptionsWhereUniqueInput {
  id: ID
}

type Language implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  isoCode: String!
  articleCode: String!
  name: String!
}

"""A connection to a list of items."""
type LanguageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LanguageEdge]!
  aggregate: AggregateLanguage!
}

input LanguageCreateInput {
  deletedAt: DateTime
  note: String
  isoCode: String!
  articleCode: String!
  name: String!
}

input LanguageCreateOneInput {
  create: LanguageCreateInput
  connect: LanguageWhereUniqueInput
}

"""An edge in a connection."""
type LanguageEdge {
  """The item at the end of the edge."""
  node: Language!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LanguageOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
  isoCode_ASC
  isoCode_DESC
  articleCode_ASC
  articleCode_DESC
  name_ASC
  name_DESC
}

type LanguagePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  isoCode: String!
  articleCode: String!
  name: String!
}

type LanguageSubscriptionPayload {
  mutation: MutationType!
  node: Language
  updatedFields: [String!]
  previousValues: LanguagePreviousValues
}

input LanguageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LanguageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LanguageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LanguageSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LanguageWhereInput
}

input LanguageUpdateDataInput {
  deletedAt: DateTime
  note: String
  isoCode: String
  articleCode: String
  name: String
}

input LanguageUpdateInput {
  deletedAt: DateTime
  note: String
  isoCode: String
  articleCode: String
  name: String
}

input LanguageUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
  isoCode: String
  articleCode: String
  name: String
}

input LanguageUpdateOneInput {
  create: LanguageCreateInput
  connect: LanguageWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LanguageUpdateDataInput
  upsert: LanguageUpsertNestedInput
}

input LanguageUpsertNestedInput {
  update: LanguageUpdateDataInput!
  create: LanguageCreateInput!
}

input LanguageWhereInput {
  """Logical AND on all given filters."""
  AND: [LanguageWhereInput!]

  """Logical OR on all given filters."""
  OR: [LanguageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LanguageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  isoCode: String

  """All values that are not equal to given value."""
  isoCode_not: String

  """All values that are contained in given list."""
  isoCode_in: [String!]

  """All values that are not contained in given list."""
  isoCode_not_in: [String!]

  """All values less than the given value."""
  isoCode_lt: String

  """All values less than or equal the given value."""
  isoCode_lte: String

  """All values greater than the given value."""
  isoCode_gt: String

  """All values greater than or equal the given value."""
  isoCode_gte: String

  """All values containing the given string."""
  isoCode_contains: String

  """All values not containing the given string."""
  isoCode_not_contains: String

  """All values starting with the given string."""
  isoCode_starts_with: String

  """All values not starting with the given string."""
  isoCode_not_starts_with: String

  """All values ending with the given string."""
  isoCode_ends_with: String

  """All values not ending with the given string."""
  isoCode_not_ends_with: String
  articleCode: String

  """All values that are not equal to given value."""
  articleCode_not: String

  """All values that are contained in given list."""
  articleCode_in: [String!]

  """All values that are not contained in given list."""
  articleCode_not_in: [String!]

  """All values less than the given value."""
  articleCode_lt: String

  """All values less than or equal the given value."""
  articleCode_lte: String

  """All values greater than the given value."""
  articleCode_gt: String

  """All values greater than or equal the given value."""
  articleCode_gte: String

  """All values containing the given string."""
  articleCode_contains: String

  """All values not containing the given string."""
  articleCode_not_contains: String

  """All values starting with the given string."""
  articleCode_starts_with: String

  """All values not starting with the given string."""
  articleCode_not_starts_with: String

  """All values ending with the given string."""
  articleCode_ends_with: String

  """All values not ending with the given string."""
  articleCode_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input LanguageWhereUniqueInput {
  id: ID
  isoCode: String
  articleCode: String
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createStore(data: StoreCreateInput!): Store!
  createRole(data: RoleCreateInput!): Role!
  createProductCategory(data: ProductCategoryCreateInput!): ProductCategory!
  createProperties(data: PropertiesCreateInput!): Properties!
  createOrder(data: OrderCreateInput!): Order!
  createComment(data: CommentCreateInput!): Comment!
  createSupplier(data: SupplierCreateInput!): Supplier!
  createSupportPage(data: SupportPageCreateInput!): SupportPage!
  createNotification(data: NotificationCreateInput!): Notification!
  createUser(data: UserCreateInput!): User!
  createOrderTemplate(data: OrderTemplateCreateInput!): OrderTemplate!
  createFilterOptions(data: FilterOptionsCreateInput!): FilterOptions!
  createOrderItem(data: OrderItemCreateInput!): OrderItem!
  createRolePermission(data: RolePermissionCreateInput!): RolePermission!
  createBrand(data: BrandCreateInput!): Brand!
  createFile(data: FileCreateInput!): File!
  createProduct(data: ProductCreateInput!): Product!
  createLanguage(data: LanguageCreateInput!): Language!
  createAddress(data: AddressCreateInput!): Address!
  updateStore(data: StoreUpdateInput!, where: StoreWhereUniqueInput!): Store
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updateProductCategory(data: ProductCategoryUpdateInput!, where: ProductCategoryWhereUniqueInput!): ProductCategory
  updateProperties(data: PropertiesUpdateInput!, where: PropertiesWhereUniqueInput!): Properties
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateSupplier(data: SupplierUpdateInput!, where: SupplierWhereUniqueInput!): Supplier
  updateSupportPage(data: SupportPageUpdateInput!, where: SupportPageWhereUniqueInput!): SupportPage
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateOrderTemplate(data: OrderTemplateUpdateInput!, where: OrderTemplateWhereUniqueInput!): OrderTemplate
  updateFilterOptions(data: FilterOptionsUpdateInput!, where: FilterOptionsWhereUniqueInput!): FilterOptions
  updateOrderItem(data: OrderItemUpdateInput!, where: OrderItemWhereUniqueInput!): OrderItem
  updateRolePermission(data: RolePermissionUpdateInput!, where: RolePermissionWhereUniqueInput!): RolePermission
  updateBrand(data: BrandUpdateInput!, where: BrandWhereUniqueInput!): Brand
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateLanguage(data: LanguageUpdateInput!, where: LanguageWhereUniqueInput!): Language
  updateAddress(data: AddressUpdateInput!, where: AddressWhereUniqueInput!): Address
  deleteStore(where: StoreWhereUniqueInput!): Store
  deleteRole(where: RoleWhereUniqueInput!): Role
  deleteProductCategory(where: ProductCategoryWhereUniqueInput!): ProductCategory
  deleteProperties(where: PropertiesWhereUniqueInput!): Properties
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteSupplier(where: SupplierWhereUniqueInput!): Supplier
  deleteSupportPage(where: SupportPageWhereUniqueInput!): SupportPage
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteUser(where: UserWhereUniqueInput!): User
  deleteOrderTemplate(where: OrderTemplateWhereUniqueInput!): OrderTemplate
  deleteFilterOptions(where: FilterOptionsWhereUniqueInput!): FilterOptions
  deleteOrderItem(where: OrderItemWhereUniqueInput!): OrderItem
  deleteRolePermission(where: RolePermissionWhereUniqueInput!): RolePermission
  deleteBrand(where: BrandWhereUniqueInput!): Brand
  deleteFile(where: FileWhereUniqueInput!): File
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteLanguage(where: LanguageWhereUniqueInput!): Language
  deleteAddress(where: AddressWhereUniqueInput!): Address
  upsertStore(where: StoreWhereUniqueInput!, create: StoreCreateInput!, update: StoreUpdateInput!): Store!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  upsertProductCategory(where: ProductCategoryWhereUniqueInput!, create: ProductCategoryCreateInput!, update: ProductCategoryUpdateInput!): ProductCategory!
  upsertProperties(where: PropertiesWhereUniqueInput!, create: PropertiesCreateInput!, update: PropertiesUpdateInput!): Properties!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  upsertSupplier(where: SupplierWhereUniqueInput!, create: SupplierCreateInput!, update: SupplierUpdateInput!): Supplier!
  upsertSupportPage(where: SupportPageWhereUniqueInput!, create: SupportPageCreateInput!, update: SupportPageUpdateInput!): SupportPage!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertOrderTemplate(where: OrderTemplateWhereUniqueInput!, create: OrderTemplateCreateInput!, update: OrderTemplateUpdateInput!): OrderTemplate!
  upsertFilterOptions(where: FilterOptionsWhereUniqueInput!, create: FilterOptionsCreateInput!, update: FilterOptionsUpdateInput!): FilterOptions!
  upsertOrderItem(where: OrderItemWhereUniqueInput!, create: OrderItemCreateInput!, update: OrderItemUpdateInput!): OrderItem!
  upsertRolePermission(where: RolePermissionWhereUniqueInput!, create: RolePermissionCreateInput!, update: RolePermissionUpdateInput!): RolePermission!
  upsertBrand(where: BrandWhereUniqueInput!, create: BrandCreateInput!, update: BrandUpdateInput!): Brand!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  upsertLanguage(where: LanguageWhereUniqueInput!, create: LanguageCreateInput!, update: LanguageUpdateInput!): Language!
  upsertAddress(where: AddressWhereUniqueInput!, create: AddressCreateInput!, update: AddressUpdateInput!): Address!
  updateManyStores(data: StoreUpdateManyMutationInput!, where: StoreWhereInput): BatchPayload!
  updateManyRoles(data: RoleUpdateManyMutationInput!, where: RoleWhereInput): BatchPayload!
  updateManyProductCategories(data: ProductCategoryUpdateManyMutationInput!, where: ProductCategoryWhereInput): BatchPayload!
  updateManyPropertieses(data: PropertiesUpdateManyMutationInput!, where: PropertiesWhereInput): BatchPayload!
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  updateManySuppliers(data: SupplierUpdateManyMutationInput!, where: SupplierWhereInput): BatchPayload!
  updateManySupportPages(data: SupportPageUpdateManyMutationInput!, where: SupportPageWhereInput): BatchPayload!
  updateManyNotifications(data: NotificationUpdateManyMutationInput!, where: NotificationWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyOrderTemplates(data: OrderTemplateUpdateManyMutationInput!, where: OrderTemplateWhereInput): BatchPayload!
  updateManyFilterOptionses(data: FilterOptionsUpdateManyMutationInput!, where: FilterOptionsWhereInput): BatchPayload!
  updateManyOrderItems(data: OrderItemUpdateManyMutationInput!, where: OrderItemWhereInput): BatchPayload!
  updateManyRolePermissions(data: RolePermissionUpdateManyMutationInput!, where: RolePermissionWhereInput): BatchPayload!
  updateManyBrands(data: BrandUpdateManyMutationInput!, where: BrandWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  updateManyLanguages(data: LanguageUpdateManyMutationInput!, where: LanguageWhereInput): BatchPayload!
  updateManyAddresses(data: AddressUpdateManyMutationInput!, where: AddressWhereInput): BatchPayload!
  deleteManyStores(where: StoreWhereInput): BatchPayload!
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
  deleteManyProductCategories(where: ProductCategoryWhereInput): BatchPayload!
  deleteManyPropertieses(where: PropertiesWhereInput): BatchPayload!
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  deleteManySuppliers(where: SupplierWhereInput): BatchPayload!
  deleteManySupportPages(where: SupportPageWhereInput): BatchPayload!
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyOrderTemplates(where: OrderTemplateWhereInput): BatchPayload!
  deleteManyFilterOptionses(where: FilterOptionsWhereInput): BatchPayload!
  deleteManyOrderItems(where: OrderItemWhereInput): BatchPayload!
  deleteManyRolePermissions(where: RolePermissionWhereInput): BatchPayload!
  deleteManyBrands(where: BrandWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  deleteManyLanguages(where: LanguageWhereInput): BatchPayload!
  deleteManyAddresses(where: AddressWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Notification implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  title: String!
  content: String!
  readAt: DateTime
  link: String
  user: User!
}

"""A connection to a list of items."""
type NotificationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NotificationEdge]!
  aggregate: AggregateNotification!
}

input NotificationCreateInput {
  deletedAt: DateTime
  note: String
  title: String!
  content: String!
  readAt: DateTime
  link: String
  user: UserCreateOneWithoutNotificationsInput!
}

input NotificationCreateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  connect: [NotificationWhereUniqueInput!]
}

input NotificationCreateWithoutUserInput {
  deletedAt: DateTime
  note: String
  title: String!
  content: String!
  readAt: DateTime
  link: String
}

"""An edge in a connection."""
type NotificationEdge {
  """The item at the end of the edge."""
  node: Notification!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NotificationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  readAt_ASC
  readAt_DESC
  link_ASC
  link_DESC
}

type NotificationPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  title: String!
  content: String!
  readAt: DateTime
  link: String
}

type NotificationSubscriptionPayload {
  mutation: MutationType!
  node: Notification
  updatedFields: [String!]
  previousValues: NotificationPreviousValues
}

input NotificationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NotificationWhereInput
}

input NotificationUpdateInput {
  deletedAt: DateTime
  note: String
  title: String
  content: String
  readAt: DateTime
  link: String
  user: UserUpdateOneRequiredWithoutNotificationsInput
}

input NotificationUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
  title: String
  content: String
  readAt: DateTime
  link: String
}

input NotificationUpdateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  connect: [NotificationWhereUniqueInput!]
  disconnect: [NotificationWhereUniqueInput!]
  delete: [NotificationWhereUniqueInput!]
  update: [NotificationUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [NotificationUpsertWithWhereUniqueWithoutUserInput!]
}

input NotificationUpdateWithoutUserDataInput {
  deletedAt: DateTime
  note: String
  title: String
  content: String
  readAt: DateTime
  link: String
}

input NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput!
  data: NotificationUpdateWithoutUserDataInput!
}

input NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput!
  update: NotificationUpdateWithoutUserDataInput!
  create: NotificationCreateWithoutUserInput!
}

input NotificationWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  readAt: DateTime

  """All values that are not equal to given value."""
  readAt_not: DateTime

  """All values that are contained in given list."""
  readAt_in: [DateTime!]

  """All values that are not contained in given list."""
  readAt_not_in: [DateTime!]

  """All values less than the given value."""
  readAt_lt: DateTime

  """All values less than or equal the given value."""
  readAt_lte: DateTime

  """All values greater than the given value."""
  readAt_gt: DateTime

  """All values greater than or equal the given value."""
  readAt_gte: DateTime
  link: String

  """All values that are not equal to given value."""
  link_not: String

  """All values that are contained in given list."""
  link_in: [String!]

  """All values that are not contained in given list."""
  link_not_in: [String!]

  """All values less than the given value."""
  link_lt: String

  """All values less than or equal the given value."""
  link_lte: String

  """All values greater than the given value."""
  link_gt: String

  """All values greater than or equal the given value."""
  link_gte: String

  """All values containing the given string."""
  link_contains: String

  """All values not containing the given string."""
  link_not_contains: String

  """All values starting with the given string."""
  link_starts_with: String

  """All values not starting with the given string."""
  link_not_starts_with: String

  """All values ending with the given string."""
  link_ends_with: String

  """All values not ending with the given string."""
  link_not_ends_with: String
  user: UserWhereInput
}

input NotificationWhereUniqueInput {
  id: ID
}

type Order implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  orderNumber: String
  poNumber: String
  store: Store!
  trackAndTraceCode: String
  status: OrderStatus!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  createdBy: User
  orderedAt: DateTime
  items(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem!]
  address: Address
}

"""A connection to a list of items."""
type OrderConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  deletedAt: DateTime
  note: String
  orderNumber: String
  poNumber: String
  trackAndTraceCode: String
  status: OrderStatus!
  orderedAt: DateTime
  store: StoreCreateOneWithoutOrdersInput!
  comments: CommentCreateManyWithoutOrderInput
  createdBy: UserCreateOneWithoutOrdersInput
  items: OrderItemCreateManyInput
  address: AddressCreateOneInput
}

input OrderCreateManyWithoutCreatedByInput {
  create: [OrderCreateWithoutCreatedByInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateManyWithoutStoreInput {
  create: [OrderCreateWithoutStoreInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateOneWithoutCommentsInput {
  create: OrderCreateWithoutCommentsInput
  connect: OrderWhereUniqueInput
}

input OrderCreateWithoutCommentsInput {
  deletedAt: DateTime
  note: String
  orderNumber: String
  poNumber: String
  trackAndTraceCode: String
  status: OrderStatus!
  orderedAt: DateTime
  store: StoreCreateOneWithoutOrdersInput!
  createdBy: UserCreateOneWithoutOrdersInput
  items: OrderItemCreateManyInput
  address: AddressCreateOneInput
}

input OrderCreateWithoutCreatedByInput {
  deletedAt: DateTime
  note: String
  orderNumber: String
  poNumber: String
  trackAndTraceCode: String
  status: OrderStatus!
  orderedAt: DateTime
  store: StoreCreateOneWithoutOrdersInput!
  comments: CommentCreateManyWithoutOrderInput
  items: OrderItemCreateManyInput
  address: AddressCreateOneInput
}

input OrderCreateWithoutStoreInput {
  deletedAt: DateTime
  note: String
  orderNumber: String
  poNumber: String
  trackAndTraceCode: String
  status: OrderStatus!
  orderedAt: DateTime
  comments: CommentCreateManyWithoutOrderInput
  createdBy: UserCreateOneWithoutOrdersInput
  items: OrderItemCreateManyInput
  address: AddressCreateOneInput
}

"""An edge in a connection."""
type OrderEdge {
  """The item at the end of the edge."""
  node: Order!

  """A cursor for use in pagination."""
  cursor: String!
}

type OrderItem implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  name: String
  amount: Int
  price: Int
  currency: String
  orderTemplate: OrderTemplate
  items(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem!]
  product: Product
}

"""A connection to a list of items."""
type OrderItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OrderItemEdge]!
  aggregate: AggregateOrderItem!
}

input OrderItemCreateInput {
  deletedAt: DateTime
  note: String
  name: String
  amount: Int
  price: Int
  currency: String
  orderTemplate: OrderTemplateCreateOneInput
  items: OrderItemCreateManyInput
  product: ProductCreateOneInput
}

input OrderItemCreateManyInput {
  create: [OrderItemCreateInput!]
  connect: [OrderItemWhereUniqueInput!]
}

"""An edge in a connection."""
type OrderItemEdge {
  """The item at the end of the edge."""
  node: OrderItem!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OrderItemOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
  name_ASC
  name_DESC
  amount_ASC
  amount_DESC
  price_ASC
  price_DESC
  currency_ASC
  currency_DESC
}

type OrderItemPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  name: String
  amount: Int
  price: Int
  currency: String
}

type OrderItemSubscriptionPayload {
  mutation: MutationType!
  node: OrderItem
  updatedFields: [String!]
  previousValues: OrderItemPreviousValues
}

input OrderItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderItemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderItemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderItemSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OrderItemWhereInput
}

input OrderItemUpdateDataInput {
  deletedAt: DateTime
  note: String
  name: String
  amount: Int
  price: Int
  currency: String
  orderTemplate: OrderTemplateUpdateOneInput
  items: OrderItemUpdateManyInput
  product: ProductUpdateOneInput
}

input OrderItemUpdateInput {
  deletedAt: DateTime
  note: String
  name: String
  amount: Int
  price: Int
  currency: String
  orderTemplate: OrderTemplateUpdateOneInput
  items: OrderItemUpdateManyInput
  product: ProductUpdateOneInput
}

input OrderItemUpdateManyInput {
  create: [OrderItemCreateInput!]
  connect: [OrderItemWhereUniqueInput!]
  disconnect: [OrderItemWhereUniqueInput!]
  delete: [OrderItemWhereUniqueInput!]
  update: [OrderItemUpdateWithWhereUniqueNestedInput!]
  upsert: [OrderItemUpsertWithWhereUniqueNestedInput!]
}

input OrderItemUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
  name: String
  amount: Int
  price: Int
  currency: String
}

input OrderItemUpdateWithWhereUniqueNestedInput {
  where: OrderItemWhereUniqueInput!
  data: OrderItemUpdateDataInput!
}

input OrderItemUpsertWithWhereUniqueNestedInput {
  where: OrderItemWhereUniqueInput!
  update: OrderItemUpdateDataInput!
  create: OrderItemCreateInput!
}

input OrderItemWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderItemWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderItemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderItemWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  amount: Int

  """All values that are not equal to given value."""
  amount_not: Int

  """All values that are contained in given list."""
  amount_in: [Int!]

  """All values that are not contained in given list."""
  amount_not_in: [Int!]

  """All values less than the given value."""
  amount_lt: Int

  """All values less than or equal the given value."""
  amount_lte: Int

  """All values greater than the given value."""
  amount_gt: Int

  """All values greater than or equal the given value."""
  amount_gte: Int
  price: Int

  """All values that are not equal to given value."""
  price_not: Int

  """All values that are contained in given list."""
  price_in: [Int!]

  """All values that are not contained in given list."""
  price_not_in: [Int!]

  """All values less than the given value."""
  price_lt: Int

  """All values less than or equal the given value."""
  price_lte: Int

  """All values greater than the given value."""
  price_gt: Int

  """All values greater than or equal the given value."""
  price_gte: Int
  currency: String

  """All values that are not equal to given value."""
  currency_not: String

  """All values that are contained in given list."""
  currency_in: [String!]

  """All values that are not contained in given list."""
  currency_not_in: [String!]

  """All values less than the given value."""
  currency_lt: String

  """All values less than or equal the given value."""
  currency_lte: String

  """All values greater than the given value."""
  currency_gt: String

  """All values greater than or equal the given value."""
  currency_gte: String

  """All values containing the given string."""
  currency_contains: String

  """All values not containing the given string."""
  currency_not_contains: String

  """All values starting with the given string."""
  currency_starts_with: String

  """All values not starting with the given string."""
  currency_not_starts_with: String

  """All values ending with the given string."""
  currency_ends_with: String

  """All values not ending with the given string."""
  currency_not_ends_with: String
  orderTemplate: OrderTemplateWhereInput
  items_every: OrderItemWhereInput
  items_some: OrderItemWhereInput
  items_none: OrderItemWhereInput
  product: ProductWhereInput
}

input OrderItemWhereUniqueInput {
  id: ID
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
  orderNumber_ASC
  orderNumber_DESC
  poNumber_ASC
  poNumber_DESC
  trackAndTraceCode_ASC
  trackAndTraceCode_DESC
  status_ASC
  status_DESC
  orderedAt_ASC
  orderedAt_DESC
}

type OrderPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  orderNumber: String
  poNumber: String
  trackAndTraceCode: String
  status: OrderStatus!
  orderedAt: DateTime
}

enum OrderStatus {
  WAITING_FOR_APPROVAL
  PENDING
  RECEIVED
  DISPATCHED
  DELIVERED
  INSTALLED
  CANCELLED
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
}

type OrderTemplate implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  sortIndex: Int
  defaultOrderAmount: Int
  minOrderAmount: Int
  maxOrderAmount: Int
  orderable: Boolean
  stock: Int
  stockWarning: Int
  visibleFrom: DateTime
  visibleUntil: DateTime
  properties: Properties
  filterOptions: FilterOptions
  brand: Brand!
  parent: OrderTemplate
  children(where: OrderTemplateWhereInput, orderBy: OrderTemplateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderTemplate!]
  product: Product
}

"""A connection to a list of items."""
type OrderTemplateConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OrderTemplateEdge]!
  aggregate: AggregateOrderTemplate!
}

input OrderTemplateCreateInput {
  deletedAt: DateTime
  note: String
  sortIndex: Int
  defaultOrderAmount: Int
  minOrderAmount: Int
  maxOrderAmount: Int
  orderable: Boolean
  stock: Int
  stockWarning: Int
  visibleFrom: DateTime
  visibleUntil: DateTime
  properties: PropertiesCreateOneWithoutOrderTemplateInput
  filterOptions: FilterOptionsCreateOneInput
  brand: BrandCreateOneWithoutOrderTemplatesInput!
  parent: OrderTemplateCreateOneWithoutChildrenInput
  children: OrderTemplateCreateManyWithoutParentInput
  product: ProductCreateOneInput
}

input OrderTemplateCreateManyWithoutBrandInput {
  create: [OrderTemplateCreateWithoutBrandInput!]
  connect: [OrderTemplateWhereUniqueInput!]
}

input OrderTemplateCreateManyWithoutParentInput {
  create: [OrderTemplateCreateWithoutParentInput!]
  connect: [OrderTemplateWhereUniqueInput!]
}

input OrderTemplateCreateOneInput {
  create: OrderTemplateCreateInput
  connect: OrderTemplateWhereUniqueInput
}

input OrderTemplateCreateOneWithoutChildrenInput {
  create: OrderTemplateCreateWithoutChildrenInput
  connect: OrderTemplateWhereUniqueInput
}

input OrderTemplateCreateOneWithoutPropertiesInput {
  create: OrderTemplateCreateWithoutPropertiesInput
  connect: OrderTemplateWhereUniqueInput
}

input OrderTemplateCreateWithoutBrandInput {
  deletedAt: DateTime
  note: String
  sortIndex: Int
  defaultOrderAmount: Int
  minOrderAmount: Int
  maxOrderAmount: Int
  orderable: Boolean
  stock: Int
  stockWarning: Int
  visibleFrom: DateTime
  visibleUntil: DateTime
  properties: PropertiesCreateOneWithoutOrderTemplateInput
  filterOptions: FilterOptionsCreateOneInput
  parent: OrderTemplateCreateOneWithoutChildrenInput
  children: OrderTemplateCreateManyWithoutParentInput
  product: ProductCreateOneInput
}

input OrderTemplateCreateWithoutChildrenInput {
  deletedAt: DateTime
  note: String
  sortIndex: Int
  defaultOrderAmount: Int
  minOrderAmount: Int
  maxOrderAmount: Int
  orderable: Boolean
  stock: Int
  stockWarning: Int
  visibleFrom: DateTime
  visibleUntil: DateTime
  properties: PropertiesCreateOneWithoutOrderTemplateInput
  filterOptions: FilterOptionsCreateOneInput
  brand: BrandCreateOneWithoutOrderTemplatesInput!
  parent: OrderTemplateCreateOneWithoutChildrenInput
  product: ProductCreateOneInput
}

input OrderTemplateCreateWithoutParentInput {
  deletedAt: DateTime
  note: String
  sortIndex: Int
  defaultOrderAmount: Int
  minOrderAmount: Int
  maxOrderAmount: Int
  orderable: Boolean
  stock: Int
  stockWarning: Int
  visibleFrom: DateTime
  visibleUntil: DateTime
  properties: PropertiesCreateOneWithoutOrderTemplateInput
  filterOptions: FilterOptionsCreateOneInput
  brand: BrandCreateOneWithoutOrderTemplatesInput!
  children: OrderTemplateCreateManyWithoutParentInput
  product: ProductCreateOneInput
}

input OrderTemplateCreateWithoutPropertiesInput {
  deletedAt: DateTime
  note: String
  sortIndex: Int
  defaultOrderAmount: Int
  minOrderAmount: Int
  maxOrderAmount: Int
  orderable: Boolean
  stock: Int
  stockWarning: Int
  visibleFrom: DateTime
  visibleUntil: DateTime
  filterOptions: FilterOptionsCreateOneInput
  brand: BrandCreateOneWithoutOrderTemplatesInput!
  parent: OrderTemplateCreateOneWithoutChildrenInput
  children: OrderTemplateCreateManyWithoutParentInput
  product: ProductCreateOneInput
}

"""An edge in a connection."""
type OrderTemplateEdge {
  """The item at the end of the edge."""
  node: OrderTemplate!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OrderTemplateOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
  sortIndex_ASC
  sortIndex_DESC
  defaultOrderAmount_ASC
  defaultOrderAmount_DESC
  minOrderAmount_ASC
  minOrderAmount_DESC
  maxOrderAmount_ASC
  maxOrderAmount_DESC
  orderable_ASC
  orderable_DESC
  stock_ASC
  stock_DESC
  stockWarning_ASC
  stockWarning_DESC
  visibleFrom_ASC
  visibleFrom_DESC
  visibleUntil_ASC
  visibleUntil_DESC
}

type OrderTemplatePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  sortIndex: Int
  defaultOrderAmount: Int
  minOrderAmount: Int
  maxOrderAmount: Int
  orderable: Boolean
  stock: Int
  stockWarning: Int
  visibleFrom: DateTime
  visibleUntil: DateTime
}

type OrderTemplateSubscriptionPayload {
  mutation: MutationType!
  node: OrderTemplate
  updatedFields: [String!]
  previousValues: OrderTemplatePreviousValues
}

input OrderTemplateSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderTemplateSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderTemplateSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderTemplateSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OrderTemplateWhereInput
}

input OrderTemplateUpdateDataInput {
  deletedAt: DateTime
  note: String
  sortIndex: Int
  defaultOrderAmount: Int
  minOrderAmount: Int
  maxOrderAmount: Int
  orderable: Boolean
  stock: Int
  stockWarning: Int
  visibleFrom: DateTime
  visibleUntil: DateTime
  properties: PropertiesUpdateOneWithoutOrderTemplateInput
  filterOptions: FilterOptionsUpdateOneInput
  brand: BrandUpdateOneRequiredWithoutOrderTemplatesInput
  parent: OrderTemplateUpdateOneWithoutChildrenInput
  children: OrderTemplateUpdateManyWithoutParentInput
  product: ProductUpdateOneInput
}

input OrderTemplateUpdateInput {
  deletedAt: DateTime
  note: String
  sortIndex: Int
  defaultOrderAmount: Int
  minOrderAmount: Int
  maxOrderAmount: Int
  orderable: Boolean
  stock: Int
  stockWarning: Int
  visibleFrom: DateTime
  visibleUntil: DateTime
  properties: PropertiesUpdateOneWithoutOrderTemplateInput
  filterOptions: FilterOptionsUpdateOneInput
  brand: BrandUpdateOneRequiredWithoutOrderTemplatesInput
  parent: OrderTemplateUpdateOneWithoutChildrenInput
  children: OrderTemplateUpdateManyWithoutParentInput
  product: ProductUpdateOneInput
}

input OrderTemplateUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
  sortIndex: Int
  defaultOrderAmount: Int
  minOrderAmount: Int
  maxOrderAmount: Int
  orderable: Boolean
  stock: Int
  stockWarning: Int
  visibleFrom: DateTime
  visibleUntil: DateTime
}

input OrderTemplateUpdateManyWithoutBrandInput {
  create: [OrderTemplateCreateWithoutBrandInput!]
  connect: [OrderTemplateWhereUniqueInput!]
  disconnect: [OrderTemplateWhereUniqueInput!]
  delete: [OrderTemplateWhereUniqueInput!]
  update: [OrderTemplateUpdateWithWhereUniqueWithoutBrandInput!]
  upsert: [OrderTemplateUpsertWithWhereUniqueWithoutBrandInput!]
}

input OrderTemplateUpdateManyWithoutParentInput {
  create: [OrderTemplateCreateWithoutParentInput!]
  connect: [OrderTemplateWhereUniqueInput!]
  disconnect: [OrderTemplateWhereUniqueInput!]
  delete: [OrderTemplateWhereUniqueInput!]
  update: [OrderTemplateUpdateWithWhereUniqueWithoutParentInput!]
  upsert: [OrderTemplateUpsertWithWhereUniqueWithoutParentInput!]
}

input OrderTemplateUpdateOneInput {
  create: OrderTemplateCreateInput
  connect: OrderTemplateWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: OrderTemplateUpdateDataInput
  upsert: OrderTemplateUpsertNestedInput
}

input OrderTemplateUpdateOneWithoutChildrenInput {
  create: OrderTemplateCreateWithoutChildrenInput
  connect: OrderTemplateWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: OrderTemplateUpdateWithoutChildrenDataInput
  upsert: OrderTemplateUpsertWithoutChildrenInput
}

input OrderTemplateUpdateOneWithoutPropertiesInput {
  create: OrderTemplateCreateWithoutPropertiesInput
  connect: OrderTemplateWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: OrderTemplateUpdateWithoutPropertiesDataInput
  upsert: OrderTemplateUpsertWithoutPropertiesInput
}

input OrderTemplateUpdateWithoutBrandDataInput {
  deletedAt: DateTime
  note: String
  sortIndex: Int
  defaultOrderAmount: Int
  minOrderAmount: Int
  maxOrderAmount: Int
  orderable: Boolean
  stock: Int
  stockWarning: Int
  visibleFrom: DateTime
  visibleUntil: DateTime
  properties: PropertiesUpdateOneWithoutOrderTemplateInput
  filterOptions: FilterOptionsUpdateOneInput
  parent: OrderTemplateUpdateOneWithoutChildrenInput
  children: OrderTemplateUpdateManyWithoutParentInput
  product: ProductUpdateOneInput
}

input OrderTemplateUpdateWithoutChildrenDataInput {
  deletedAt: DateTime
  note: String
  sortIndex: Int
  defaultOrderAmount: Int
  minOrderAmount: Int
  maxOrderAmount: Int
  orderable: Boolean
  stock: Int
  stockWarning: Int
  visibleFrom: DateTime
  visibleUntil: DateTime
  properties: PropertiesUpdateOneWithoutOrderTemplateInput
  filterOptions: FilterOptionsUpdateOneInput
  brand: BrandUpdateOneRequiredWithoutOrderTemplatesInput
  parent: OrderTemplateUpdateOneWithoutChildrenInput
  product: ProductUpdateOneInput
}

input OrderTemplateUpdateWithoutParentDataInput {
  deletedAt: DateTime
  note: String
  sortIndex: Int
  defaultOrderAmount: Int
  minOrderAmount: Int
  maxOrderAmount: Int
  orderable: Boolean
  stock: Int
  stockWarning: Int
  visibleFrom: DateTime
  visibleUntil: DateTime
  properties: PropertiesUpdateOneWithoutOrderTemplateInput
  filterOptions: FilterOptionsUpdateOneInput
  brand: BrandUpdateOneRequiredWithoutOrderTemplatesInput
  children: OrderTemplateUpdateManyWithoutParentInput
  product: ProductUpdateOneInput
}

input OrderTemplateUpdateWithoutPropertiesDataInput {
  deletedAt: DateTime
  note: String
  sortIndex: Int
  defaultOrderAmount: Int
  minOrderAmount: Int
  maxOrderAmount: Int
  orderable: Boolean
  stock: Int
  stockWarning: Int
  visibleFrom: DateTime
  visibleUntil: DateTime
  filterOptions: FilterOptionsUpdateOneInput
  brand: BrandUpdateOneRequiredWithoutOrderTemplatesInput
  parent: OrderTemplateUpdateOneWithoutChildrenInput
  children: OrderTemplateUpdateManyWithoutParentInput
  product: ProductUpdateOneInput
}

input OrderTemplateUpdateWithWhereUniqueWithoutBrandInput {
  where: OrderTemplateWhereUniqueInput!
  data: OrderTemplateUpdateWithoutBrandDataInput!
}

input OrderTemplateUpdateWithWhereUniqueWithoutParentInput {
  where: OrderTemplateWhereUniqueInput!
  data: OrderTemplateUpdateWithoutParentDataInput!
}

input OrderTemplateUpsertNestedInput {
  update: OrderTemplateUpdateDataInput!
  create: OrderTemplateCreateInput!
}

input OrderTemplateUpsertWithoutChildrenInput {
  update: OrderTemplateUpdateWithoutChildrenDataInput!
  create: OrderTemplateCreateWithoutChildrenInput!
}

input OrderTemplateUpsertWithoutPropertiesInput {
  update: OrderTemplateUpdateWithoutPropertiesDataInput!
  create: OrderTemplateCreateWithoutPropertiesInput!
}

input OrderTemplateUpsertWithWhereUniqueWithoutBrandInput {
  where: OrderTemplateWhereUniqueInput!
  update: OrderTemplateUpdateWithoutBrandDataInput!
  create: OrderTemplateCreateWithoutBrandInput!
}

input OrderTemplateUpsertWithWhereUniqueWithoutParentInput {
  where: OrderTemplateWhereUniqueInput!
  update: OrderTemplateUpdateWithoutParentDataInput!
  create: OrderTemplateCreateWithoutParentInput!
}

input OrderTemplateWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderTemplateWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderTemplateWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderTemplateWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  sortIndex: Int

  """All values that are not equal to given value."""
  sortIndex_not: Int

  """All values that are contained in given list."""
  sortIndex_in: [Int!]

  """All values that are not contained in given list."""
  sortIndex_not_in: [Int!]

  """All values less than the given value."""
  sortIndex_lt: Int

  """All values less than or equal the given value."""
  sortIndex_lte: Int

  """All values greater than the given value."""
  sortIndex_gt: Int

  """All values greater than or equal the given value."""
  sortIndex_gte: Int
  defaultOrderAmount: Int

  """All values that are not equal to given value."""
  defaultOrderAmount_not: Int

  """All values that are contained in given list."""
  defaultOrderAmount_in: [Int!]

  """All values that are not contained in given list."""
  defaultOrderAmount_not_in: [Int!]

  """All values less than the given value."""
  defaultOrderAmount_lt: Int

  """All values less than or equal the given value."""
  defaultOrderAmount_lte: Int

  """All values greater than the given value."""
  defaultOrderAmount_gt: Int

  """All values greater than or equal the given value."""
  defaultOrderAmount_gte: Int
  minOrderAmount: Int

  """All values that are not equal to given value."""
  minOrderAmount_not: Int

  """All values that are contained in given list."""
  minOrderAmount_in: [Int!]

  """All values that are not contained in given list."""
  minOrderAmount_not_in: [Int!]

  """All values less than the given value."""
  minOrderAmount_lt: Int

  """All values less than or equal the given value."""
  minOrderAmount_lte: Int

  """All values greater than the given value."""
  minOrderAmount_gt: Int

  """All values greater than or equal the given value."""
  minOrderAmount_gte: Int
  maxOrderAmount: Int

  """All values that are not equal to given value."""
  maxOrderAmount_not: Int

  """All values that are contained in given list."""
  maxOrderAmount_in: [Int!]

  """All values that are not contained in given list."""
  maxOrderAmount_not_in: [Int!]

  """All values less than the given value."""
  maxOrderAmount_lt: Int

  """All values less than or equal the given value."""
  maxOrderAmount_lte: Int

  """All values greater than the given value."""
  maxOrderAmount_gt: Int

  """All values greater than or equal the given value."""
  maxOrderAmount_gte: Int
  orderable: Boolean

  """All values that are not equal to given value."""
  orderable_not: Boolean
  stock: Int

  """All values that are not equal to given value."""
  stock_not: Int

  """All values that are contained in given list."""
  stock_in: [Int!]

  """All values that are not contained in given list."""
  stock_not_in: [Int!]

  """All values less than the given value."""
  stock_lt: Int

  """All values less than or equal the given value."""
  stock_lte: Int

  """All values greater than the given value."""
  stock_gt: Int

  """All values greater than or equal the given value."""
  stock_gte: Int
  stockWarning: Int

  """All values that are not equal to given value."""
  stockWarning_not: Int

  """All values that are contained in given list."""
  stockWarning_in: [Int!]

  """All values that are not contained in given list."""
  stockWarning_not_in: [Int!]

  """All values less than the given value."""
  stockWarning_lt: Int

  """All values less than or equal the given value."""
  stockWarning_lte: Int

  """All values greater than the given value."""
  stockWarning_gt: Int

  """All values greater than or equal the given value."""
  stockWarning_gte: Int
  visibleFrom: DateTime

  """All values that are not equal to given value."""
  visibleFrom_not: DateTime

  """All values that are contained in given list."""
  visibleFrom_in: [DateTime!]

  """All values that are not contained in given list."""
  visibleFrom_not_in: [DateTime!]

  """All values less than the given value."""
  visibleFrom_lt: DateTime

  """All values less than or equal the given value."""
  visibleFrom_lte: DateTime

  """All values greater than the given value."""
  visibleFrom_gt: DateTime

  """All values greater than or equal the given value."""
  visibleFrom_gte: DateTime
  visibleUntil: DateTime

  """All values that are not equal to given value."""
  visibleUntil_not: DateTime

  """All values that are contained in given list."""
  visibleUntil_in: [DateTime!]

  """All values that are not contained in given list."""
  visibleUntil_not_in: [DateTime!]

  """All values less than the given value."""
  visibleUntil_lt: DateTime

  """All values less than or equal the given value."""
  visibleUntil_lte: DateTime

  """All values greater than the given value."""
  visibleUntil_gt: DateTime

  """All values greater than or equal the given value."""
  visibleUntil_gte: DateTime
  properties: PropertiesWhereInput
  filterOptions: FilterOptionsWhereInput
  brand: BrandWhereInput
  parent: OrderTemplateWhereInput
  children_every: OrderTemplateWhereInput
  children_some: OrderTemplateWhereInput
  children_none: OrderTemplateWhereInput
  product: ProductWhereInput
}

input OrderTemplateWhereUniqueInput {
  id: ID
}

input OrderUpdateInput {
  deletedAt: DateTime
  note: String
  orderNumber: String
  poNumber: String
  trackAndTraceCode: String
  status: OrderStatus
  orderedAt: DateTime
  store: StoreUpdateOneRequiredWithoutOrdersInput
  comments: CommentUpdateManyWithoutOrderInput
  createdBy: UserUpdateOneWithoutOrdersInput
  items: OrderItemUpdateManyInput
  address: AddressUpdateOneInput
}

input OrderUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
  orderNumber: String
  poNumber: String
  trackAndTraceCode: String
  status: OrderStatus
  orderedAt: DateTime
}

input OrderUpdateManyWithoutCreatedByInput {
  create: [OrderCreateWithoutCreatedByInput!]
  connect: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  delete: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutCreatedByInput!]
}

input OrderUpdateManyWithoutStoreInput {
  create: [OrderCreateWithoutStoreInput!]
  connect: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  delete: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutStoreInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutStoreInput!]
}

input OrderUpdateOneRequiredWithoutCommentsInput {
  create: OrderCreateWithoutCommentsInput
  connect: OrderWhereUniqueInput
  update: OrderUpdateWithoutCommentsDataInput
  upsert: OrderUpsertWithoutCommentsInput
}

input OrderUpdateWithoutCommentsDataInput {
  deletedAt: DateTime
  note: String
  orderNumber: String
  poNumber: String
  trackAndTraceCode: String
  status: OrderStatus
  orderedAt: DateTime
  store: StoreUpdateOneRequiredWithoutOrdersInput
  createdBy: UserUpdateOneWithoutOrdersInput
  items: OrderItemUpdateManyInput
  address: AddressUpdateOneInput
}

input OrderUpdateWithoutCreatedByDataInput {
  deletedAt: DateTime
  note: String
  orderNumber: String
  poNumber: String
  trackAndTraceCode: String
  status: OrderStatus
  orderedAt: DateTime
  store: StoreUpdateOneRequiredWithoutOrdersInput
  comments: CommentUpdateManyWithoutOrderInput
  items: OrderItemUpdateManyInput
  address: AddressUpdateOneInput
}

input OrderUpdateWithoutStoreDataInput {
  deletedAt: DateTime
  note: String
  orderNumber: String
  poNumber: String
  trackAndTraceCode: String
  status: OrderStatus
  orderedAt: DateTime
  comments: CommentUpdateManyWithoutOrderInput
  createdBy: UserUpdateOneWithoutOrdersInput
  items: OrderItemUpdateManyInput
  address: AddressUpdateOneInput
}

input OrderUpdateWithWhereUniqueWithoutCreatedByInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutCreatedByDataInput!
}

input OrderUpdateWithWhereUniqueWithoutStoreInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutStoreDataInput!
}

input OrderUpsertWithoutCommentsInput {
  update: OrderUpdateWithoutCommentsDataInput!
  create: OrderCreateWithoutCommentsInput!
}

input OrderUpsertWithWhereUniqueWithoutCreatedByInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutCreatedByDataInput!
  create: OrderCreateWithoutCreatedByInput!
}

input OrderUpsertWithWhereUniqueWithoutStoreInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutStoreDataInput!
  create: OrderCreateWithoutStoreInput!
}

input OrderWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  orderNumber: String

  """All values that are not equal to given value."""
  orderNumber_not: String

  """All values that are contained in given list."""
  orderNumber_in: [String!]

  """All values that are not contained in given list."""
  orderNumber_not_in: [String!]

  """All values less than the given value."""
  orderNumber_lt: String

  """All values less than or equal the given value."""
  orderNumber_lte: String

  """All values greater than the given value."""
  orderNumber_gt: String

  """All values greater than or equal the given value."""
  orderNumber_gte: String

  """All values containing the given string."""
  orderNumber_contains: String

  """All values not containing the given string."""
  orderNumber_not_contains: String

  """All values starting with the given string."""
  orderNumber_starts_with: String

  """All values not starting with the given string."""
  orderNumber_not_starts_with: String

  """All values ending with the given string."""
  orderNumber_ends_with: String

  """All values not ending with the given string."""
  orderNumber_not_ends_with: String
  poNumber: String

  """All values that are not equal to given value."""
  poNumber_not: String

  """All values that are contained in given list."""
  poNumber_in: [String!]

  """All values that are not contained in given list."""
  poNumber_not_in: [String!]

  """All values less than the given value."""
  poNumber_lt: String

  """All values less than or equal the given value."""
  poNumber_lte: String

  """All values greater than the given value."""
  poNumber_gt: String

  """All values greater than or equal the given value."""
  poNumber_gte: String

  """All values containing the given string."""
  poNumber_contains: String

  """All values not containing the given string."""
  poNumber_not_contains: String

  """All values starting with the given string."""
  poNumber_starts_with: String

  """All values not starting with the given string."""
  poNumber_not_starts_with: String

  """All values ending with the given string."""
  poNumber_ends_with: String

  """All values not ending with the given string."""
  poNumber_not_ends_with: String
  trackAndTraceCode: String

  """All values that are not equal to given value."""
  trackAndTraceCode_not: String

  """All values that are contained in given list."""
  trackAndTraceCode_in: [String!]

  """All values that are not contained in given list."""
  trackAndTraceCode_not_in: [String!]

  """All values less than the given value."""
  trackAndTraceCode_lt: String

  """All values less than or equal the given value."""
  trackAndTraceCode_lte: String

  """All values greater than the given value."""
  trackAndTraceCode_gt: String

  """All values greater than or equal the given value."""
  trackAndTraceCode_gte: String

  """All values containing the given string."""
  trackAndTraceCode_contains: String

  """All values not containing the given string."""
  trackAndTraceCode_not_contains: String

  """All values starting with the given string."""
  trackAndTraceCode_starts_with: String

  """All values not starting with the given string."""
  trackAndTraceCode_not_starts_with: String

  """All values ending with the given string."""
  trackAndTraceCode_ends_with: String

  """All values not ending with the given string."""
  trackAndTraceCode_not_ends_with: String
  status: OrderStatus

  """All values that are not equal to given value."""
  status_not: OrderStatus

  """All values that are contained in given list."""
  status_in: [OrderStatus!]

  """All values that are not contained in given list."""
  status_not_in: [OrderStatus!]
  orderedAt: DateTime

  """All values that are not equal to given value."""
  orderedAt_not: DateTime

  """All values that are contained in given list."""
  orderedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  orderedAt_not_in: [DateTime!]

  """All values less than the given value."""
  orderedAt_lt: DateTime

  """All values less than or equal the given value."""
  orderedAt_lte: DateTime

  """All values greater than the given value."""
  orderedAt_gt: DateTime

  """All values greater than or equal the given value."""
  orderedAt_gte: DateTime
  store: StoreWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  createdBy: UserWhereInput
  items_every: OrderItemWhereInput
  items_some: OrderItemWhereInput
  items_none: OrderItemWhereInput
  address: AddressWhereInput
}

input OrderWhereUniqueInput {
  id: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PermissionAction {
  CREATE_OWN
  CREATE_ALL
  UPDATE_OWN
  UPDATE_ALL
  DELETE_OWN
  DELETE_ALL
  VIEW_OWN
  VIEW_ALL
  ALL
}

enum PermissionModel {
  USER
  PRODUCT
  ORDER
  ORDER_STATUS
  BRAND
  ROLE
  STORE
  SUPPLIER
  SUPPORT
  NOTIFICATION
  ALL
}

type Product implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  stock: Int
  brand: Brand
  properties: Properties!
  productCategories: ProductCategory
}

type ProductCategory implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  properties: Properties!
  brand: Brand
  parent: ProductCategory
  children(where: ProductCategoryWhereInput, orderBy: ProductCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductCategory!]
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
}

"""A connection to a list of items."""
type ProductCategoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProductCategoryEdge]!
  aggregate: AggregateProductCategory!
}

input ProductCategoryCreateInput {
  deletedAt: DateTime
  note: String
  properties: PropertiesCreateOneWithoutProductCategoryInput!
  brand: BrandCreateOneWithoutProductCategoriesInput
  parent: ProductCategoryCreateOneWithoutChildrenInput
  children: ProductCategoryCreateManyWithoutParentInput
  products: ProductCreateManyWithoutProductCategoriesInput
}

input ProductCategoryCreateManyWithoutBrandInput {
  create: [ProductCategoryCreateWithoutBrandInput!]
  connect: [ProductCategoryWhereUniqueInput!]
}

input ProductCategoryCreateManyWithoutParentInput {
  create: [ProductCategoryCreateWithoutParentInput!]
  connect: [ProductCategoryWhereUniqueInput!]
}

input ProductCategoryCreateOneWithoutChildrenInput {
  create: ProductCategoryCreateWithoutChildrenInput
  connect: ProductCategoryWhereUniqueInput
}

input ProductCategoryCreateOneWithoutProductsInput {
  create: ProductCategoryCreateWithoutProductsInput
  connect: ProductCategoryWhereUniqueInput
}

input ProductCategoryCreateOneWithoutPropertiesInput {
  create: ProductCategoryCreateWithoutPropertiesInput
  connect: ProductCategoryWhereUniqueInput
}

input ProductCategoryCreateWithoutBrandInput {
  deletedAt: DateTime
  note: String
  properties: PropertiesCreateOneWithoutProductCategoryInput!
  parent: ProductCategoryCreateOneWithoutChildrenInput
  children: ProductCategoryCreateManyWithoutParentInput
  products: ProductCreateManyWithoutProductCategoriesInput
}

input ProductCategoryCreateWithoutChildrenInput {
  deletedAt: DateTime
  note: String
  properties: PropertiesCreateOneWithoutProductCategoryInput!
  brand: BrandCreateOneWithoutProductCategoriesInput
  parent: ProductCategoryCreateOneWithoutChildrenInput
  products: ProductCreateManyWithoutProductCategoriesInput
}

input ProductCategoryCreateWithoutParentInput {
  deletedAt: DateTime
  note: String
  properties: PropertiesCreateOneWithoutProductCategoryInput!
  brand: BrandCreateOneWithoutProductCategoriesInput
  children: ProductCategoryCreateManyWithoutParentInput
  products: ProductCreateManyWithoutProductCategoriesInput
}

input ProductCategoryCreateWithoutProductsInput {
  deletedAt: DateTime
  note: String
  properties: PropertiesCreateOneWithoutProductCategoryInput!
  brand: BrandCreateOneWithoutProductCategoriesInput
  parent: ProductCategoryCreateOneWithoutChildrenInput
  children: ProductCategoryCreateManyWithoutParentInput
}

input ProductCategoryCreateWithoutPropertiesInput {
  deletedAt: DateTime
  note: String
  brand: BrandCreateOneWithoutProductCategoriesInput
  parent: ProductCategoryCreateOneWithoutChildrenInput
  children: ProductCategoryCreateManyWithoutParentInput
  products: ProductCreateManyWithoutProductCategoriesInput
}

"""An edge in a connection."""
type ProductCategoryEdge {
  """The item at the end of the edge."""
  node: ProductCategory!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProductCategoryOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
}

type ProductCategoryPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
}

type ProductCategorySubscriptionPayload {
  mutation: MutationType!
  node: ProductCategory
  updatedFields: [String!]
  previousValues: ProductCategoryPreviousValues
}

input ProductCategorySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductCategorySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductCategorySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductCategorySubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProductCategoryWhereInput
}

input ProductCategoryUpdateInput {
  deletedAt: DateTime
  note: String
  properties: PropertiesUpdateOneRequiredWithoutProductCategoryInput
  brand: BrandUpdateOneWithoutProductCategoriesInput
  parent: ProductCategoryUpdateOneWithoutChildrenInput
  children: ProductCategoryUpdateManyWithoutParentInput
  products: ProductUpdateManyWithoutProductCategoriesInput
}

input ProductCategoryUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
}

input ProductCategoryUpdateManyWithoutBrandInput {
  create: [ProductCategoryCreateWithoutBrandInput!]
  connect: [ProductCategoryWhereUniqueInput!]
  disconnect: [ProductCategoryWhereUniqueInput!]
  delete: [ProductCategoryWhereUniqueInput!]
  update: [ProductCategoryUpdateWithWhereUniqueWithoutBrandInput!]
  upsert: [ProductCategoryUpsertWithWhereUniqueWithoutBrandInput!]
}

input ProductCategoryUpdateManyWithoutParentInput {
  create: [ProductCategoryCreateWithoutParentInput!]
  connect: [ProductCategoryWhereUniqueInput!]
  disconnect: [ProductCategoryWhereUniqueInput!]
  delete: [ProductCategoryWhereUniqueInput!]
  update: [ProductCategoryUpdateWithWhereUniqueWithoutParentInput!]
  upsert: [ProductCategoryUpsertWithWhereUniqueWithoutParentInput!]
}

input ProductCategoryUpdateOneWithoutChildrenInput {
  create: ProductCategoryCreateWithoutChildrenInput
  connect: ProductCategoryWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ProductCategoryUpdateWithoutChildrenDataInput
  upsert: ProductCategoryUpsertWithoutChildrenInput
}

input ProductCategoryUpdateOneWithoutProductsInput {
  create: ProductCategoryCreateWithoutProductsInput
  connect: ProductCategoryWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ProductCategoryUpdateWithoutProductsDataInput
  upsert: ProductCategoryUpsertWithoutProductsInput
}

input ProductCategoryUpdateOneWithoutPropertiesInput {
  create: ProductCategoryCreateWithoutPropertiesInput
  connect: ProductCategoryWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ProductCategoryUpdateWithoutPropertiesDataInput
  upsert: ProductCategoryUpsertWithoutPropertiesInput
}

input ProductCategoryUpdateWithoutBrandDataInput {
  deletedAt: DateTime
  note: String
  properties: PropertiesUpdateOneRequiredWithoutProductCategoryInput
  parent: ProductCategoryUpdateOneWithoutChildrenInput
  children: ProductCategoryUpdateManyWithoutParentInput
  products: ProductUpdateManyWithoutProductCategoriesInput
}

input ProductCategoryUpdateWithoutChildrenDataInput {
  deletedAt: DateTime
  note: String
  properties: PropertiesUpdateOneRequiredWithoutProductCategoryInput
  brand: BrandUpdateOneWithoutProductCategoriesInput
  parent: ProductCategoryUpdateOneWithoutChildrenInput
  products: ProductUpdateManyWithoutProductCategoriesInput
}

input ProductCategoryUpdateWithoutParentDataInput {
  deletedAt: DateTime
  note: String
  properties: PropertiesUpdateOneRequiredWithoutProductCategoryInput
  brand: BrandUpdateOneWithoutProductCategoriesInput
  children: ProductCategoryUpdateManyWithoutParentInput
  products: ProductUpdateManyWithoutProductCategoriesInput
}

input ProductCategoryUpdateWithoutProductsDataInput {
  deletedAt: DateTime
  note: String
  properties: PropertiesUpdateOneRequiredWithoutProductCategoryInput
  brand: BrandUpdateOneWithoutProductCategoriesInput
  parent: ProductCategoryUpdateOneWithoutChildrenInput
  children: ProductCategoryUpdateManyWithoutParentInput
}

input ProductCategoryUpdateWithoutPropertiesDataInput {
  deletedAt: DateTime
  note: String
  brand: BrandUpdateOneWithoutProductCategoriesInput
  parent: ProductCategoryUpdateOneWithoutChildrenInput
  children: ProductCategoryUpdateManyWithoutParentInput
  products: ProductUpdateManyWithoutProductCategoriesInput
}

input ProductCategoryUpdateWithWhereUniqueWithoutBrandInput {
  where: ProductCategoryWhereUniqueInput!
  data: ProductCategoryUpdateWithoutBrandDataInput!
}

input ProductCategoryUpdateWithWhereUniqueWithoutParentInput {
  where: ProductCategoryWhereUniqueInput!
  data: ProductCategoryUpdateWithoutParentDataInput!
}

input ProductCategoryUpsertWithoutChildrenInput {
  update: ProductCategoryUpdateWithoutChildrenDataInput!
  create: ProductCategoryCreateWithoutChildrenInput!
}

input ProductCategoryUpsertWithoutProductsInput {
  update: ProductCategoryUpdateWithoutProductsDataInput!
  create: ProductCategoryCreateWithoutProductsInput!
}

input ProductCategoryUpsertWithoutPropertiesInput {
  update: ProductCategoryUpdateWithoutPropertiesDataInput!
  create: ProductCategoryCreateWithoutPropertiesInput!
}

input ProductCategoryUpsertWithWhereUniqueWithoutBrandInput {
  where: ProductCategoryWhereUniqueInput!
  update: ProductCategoryUpdateWithoutBrandDataInput!
  create: ProductCategoryCreateWithoutBrandInput!
}

input ProductCategoryUpsertWithWhereUniqueWithoutParentInput {
  where: ProductCategoryWhereUniqueInput!
  update: ProductCategoryUpdateWithoutParentDataInput!
  create: ProductCategoryCreateWithoutParentInput!
}

input ProductCategoryWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductCategoryWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductCategoryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductCategoryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  properties: PropertiesWhereInput
  brand: BrandWhereInput
  parent: ProductCategoryWhereInput
  children_every: ProductCategoryWhereInput
  children_some: ProductCategoryWhereInput
  children_none: ProductCategoryWhereInput
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
}

input ProductCategoryWhereUniqueInput {
  id: ID
}

"""A connection to a list of items."""
type ProductConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  deletedAt: DateTime
  note: String
  stock: Int
  brand: BrandCreateOneInput
  properties: PropertiesCreateOneWithoutProductInput!
  productCategories: ProductCategoryCreateOneWithoutProductsInput
}

input ProductCreateManyWithoutProductCategoriesInput {
  create: [ProductCreateWithoutProductCategoriesInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateOneInput {
  create: ProductCreateInput
  connect: ProductWhereUniqueInput
}

input ProductCreateOneWithoutPropertiesInput {
  create: ProductCreateWithoutPropertiesInput
  connect: ProductWhereUniqueInput
}

input ProductCreateWithoutProductCategoriesInput {
  deletedAt: DateTime
  note: String
  stock: Int
  brand: BrandCreateOneInput
  properties: PropertiesCreateOneWithoutProductInput!
}

input ProductCreateWithoutPropertiesInput {
  deletedAt: DateTime
  note: String
  stock: Int
  brand: BrandCreateOneInput
  productCategories: ProductCategoryCreateOneWithoutProductsInput
}

"""An edge in a connection."""
type ProductEdge {
  """The item at the end of the edge."""
  node: Product!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
  stock_ASC
  stock_DESC
}

type ProductPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  stock: Int
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
}

input ProductUpdateDataInput {
  deletedAt: DateTime
  note: String
  stock: Int
  brand: BrandUpdateOneInput
  properties: PropertiesUpdateOneRequiredWithoutProductInput
  productCategories: ProductCategoryUpdateOneWithoutProductsInput
}

input ProductUpdateInput {
  deletedAt: DateTime
  note: String
  stock: Int
  brand: BrandUpdateOneInput
  properties: PropertiesUpdateOneRequiredWithoutProductInput
  productCategories: ProductCategoryUpdateOneWithoutProductsInput
}

input ProductUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
  stock: Int
}

input ProductUpdateManyWithoutProductCategoriesInput {
  create: [ProductCreateWithoutProductCategoriesInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutProductCategoriesInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutProductCategoriesInput!]
}

input ProductUpdateOneInput {
  create: ProductCreateInput
  connect: ProductWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ProductUpdateDataInput
  upsert: ProductUpsertNestedInput
}

input ProductUpdateOneWithoutPropertiesInput {
  create: ProductCreateWithoutPropertiesInput
  connect: ProductWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ProductUpdateWithoutPropertiesDataInput
  upsert: ProductUpsertWithoutPropertiesInput
}

input ProductUpdateWithoutProductCategoriesDataInput {
  deletedAt: DateTime
  note: String
  stock: Int
  brand: BrandUpdateOneInput
  properties: PropertiesUpdateOneRequiredWithoutProductInput
}

input ProductUpdateWithoutPropertiesDataInput {
  deletedAt: DateTime
  note: String
  stock: Int
  brand: BrandUpdateOneInput
  productCategories: ProductCategoryUpdateOneWithoutProductsInput
}

input ProductUpdateWithWhereUniqueWithoutProductCategoriesInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutProductCategoriesDataInput!
}

input ProductUpsertNestedInput {
  update: ProductUpdateDataInput!
  create: ProductCreateInput!
}

input ProductUpsertWithoutPropertiesInput {
  update: ProductUpdateWithoutPropertiesDataInput!
  create: ProductCreateWithoutPropertiesInput!
}

input ProductUpsertWithWhereUniqueWithoutProductCategoriesInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutProductCategoriesDataInput!
  create: ProductCreateWithoutProductCategoriesInput!
}

input ProductWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  stock: Int

  """All values that are not equal to given value."""
  stock_not: Int

  """All values that are contained in given list."""
  stock_in: [Int!]

  """All values that are not contained in given list."""
  stock_not_in: [Int!]

  """All values less than the given value."""
  stock_lt: Int

  """All values less than or equal the given value."""
  stock_lte: Int

  """All values greater than the given value."""
  stock_gt: Int

  """All values greater than or equal the given value."""
  stock_gte: Int
  brand: BrandWhereInput
  properties: PropertiesWhereInput
  productCategories: ProductCategoryWhereInput
}

input ProductWhereUniqueInput {
  id: ID
}

type Properties implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  articleNumber: String
  price: Int
  currency: String
  name: String
  description: String
  weightG: Int
  widthMm: Int
  heightMm: Int
  depthMm: Int
  color: String
  material: String
  size: String
  language: Language
  images(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
  supplier: Supplier
  product: Product
  productCategory: ProductCategory
  orderTemplate: OrderTemplate
}

"""A connection to a list of items."""
type PropertiesConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PropertiesEdge]!
  aggregate: AggregateProperties!
}

input PropertiesCreateInput {
  deletedAt: DateTime
  note: String
  articleNumber: String
  price: Int
  currency: String
  name: String
  description: String
  weightG: Int
  widthMm: Int
  heightMm: Int
  depthMm: Int
  color: String
  material: String
  size: String
  language: LanguageCreateOneInput
  images: FileCreateManyInput
  supplier: SupplierCreateOneWithoutProductsInput
  product: ProductCreateOneWithoutPropertiesInput
  productCategory: ProductCategoryCreateOneWithoutPropertiesInput
  orderTemplate: OrderTemplateCreateOneWithoutPropertiesInput
}

input PropertiesCreateManyWithoutSupplierInput {
  create: [PropertiesCreateWithoutSupplierInput!]
  connect: [PropertiesWhereUniqueInput!]
}

input PropertiesCreateOneWithoutOrderTemplateInput {
  create: PropertiesCreateWithoutOrderTemplateInput
  connect: PropertiesWhereUniqueInput
}

input PropertiesCreateOneWithoutProductCategoryInput {
  create: PropertiesCreateWithoutProductCategoryInput
  connect: PropertiesWhereUniqueInput
}

input PropertiesCreateOneWithoutProductInput {
  create: PropertiesCreateWithoutProductInput
  connect: PropertiesWhereUniqueInput
}

input PropertiesCreateWithoutOrderTemplateInput {
  deletedAt: DateTime
  note: String
  articleNumber: String
  price: Int
  currency: String
  name: String
  description: String
  weightG: Int
  widthMm: Int
  heightMm: Int
  depthMm: Int
  color: String
  material: String
  size: String
  language: LanguageCreateOneInput
  images: FileCreateManyInput
  supplier: SupplierCreateOneWithoutProductsInput
  product: ProductCreateOneWithoutPropertiesInput
  productCategory: ProductCategoryCreateOneWithoutPropertiesInput
}

input PropertiesCreateWithoutProductCategoryInput {
  deletedAt: DateTime
  note: String
  articleNumber: String
  price: Int
  currency: String
  name: String
  description: String
  weightG: Int
  widthMm: Int
  heightMm: Int
  depthMm: Int
  color: String
  material: String
  size: String
  language: LanguageCreateOneInput
  images: FileCreateManyInput
  supplier: SupplierCreateOneWithoutProductsInput
  product: ProductCreateOneWithoutPropertiesInput
  orderTemplate: OrderTemplateCreateOneWithoutPropertiesInput
}

input PropertiesCreateWithoutProductInput {
  deletedAt: DateTime
  note: String
  articleNumber: String
  price: Int
  currency: String
  name: String
  description: String
  weightG: Int
  widthMm: Int
  heightMm: Int
  depthMm: Int
  color: String
  material: String
  size: String
  language: LanguageCreateOneInput
  images: FileCreateManyInput
  supplier: SupplierCreateOneWithoutProductsInput
  productCategory: ProductCategoryCreateOneWithoutPropertiesInput
  orderTemplate: OrderTemplateCreateOneWithoutPropertiesInput
}

input PropertiesCreateWithoutSupplierInput {
  deletedAt: DateTime
  note: String
  articleNumber: String
  price: Int
  currency: String
  name: String
  description: String
  weightG: Int
  widthMm: Int
  heightMm: Int
  depthMm: Int
  color: String
  material: String
  size: String
  language: LanguageCreateOneInput
  images: FileCreateManyInput
  product: ProductCreateOneWithoutPropertiesInput
  productCategory: ProductCategoryCreateOneWithoutPropertiesInput
  orderTemplate: OrderTemplateCreateOneWithoutPropertiesInput
}

"""An edge in a connection."""
type PropertiesEdge {
  """The item at the end of the edge."""
  node: Properties!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PropertiesOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
  articleNumber_ASC
  articleNumber_DESC
  price_ASC
  price_DESC
  currency_ASC
  currency_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  weightG_ASC
  weightG_DESC
  widthMm_ASC
  widthMm_DESC
  heightMm_ASC
  heightMm_DESC
  depthMm_ASC
  depthMm_DESC
  color_ASC
  color_DESC
  material_ASC
  material_DESC
  size_ASC
  size_DESC
}

type PropertiesPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  articleNumber: String
  price: Int
  currency: String
  name: String
  description: String
  weightG: Int
  widthMm: Int
  heightMm: Int
  depthMm: Int
  color: String
  material: String
  size: String
}

type PropertiesSubscriptionPayload {
  mutation: MutationType!
  node: Properties
  updatedFields: [String!]
  previousValues: PropertiesPreviousValues
}

input PropertiesSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PropertiesSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PropertiesSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PropertiesSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PropertiesWhereInput
}

input PropertiesUpdateInput {
  deletedAt: DateTime
  note: String
  articleNumber: String
  price: Int
  currency: String
  name: String
  description: String
  weightG: Int
  widthMm: Int
  heightMm: Int
  depthMm: Int
  color: String
  material: String
  size: String
  language: LanguageUpdateOneInput
  images: FileUpdateManyInput
  supplier: SupplierUpdateOneWithoutProductsInput
  product: ProductUpdateOneWithoutPropertiesInput
  productCategory: ProductCategoryUpdateOneWithoutPropertiesInput
  orderTemplate: OrderTemplateUpdateOneWithoutPropertiesInput
}

input PropertiesUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
  articleNumber: String
  price: Int
  currency: String
  name: String
  description: String
  weightG: Int
  widthMm: Int
  heightMm: Int
  depthMm: Int
  color: String
  material: String
  size: String
}

input PropertiesUpdateManyWithoutSupplierInput {
  create: [PropertiesCreateWithoutSupplierInput!]
  connect: [PropertiesWhereUniqueInput!]
  disconnect: [PropertiesWhereUniqueInput!]
  delete: [PropertiesWhereUniqueInput!]
  update: [PropertiesUpdateWithWhereUniqueWithoutSupplierInput!]
  upsert: [PropertiesUpsertWithWhereUniqueWithoutSupplierInput!]
}

input PropertiesUpdateOneRequiredWithoutProductCategoryInput {
  create: PropertiesCreateWithoutProductCategoryInput
  connect: PropertiesWhereUniqueInput
  update: PropertiesUpdateWithoutProductCategoryDataInput
  upsert: PropertiesUpsertWithoutProductCategoryInput
}

input PropertiesUpdateOneRequiredWithoutProductInput {
  create: PropertiesCreateWithoutProductInput
  connect: PropertiesWhereUniqueInput
  update: PropertiesUpdateWithoutProductDataInput
  upsert: PropertiesUpsertWithoutProductInput
}

input PropertiesUpdateOneWithoutOrderTemplateInput {
  create: PropertiesCreateWithoutOrderTemplateInput
  connect: PropertiesWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PropertiesUpdateWithoutOrderTemplateDataInput
  upsert: PropertiesUpsertWithoutOrderTemplateInput
}

input PropertiesUpdateWithoutOrderTemplateDataInput {
  deletedAt: DateTime
  note: String
  articleNumber: String
  price: Int
  currency: String
  name: String
  description: String
  weightG: Int
  widthMm: Int
  heightMm: Int
  depthMm: Int
  color: String
  material: String
  size: String
  language: LanguageUpdateOneInput
  images: FileUpdateManyInput
  supplier: SupplierUpdateOneWithoutProductsInput
  product: ProductUpdateOneWithoutPropertiesInput
  productCategory: ProductCategoryUpdateOneWithoutPropertiesInput
}

input PropertiesUpdateWithoutProductCategoryDataInput {
  deletedAt: DateTime
  note: String
  articleNumber: String
  price: Int
  currency: String
  name: String
  description: String
  weightG: Int
  widthMm: Int
  heightMm: Int
  depthMm: Int
  color: String
  material: String
  size: String
  language: LanguageUpdateOneInput
  images: FileUpdateManyInput
  supplier: SupplierUpdateOneWithoutProductsInput
  product: ProductUpdateOneWithoutPropertiesInput
  orderTemplate: OrderTemplateUpdateOneWithoutPropertiesInput
}

input PropertiesUpdateWithoutProductDataInput {
  deletedAt: DateTime
  note: String
  articleNumber: String
  price: Int
  currency: String
  name: String
  description: String
  weightG: Int
  widthMm: Int
  heightMm: Int
  depthMm: Int
  color: String
  material: String
  size: String
  language: LanguageUpdateOneInput
  images: FileUpdateManyInput
  supplier: SupplierUpdateOneWithoutProductsInput
  productCategory: ProductCategoryUpdateOneWithoutPropertiesInput
  orderTemplate: OrderTemplateUpdateOneWithoutPropertiesInput
}

input PropertiesUpdateWithoutSupplierDataInput {
  deletedAt: DateTime
  note: String
  articleNumber: String
  price: Int
  currency: String
  name: String
  description: String
  weightG: Int
  widthMm: Int
  heightMm: Int
  depthMm: Int
  color: String
  material: String
  size: String
  language: LanguageUpdateOneInput
  images: FileUpdateManyInput
  product: ProductUpdateOneWithoutPropertiesInput
  productCategory: ProductCategoryUpdateOneWithoutPropertiesInput
  orderTemplate: OrderTemplateUpdateOneWithoutPropertiesInput
}

input PropertiesUpdateWithWhereUniqueWithoutSupplierInput {
  where: PropertiesWhereUniqueInput!
  data: PropertiesUpdateWithoutSupplierDataInput!
}

input PropertiesUpsertWithoutOrderTemplateInput {
  update: PropertiesUpdateWithoutOrderTemplateDataInput!
  create: PropertiesCreateWithoutOrderTemplateInput!
}

input PropertiesUpsertWithoutProductCategoryInput {
  update: PropertiesUpdateWithoutProductCategoryDataInput!
  create: PropertiesCreateWithoutProductCategoryInput!
}

input PropertiesUpsertWithoutProductInput {
  update: PropertiesUpdateWithoutProductDataInput!
  create: PropertiesCreateWithoutProductInput!
}

input PropertiesUpsertWithWhereUniqueWithoutSupplierInput {
  where: PropertiesWhereUniqueInput!
  update: PropertiesUpdateWithoutSupplierDataInput!
  create: PropertiesCreateWithoutSupplierInput!
}

input PropertiesWhereInput {
  """Logical AND on all given filters."""
  AND: [PropertiesWhereInput!]

  """Logical OR on all given filters."""
  OR: [PropertiesWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PropertiesWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  articleNumber: String

  """All values that are not equal to given value."""
  articleNumber_not: String

  """All values that are contained in given list."""
  articleNumber_in: [String!]

  """All values that are not contained in given list."""
  articleNumber_not_in: [String!]

  """All values less than the given value."""
  articleNumber_lt: String

  """All values less than or equal the given value."""
  articleNumber_lte: String

  """All values greater than the given value."""
  articleNumber_gt: String

  """All values greater than or equal the given value."""
  articleNumber_gte: String

  """All values containing the given string."""
  articleNumber_contains: String

  """All values not containing the given string."""
  articleNumber_not_contains: String

  """All values starting with the given string."""
  articleNumber_starts_with: String

  """All values not starting with the given string."""
  articleNumber_not_starts_with: String

  """All values ending with the given string."""
  articleNumber_ends_with: String

  """All values not ending with the given string."""
  articleNumber_not_ends_with: String
  price: Int

  """All values that are not equal to given value."""
  price_not: Int

  """All values that are contained in given list."""
  price_in: [Int!]

  """All values that are not contained in given list."""
  price_not_in: [Int!]

  """All values less than the given value."""
  price_lt: Int

  """All values less than or equal the given value."""
  price_lte: Int

  """All values greater than the given value."""
  price_gt: Int

  """All values greater than or equal the given value."""
  price_gte: Int
  currency: String

  """All values that are not equal to given value."""
  currency_not: String

  """All values that are contained in given list."""
  currency_in: [String!]

  """All values that are not contained in given list."""
  currency_not_in: [String!]

  """All values less than the given value."""
  currency_lt: String

  """All values less than or equal the given value."""
  currency_lte: String

  """All values greater than the given value."""
  currency_gt: String

  """All values greater than or equal the given value."""
  currency_gte: String

  """All values containing the given string."""
  currency_contains: String

  """All values not containing the given string."""
  currency_not_contains: String

  """All values starting with the given string."""
  currency_starts_with: String

  """All values not starting with the given string."""
  currency_not_starts_with: String

  """All values ending with the given string."""
  currency_ends_with: String

  """All values not ending with the given string."""
  currency_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  weightG: Int

  """All values that are not equal to given value."""
  weightG_not: Int

  """All values that are contained in given list."""
  weightG_in: [Int!]

  """All values that are not contained in given list."""
  weightG_not_in: [Int!]

  """All values less than the given value."""
  weightG_lt: Int

  """All values less than or equal the given value."""
  weightG_lte: Int

  """All values greater than the given value."""
  weightG_gt: Int

  """All values greater than or equal the given value."""
  weightG_gte: Int
  widthMm: Int

  """All values that are not equal to given value."""
  widthMm_not: Int

  """All values that are contained in given list."""
  widthMm_in: [Int!]

  """All values that are not contained in given list."""
  widthMm_not_in: [Int!]

  """All values less than the given value."""
  widthMm_lt: Int

  """All values less than or equal the given value."""
  widthMm_lte: Int

  """All values greater than the given value."""
  widthMm_gt: Int

  """All values greater than or equal the given value."""
  widthMm_gte: Int
  heightMm: Int

  """All values that are not equal to given value."""
  heightMm_not: Int

  """All values that are contained in given list."""
  heightMm_in: [Int!]

  """All values that are not contained in given list."""
  heightMm_not_in: [Int!]

  """All values less than the given value."""
  heightMm_lt: Int

  """All values less than or equal the given value."""
  heightMm_lte: Int

  """All values greater than the given value."""
  heightMm_gt: Int

  """All values greater than or equal the given value."""
  heightMm_gte: Int
  depthMm: Int

  """All values that are not equal to given value."""
  depthMm_not: Int

  """All values that are contained in given list."""
  depthMm_in: [Int!]

  """All values that are not contained in given list."""
  depthMm_not_in: [Int!]

  """All values less than the given value."""
  depthMm_lt: Int

  """All values less than or equal the given value."""
  depthMm_lte: Int

  """All values greater than the given value."""
  depthMm_gt: Int

  """All values greater than or equal the given value."""
  depthMm_gte: Int
  color: String

  """All values that are not equal to given value."""
  color_not: String

  """All values that are contained in given list."""
  color_in: [String!]

  """All values that are not contained in given list."""
  color_not_in: [String!]

  """All values less than the given value."""
  color_lt: String

  """All values less than or equal the given value."""
  color_lte: String

  """All values greater than the given value."""
  color_gt: String

  """All values greater than or equal the given value."""
  color_gte: String

  """All values containing the given string."""
  color_contains: String

  """All values not containing the given string."""
  color_not_contains: String

  """All values starting with the given string."""
  color_starts_with: String

  """All values not starting with the given string."""
  color_not_starts_with: String

  """All values ending with the given string."""
  color_ends_with: String

  """All values not ending with the given string."""
  color_not_ends_with: String
  material: String

  """All values that are not equal to given value."""
  material_not: String

  """All values that are contained in given list."""
  material_in: [String!]

  """All values that are not contained in given list."""
  material_not_in: [String!]

  """All values less than the given value."""
  material_lt: String

  """All values less than or equal the given value."""
  material_lte: String

  """All values greater than the given value."""
  material_gt: String

  """All values greater than or equal the given value."""
  material_gte: String

  """All values containing the given string."""
  material_contains: String

  """All values not containing the given string."""
  material_not_contains: String

  """All values starting with the given string."""
  material_starts_with: String

  """All values not starting with the given string."""
  material_not_starts_with: String

  """All values ending with the given string."""
  material_ends_with: String

  """All values not ending with the given string."""
  material_not_ends_with: String
  size: String

  """All values that are not equal to given value."""
  size_not: String

  """All values that are contained in given list."""
  size_in: [String!]

  """All values that are not contained in given list."""
  size_not_in: [String!]

  """All values less than the given value."""
  size_lt: String

  """All values less than or equal the given value."""
  size_lte: String

  """All values greater than the given value."""
  size_gt: String

  """All values greater than or equal the given value."""
  size_gte: String

  """All values containing the given string."""
  size_contains: String

  """All values not containing the given string."""
  size_not_contains: String

  """All values starting with the given string."""
  size_starts_with: String

  """All values not starting with the given string."""
  size_not_starts_with: String

  """All values ending with the given string."""
  size_ends_with: String

  """All values not ending with the given string."""
  size_not_ends_with: String
  language: LanguageWhereInput
  images_every: FileWhereInput
  images_some: FileWhereInput
  images_none: FileWhereInput
  supplier: SupplierWhereInput
  product: ProductWhereInput
  productCategory: ProductCategoryWhereInput
  orderTemplate: OrderTemplateWhereInput
}

input PropertiesWhereUniqueInput {
  id: ID
}

type Query {
  stores(where: StoreWhereInput, orderBy: StoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Store]!
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  productCategories(where: ProductCategoryWhereInput, orderBy: ProductCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductCategory]!
  propertieses(where: PropertiesWhereInput, orderBy: PropertiesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Properties]!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  suppliers(where: SupplierWhereInput, orderBy: SupplierOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Supplier]!
  supportPages(where: SupportPageWhereInput, orderBy: SupportPageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SupportPage]!
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  orderTemplates(where: OrderTemplateWhereInput, orderBy: OrderTemplateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderTemplate]!
  filterOptionses(where: FilterOptionsWhereInput, orderBy: FilterOptionsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FilterOptions]!
  orderItems(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem]!
  rolePermissions(where: RolePermissionWhereInput, orderBy: RolePermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RolePermission]!
  brands(where: BrandWhereInput, orderBy: BrandOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Brand]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  languages(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Language]!
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address]!
  store(where: StoreWhereUniqueInput!): Store
  role(where: RoleWhereUniqueInput!): Role
  productCategory(where: ProductCategoryWhereUniqueInput!): ProductCategory
  properties(where: PropertiesWhereUniqueInput!): Properties
  order(where: OrderWhereUniqueInput!): Order
  comment(where: CommentWhereUniqueInput!): Comment
  supplier(where: SupplierWhereUniqueInput!): Supplier
  supportPage(where: SupportPageWhereUniqueInput!): SupportPage
  notification(where: NotificationWhereUniqueInput!): Notification
  user(where: UserWhereUniqueInput!): User
  orderTemplate(where: OrderTemplateWhereUniqueInput!): OrderTemplate
  filterOptions(where: FilterOptionsWhereUniqueInput!): FilterOptions
  orderItem(where: OrderItemWhereUniqueInput!): OrderItem
  rolePermission(where: RolePermissionWhereUniqueInput!): RolePermission
  brand(where: BrandWhereUniqueInput!): Brand
  file(where: FileWhereUniqueInput!): File
  product(where: ProductWhereUniqueInput!): Product
  language(where: LanguageWhereUniqueInput!): Language
  address(where: AddressWhereUniqueInput!): Address
  storesConnection(where: StoreWhereInput, orderBy: StoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StoreConnection!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  productCategoriesConnection(where: ProductCategoryWhereInput, orderBy: ProductCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductCategoryConnection!
  propertiesesConnection(where: PropertiesWhereInput, orderBy: PropertiesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PropertiesConnection!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  suppliersConnection(where: SupplierWhereInput, orderBy: SupplierOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SupplierConnection!
  supportPagesConnection(where: SupportPageWhereInput, orderBy: SupportPageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SupportPageConnection!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  orderTemplatesConnection(where: OrderTemplateWhereInput, orderBy: OrderTemplateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderTemplateConnection!
  filterOptionsesConnection(where: FilterOptionsWhereInput, orderBy: FilterOptionsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FilterOptionsConnection!
  orderItemsConnection(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderItemConnection!
  rolePermissionsConnection(where: RolePermissionWhereInput, orderBy: RolePermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RolePermissionConnection!
  brandsConnection(where: BrandWhereInput, orderBy: BrandOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BrandConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  languagesConnection(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LanguageConnection!
  addressesConnection(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AddressConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Role implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  name: String!
  description: String
  permissions(where: RolePermissionWhereInput, orderBy: RolePermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RolePermission!]
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

"""A connection to a list of items."""
type RoleConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  deletedAt: DateTime
  note: String
  name: String!
  description: String
  permissions: RolePermissionCreateManyInput
  users: UserCreateManyWithoutRoleInput
}

input RoleCreateOneWithoutUsersInput {
  create: RoleCreateWithoutUsersInput
  connect: RoleWhereUniqueInput
}

input RoleCreateWithoutUsersInput {
  deletedAt: DateTime
  note: String
  name: String!
  description: String
  permissions: RolePermissionCreateManyInput
}

"""An edge in a connection."""
type RoleEdge {
  """The item at the end of the edge."""
  node: Role!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RoleOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
}

type RolePermission implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  action: PermissionAction!
  model: PermissionModel!
}

"""A connection to a list of items."""
type RolePermissionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RolePermissionEdge]!
  aggregate: AggregateRolePermission!
}

input RolePermissionCreateInput {
  deletedAt: DateTime
  note: String
  action: PermissionAction!
  model: PermissionModel!
}

input RolePermissionCreateManyInput {
  create: [RolePermissionCreateInput!]
  connect: [RolePermissionWhereUniqueInput!]
}

"""An edge in a connection."""
type RolePermissionEdge {
  """The item at the end of the edge."""
  node: RolePermission!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RolePermissionOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
  action_ASC
  action_DESC
  model_ASC
  model_DESC
}

type RolePermissionPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  action: PermissionAction!
  model: PermissionModel!
}

type RolePermissionSubscriptionPayload {
  mutation: MutationType!
  node: RolePermission
  updatedFields: [String!]
  previousValues: RolePermissionPreviousValues
}

input RolePermissionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RolePermissionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RolePermissionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RolePermissionSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RolePermissionWhereInput
}

input RolePermissionUpdateDataInput {
  deletedAt: DateTime
  note: String
  action: PermissionAction
  model: PermissionModel
}

input RolePermissionUpdateInput {
  deletedAt: DateTime
  note: String
  action: PermissionAction
  model: PermissionModel
}

input RolePermissionUpdateManyInput {
  create: [RolePermissionCreateInput!]
  connect: [RolePermissionWhereUniqueInput!]
  disconnect: [RolePermissionWhereUniqueInput!]
  delete: [RolePermissionWhereUniqueInput!]
  update: [RolePermissionUpdateWithWhereUniqueNestedInput!]
  upsert: [RolePermissionUpsertWithWhereUniqueNestedInput!]
}

input RolePermissionUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
  action: PermissionAction
  model: PermissionModel
}

input RolePermissionUpdateWithWhereUniqueNestedInput {
  where: RolePermissionWhereUniqueInput!
  data: RolePermissionUpdateDataInput!
}

input RolePermissionUpsertWithWhereUniqueNestedInput {
  where: RolePermissionWhereUniqueInput!
  update: RolePermissionUpdateDataInput!
  create: RolePermissionCreateInput!
}

input RolePermissionWhereInput {
  """Logical AND on all given filters."""
  AND: [RolePermissionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RolePermissionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RolePermissionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  action: PermissionAction

  """All values that are not equal to given value."""
  action_not: PermissionAction

  """All values that are contained in given list."""
  action_in: [PermissionAction!]

  """All values that are not contained in given list."""
  action_not_in: [PermissionAction!]
  model: PermissionModel

  """All values that are not equal to given value."""
  model_not: PermissionModel

  """All values that are contained in given list."""
  model_in: [PermissionModel!]

  """All values that are not contained in given list."""
  model_not_in: [PermissionModel!]
}

input RolePermissionWhereUniqueInput {
  id: ID
}

type RolePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  name: String!
  description: String
}

type RoleSubscriptionPayload {
  mutation: MutationType!
  node: Role
  updatedFields: [String!]
  previousValues: RolePreviousValues
}

input RoleSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RoleSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoleSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoleSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RoleWhereInput
}

input RoleUpdateInput {
  deletedAt: DateTime
  note: String
  name: String
  description: String
  permissions: RolePermissionUpdateManyInput
  users: UserUpdateManyWithoutRoleInput
}

input RoleUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
  name: String
  description: String
}

input RoleUpdateOneRequiredWithoutUsersInput {
  create: RoleCreateWithoutUsersInput
  connect: RoleWhereUniqueInput
  update: RoleUpdateWithoutUsersDataInput
  upsert: RoleUpsertWithoutUsersInput
}

input RoleUpdateWithoutUsersDataInput {
  deletedAt: DateTime
  note: String
  name: String
  description: String
  permissions: RolePermissionUpdateManyInput
}

input RoleUpsertWithoutUsersInput {
  update: RoleUpdateWithoutUsersDataInput!
  create: RoleCreateWithoutUsersInput!
}

input RoleWhereInput {
  """Logical AND on all given filters."""
  AND: [RoleWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoleWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoleWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  permissions_every: RolePermissionWhereInput
  permissions_some: RolePermissionWhereInput
  permissions_none: RolePermissionWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
}

input RoleWhereUniqueInput {
  id: ID
  name: String
}

type Store implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  name: String!
  storeNumber: String
  address: Address
  deliveryAddress: Address
  brand: Brand
  image: File
  email: String
  phone: String
  website: String
  contactPerson: String
  contactEmail: String
  currency: String
  size: String
  type: String
  language: Language
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

"""A connection to a list of items."""
type StoreConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [StoreEdge]!
  aggregate: AggregateStore!
}

input StoreCreateInput {
  deletedAt: DateTime
  note: String
  name: String!
  storeNumber: String
  email: String
  phone: String
  website: String
  contactPerson: String
  contactEmail: String
  currency: String
  size: String
  type: String
  address: AddressCreateOneInput
  deliveryAddress: AddressCreateOneInput
  brand: BrandCreateOneWithoutStoresInput
  image: FileCreateOneInput
  language: LanguageCreateOneInput
  orders: OrderCreateManyWithoutStoreInput
  files: FileCreateManyInput
  users: UserCreateManyWithoutStoresInput
}

input StoreCreateManyWithoutBrandInput {
  create: [StoreCreateWithoutBrandInput!]
  connect: [StoreWhereUniqueInput!]
}

input StoreCreateManyWithoutUsersInput {
  create: [StoreCreateWithoutUsersInput!]
  connect: [StoreWhereUniqueInput!]
}

input StoreCreateOneWithoutOrdersInput {
  create: StoreCreateWithoutOrdersInput
  connect: StoreWhereUniqueInput
}

input StoreCreateWithoutBrandInput {
  deletedAt: DateTime
  note: String
  name: String!
  storeNumber: String
  email: String
  phone: String
  website: String
  contactPerson: String
  contactEmail: String
  currency: String
  size: String
  type: String
  address: AddressCreateOneInput
  deliveryAddress: AddressCreateOneInput
  image: FileCreateOneInput
  language: LanguageCreateOneInput
  orders: OrderCreateManyWithoutStoreInput
  files: FileCreateManyInput
  users: UserCreateManyWithoutStoresInput
}

input StoreCreateWithoutOrdersInput {
  deletedAt: DateTime
  note: String
  name: String!
  storeNumber: String
  email: String
  phone: String
  website: String
  contactPerson: String
  contactEmail: String
  currency: String
  size: String
  type: String
  address: AddressCreateOneInput
  deliveryAddress: AddressCreateOneInput
  brand: BrandCreateOneWithoutStoresInput
  image: FileCreateOneInput
  language: LanguageCreateOneInput
  files: FileCreateManyInput
  users: UserCreateManyWithoutStoresInput
}

input StoreCreateWithoutUsersInput {
  deletedAt: DateTime
  note: String
  name: String!
  storeNumber: String
  email: String
  phone: String
  website: String
  contactPerson: String
  contactEmail: String
  currency: String
  size: String
  type: String
  address: AddressCreateOneInput
  deliveryAddress: AddressCreateOneInput
  brand: BrandCreateOneWithoutStoresInput
  image: FileCreateOneInput
  language: LanguageCreateOneInput
  orders: OrderCreateManyWithoutStoreInput
  files: FileCreateManyInput
}

"""An edge in a connection."""
type StoreEdge {
  """The item at the end of the edge."""
  node: Store!

  """A cursor for use in pagination."""
  cursor: String!
}

enum StoreOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
  name_ASC
  name_DESC
  storeNumber_ASC
  storeNumber_DESC
  email_ASC
  email_DESC
  phone_ASC
  phone_DESC
  website_ASC
  website_DESC
  contactPerson_ASC
  contactPerson_DESC
  contactEmail_ASC
  contactEmail_DESC
  currency_ASC
  currency_DESC
  size_ASC
  size_DESC
  type_ASC
  type_DESC
}

type StorePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  name: String!
  storeNumber: String
  email: String
  phone: String
  website: String
  contactPerson: String
  contactEmail: String
  currency: String
  size: String
  type: String
}

type StoreSubscriptionPayload {
  mutation: MutationType!
  node: Store
  updatedFields: [String!]
  previousValues: StorePreviousValues
}

input StoreSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [StoreSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [StoreSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StoreSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: StoreWhereInput
}

input StoreUpdateInput {
  deletedAt: DateTime
  note: String
  name: String
  storeNumber: String
  email: String
  phone: String
  website: String
  contactPerson: String
  contactEmail: String
  currency: String
  size: String
  type: String
  address: AddressUpdateOneInput
  deliveryAddress: AddressUpdateOneInput
  brand: BrandUpdateOneWithoutStoresInput
  image: FileUpdateOneInput
  language: LanguageUpdateOneInput
  orders: OrderUpdateManyWithoutStoreInput
  files: FileUpdateManyInput
  users: UserUpdateManyWithoutStoresInput
}

input StoreUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
  name: String
  storeNumber: String
  email: String
  phone: String
  website: String
  contactPerson: String
  contactEmail: String
  currency: String
  size: String
  type: String
}

input StoreUpdateManyWithoutBrandInput {
  create: [StoreCreateWithoutBrandInput!]
  connect: [StoreWhereUniqueInput!]
  disconnect: [StoreWhereUniqueInput!]
  delete: [StoreWhereUniqueInput!]
  update: [StoreUpdateWithWhereUniqueWithoutBrandInput!]
  upsert: [StoreUpsertWithWhereUniqueWithoutBrandInput!]
}

input StoreUpdateManyWithoutUsersInput {
  create: [StoreCreateWithoutUsersInput!]
  connect: [StoreWhereUniqueInput!]
  disconnect: [StoreWhereUniqueInput!]
  delete: [StoreWhereUniqueInput!]
  update: [StoreUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [StoreUpsertWithWhereUniqueWithoutUsersInput!]
}

input StoreUpdateOneRequiredWithoutOrdersInput {
  create: StoreCreateWithoutOrdersInput
  connect: StoreWhereUniqueInput
  update: StoreUpdateWithoutOrdersDataInput
  upsert: StoreUpsertWithoutOrdersInput
}

input StoreUpdateWithoutBrandDataInput {
  deletedAt: DateTime
  note: String
  name: String
  storeNumber: String
  email: String
  phone: String
  website: String
  contactPerson: String
  contactEmail: String
  currency: String
  size: String
  type: String
  address: AddressUpdateOneInput
  deliveryAddress: AddressUpdateOneInput
  image: FileUpdateOneInput
  language: LanguageUpdateOneInput
  orders: OrderUpdateManyWithoutStoreInput
  files: FileUpdateManyInput
  users: UserUpdateManyWithoutStoresInput
}

input StoreUpdateWithoutOrdersDataInput {
  deletedAt: DateTime
  note: String
  name: String
  storeNumber: String
  email: String
  phone: String
  website: String
  contactPerson: String
  contactEmail: String
  currency: String
  size: String
  type: String
  address: AddressUpdateOneInput
  deliveryAddress: AddressUpdateOneInput
  brand: BrandUpdateOneWithoutStoresInput
  image: FileUpdateOneInput
  language: LanguageUpdateOneInput
  files: FileUpdateManyInput
  users: UserUpdateManyWithoutStoresInput
}

input StoreUpdateWithoutUsersDataInput {
  deletedAt: DateTime
  note: String
  name: String
  storeNumber: String
  email: String
  phone: String
  website: String
  contactPerson: String
  contactEmail: String
  currency: String
  size: String
  type: String
  address: AddressUpdateOneInput
  deliveryAddress: AddressUpdateOneInput
  brand: BrandUpdateOneWithoutStoresInput
  image: FileUpdateOneInput
  language: LanguageUpdateOneInput
  orders: OrderUpdateManyWithoutStoreInput
  files: FileUpdateManyInput
}

input StoreUpdateWithWhereUniqueWithoutBrandInput {
  where: StoreWhereUniqueInput!
  data: StoreUpdateWithoutBrandDataInput!
}

input StoreUpdateWithWhereUniqueWithoutUsersInput {
  where: StoreWhereUniqueInput!
  data: StoreUpdateWithoutUsersDataInput!
}

input StoreUpsertWithoutOrdersInput {
  update: StoreUpdateWithoutOrdersDataInput!
  create: StoreCreateWithoutOrdersInput!
}

input StoreUpsertWithWhereUniqueWithoutBrandInput {
  where: StoreWhereUniqueInput!
  update: StoreUpdateWithoutBrandDataInput!
  create: StoreCreateWithoutBrandInput!
}

input StoreUpsertWithWhereUniqueWithoutUsersInput {
  where: StoreWhereUniqueInput!
  update: StoreUpdateWithoutUsersDataInput!
  create: StoreCreateWithoutUsersInput!
}

input StoreWhereInput {
  """Logical AND on all given filters."""
  AND: [StoreWhereInput!]

  """Logical OR on all given filters."""
  OR: [StoreWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StoreWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  storeNumber: String

  """All values that are not equal to given value."""
  storeNumber_not: String

  """All values that are contained in given list."""
  storeNumber_in: [String!]

  """All values that are not contained in given list."""
  storeNumber_not_in: [String!]

  """All values less than the given value."""
  storeNumber_lt: String

  """All values less than or equal the given value."""
  storeNumber_lte: String

  """All values greater than the given value."""
  storeNumber_gt: String

  """All values greater than or equal the given value."""
  storeNumber_gte: String

  """All values containing the given string."""
  storeNumber_contains: String

  """All values not containing the given string."""
  storeNumber_not_contains: String

  """All values starting with the given string."""
  storeNumber_starts_with: String

  """All values not starting with the given string."""
  storeNumber_not_starts_with: String

  """All values ending with the given string."""
  storeNumber_ends_with: String

  """All values not ending with the given string."""
  storeNumber_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  phone: String

  """All values that are not equal to given value."""
  phone_not: String

  """All values that are contained in given list."""
  phone_in: [String!]

  """All values that are not contained in given list."""
  phone_not_in: [String!]

  """All values less than the given value."""
  phone_lt: String

  """All values less than or equal the given value."""
  phone_lte: String

  """All values greater than the given value."""
  phone_gt: String

  """All values greater than or equal the given value."""
  phone_gte: String

  """All values containing the given string."""
  phone_contains: String

  """All values not containing the given string."""
  phone_not_contains: String

  """All values starting with the given string."""
  phone_starts_with: String

  """All values not starting with the given string."""
  phone_not_starts_with: String

  """All values ending with the given string."""
  phone_ends_with: String

  """All values not ending with the given string."""
  phone_not_ends_with: String
  website: String

  """All values that are not equal to given value."""
  website_not: String

  """All values that are contained in given list."""
  website_in: [String!]

  """All values that are not contained in given list."""
  website_not_in: [String!]

  """All values less than the given value."""
  website_lt: String

  """All values less than or equal the given value."""
  website_lte: String

  """All values greater than the given value."""
  website_gt: String

  """All values greater than or equal the given value."""
  website_gte: String

  """All values containing the given string."""
  website_contains: String

  """All values not containing the given string."""
  website_not_contains: String

  """All values starting with the given string."""
  website_starts_with: String

  """All values not starting with the given string."""
  website_not_starts_with: String

  """All values ending with the given string."""
  website_ends_with: String

  """All values not ending with the given string."""
  website_not_ends_with: String
  contactPerson: String

  """All values that are not equal to given value."""
  contactPerson_not: String

  """All values that are contained in given list."""
  contactPerson_in: [String!]

  """All values that are not contained in given list."""
  contactPerson_not_in: [String!]

  """All values less than the given value."""
  contactPerson_lt: String

  """All values less than or equal the given value."""
  contactPerson_lte: String

  """All values greater than the given value."""
  contactPerson_gt: String

  """All values greater than or equal the given value."""
  contactPerson_gte: String

  """All values containing the given string."""
  contactPerson_contains: String

  """All values not containing the given string."""
  contactPerson_not_contains: String

  """All values starting with the given string."""
  contactPerson_starts_with: String

  """All values not starting with the given string."""
  contactPerson_not_starts_with: String

  """All values ending with the given string."""
  contactPerson_ends_with: String

  """All values not ending with the given string."""
  contactPerson_not_ends_with: String
  contactEmail: String

  """All values that are not equal to given value."""
  contactEmail_not: String

  """All values that are contained in given list."""
  contactEmail_in: [String!]

  """All values that are not contained in given list."""
  contactEmail_not_in: [String!]

  """All values less than the given value."""
  contactEmail_lt: String

  """All values less than or equal the given value."""
  contactEmail_lte: String

  """All values greater than the given value."""
  contactEmail_gt: String

  """All values greater than or equal the given value."""
  contactEmail_gte: String

  """All values containing the given string."""
  contactEmail_contains: String

  """All values not containing the given string."""
  contactEmail_not_contains: String

  """All values starting with the given string."""
  contactEmail_starts_with: String

  """All values not starting with the given string."""
  contactEmail_not_starts_with: String

  """All values ending with the given string."""
  contactEmail_ends_with: String

  """All values not ending with the given string."""
  contactEmail_not_ends_with: String
  currency: String

  """All values that are not equal to given value."""
  currency_not: String

  """All values that are contained in given list."""
  currency_in: [String!]

  """All values that are not contained in given list."""
  currency_not_in: [String!]

  """All values less than the given value."""
  currency_lt: String

  """All values less than or equal the given value."""
  currency_lte: String

  """All values greater than the given value."""
  currency_gt: String

  """All values greater than or equal the given value."""
  currency_gte: String

  """All values containing the given string."""
  currency_contains: String

  """All values not containing the given string."""
  currency_not_contains: String

  """All values starting with the given string."""
  currency_starts_with: String

  """All values not starting with the given string."""
  currency_not_starts_with: String

  """All values ending with the given string."""
  currency_ends_with: String

  """All values not ending with the given string."""
  currency_not_ends_with: String
  size: String

  """All values that are not equal to given value."""
  size_not: String

  """All values that are contained in given list."""
  size_in: [String!]

  """All values that are not contained in given list."""
  size_not_in: [String!]

  """All values less than the given value."""
  size_lt: String

  """All values less than or equal the given value."""
  size_lte: String

  """All values greater than the given value."""
  size_gt: String

  """All values greater than or equal the given value."""
  size_gte: String

  """All values containing the given string."""
  size_contains: String

  """All values not containing the given string."""
  size_not_contains: String

  """All values starting with the given string."""
  size_starts_with: String

  """All values not starting with the given string."""
  size_not_starts_with: String

  """All values ending with the given string."""
  size_ends_with: String

  """All values not ending with the given string."""
  size_not_ends_with: String
  type: String

  """All values that are not equal to given value."""
  type_not: String

  """All values that are contained in given list."""
  type_in: [String!]

  """All values that are not contained in given list."""
  type_not_in: [String!]

  """All values less than the given value."""
  type_lt: String

  """All values less than or equal the given value."""
  type_lte: String

  """All values greater than the given value."""
  type_gt: String

  """All values greater than or equal the given value."""
  type_gte: String

  """All values containing the given string."""
  type_contains: String

  """All values not containing the given string."""
  type_not_contains: String

  """All values starting with the given string."""
  type_starts_with: String

  """All values not starting with the given string."""
  type_not_starts_with: String

  """All values ending with the given string."""
  type_ends_with: String

  """All values not ending with the given string."""
  type_not_ends_with: String
  address: AddressWhereInput
  deliveryAddress: AddressWhereInput
  brand: BrandWhereInput
  image: FileWhereInput
  language: LanguageWhereInput
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
  files_every: FileWhereInput
  files_some: FileWhereInput
  files_none: FileWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
}

input StoreWhereUniqueInput {
  id: ID
}

type Subscription {
  store(where: StoreSubscriptionWhereInput): StoreSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
  productCategory(where: ProductCategorySubscriptionWhereInput): ProductCategorySubscriptionPayload
  properties(where: PropertiesSubscriptionWhereInput): PropertiesSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  supplier(where: SupplierSubscriptionWhereInput): SupplierSubscriptionPayload
  supportPage(where: SupportPageSubscriptionWhereInput): SupportPageSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  orderTemplate(where: OrderTemplateSubscriptionWhereInput): OrderTemplateSubscriptionPayload
  filterOptions(where: FilterOptionsSubscriptionWhereInput): FilterOptionsSubscriptionPayload
  orderItem(where: OrderItemSubscriptionWhereInput): OrderItemSubscriptionPayload
  rolePermission(where: RolePermissionSubscriptionWhereInput): RolePermissionSubscriptionPayload
  brand(where: BrandSubscriptionWhereInput): BrandSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  language(where: LanguageSubscriptionWhereInput): LanguageSubscriptionPayload
  address(where: AddressSubscriptionWhereInput): AddressSubscriptionPayload
}

type Supplier implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  name: String!
  products(where: PropertiesWhereInput, orderBy: PropertiesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Properties!]
  address: Address!
}

"""A connection to a list of items."""
type SupplierConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SupplierEdge]!
  aggregate: AggregateSupplier!
}

input SupplierCreateInput {
  deletedAt: DateTime
  note: String
  name: String!
  products: PropertiesCreateManyWithoutSupplierInput
  address: AddressCreateOneInput!
}

input SupplierCreateOneWithoutProductsInput {
  create: SupplierCreateWithoutProductsInput
  connect: SupplierWhereUniqueInput
}

input SupplierCreateWithoutProductsInput {
  deletedAt: DateTime
  note: String
  name: String!
  address: AddressCreateOneInput!
}

"""An edge in a connection."""
type SupplierEdge {
  """The item at the end of the edge."""
  node: Supplier!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SupplierOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
  name_ASC
  name_DESC
}

type SupplierPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  name: String!
}

type SupplierSubscriptionPayload {
  mutation: MutationType!
  node: Supplier
  updatedFields: [String!]
  previousValues: SupplierPreviousValues
}

input SupplierSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SupplierSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SupplierSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SupplierSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SupplierWhereInput
}

input SupplierUpdateInput {
  deletedAt: DateTime
  note: String
  name: String
  products: PropertiesUpdateManyWithoutSupplierInput
  address: AddressUpdateOneRequiredInput
}

input SupplierUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
  name: String
}

input SupplierUpdateOneWithoutProductsInput {
  create: SupplierCreateWithoutProductsInput
  connect: SupplierWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: SupplierUpdateWithoutProductsDataInput
  upsert: SupplierUpsertWithoutProductsInput
}

input SupplierUpdateWithoutProductsDataInput {
  deletedAt: DateTime
  note: String
  name: String
  address: AddressUpdateOneRequiredInput
}

input SupplierUpsertWithoutProductsInput {
  update: SupplierUpdateWithoutProductsDataInput!
  create: SupplierCreateWithoutProductsInput!
}

input SupplierWhereInput {
  """Logical AND on all given filters."""
  AND: [SupplierWhereInput!]

  """Logical OR on all given filters."""
  OR: [SupplierWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SupplierWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  products_every: PropertiesWhereInput
  products_some: PropertiesWhereInput
  products_none: PropertiesWhereInput
  address: AddressWhereInput
}

input SupplierWhereUniqueInput {
  id: ID
}

type SupportPage implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  title: String!
  content: String!
}

"""A connection to a list of items."""
type SupportPageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SupportPageEdge]!
  aggregate: AggregateSupportPage!
}

input SupportPageCreateInput {
  deletedAt: DateTime
  note: String
  title: String!
  content: String!
}

"""An edge in a connection."""
type SupportPageEdge {
  """The item at the end of the edge."""
  node: SupportPage!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SupportPageOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
}

type SupportPagePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  title: String!
  content: String!
}

type SupportPageSubscriptionPayload {
  mutation: MutationType!
  node: SupportPage
  updatedFields: [String!]
  previousValues: SupportPagePreviousValues
}

input SupportPageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SupportPageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SupportPageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SupportPageSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SupportPageWhereInput
}

input SupportPageUpdateInput {
  deletedAt: DateTime
  note: String
  title: String
  content: String
}

input SupportPageUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
  title: String
  content: String
}

input SupportPageWhereInput {
  """Logical AND on all given filters."""
  AND: [SupportPageWhereInput!]

  """Logical OR on all given filters."""
  OR: [SupportPageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SupportPageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
}

input SupportPageWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  sendNotificationToEmail: Boolean!
  phoneNumber: String
  role: Role!
  brand: Brand!
  contactPersonToBrand(where: BrandWhereInput, orderBy: BrandOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Brand!]
  stores(where: StoreWhereInput, orderBy: StoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Store!]
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification!]
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  deletedAt: DateTime
  note: String
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  sendNotificationToEmail: Boolean
  phoneNumber: String
  role: RoleCreateOneWithoutUsersInput!
  brand: BrandCreateOneWithoutUsersInput!
  contactPersonToBrand: BrandCreateManyWithoutContactPersonInput
  stores: StoreCreateManyWithoutUsersInput
  notifications: NotificationCreateManyWithoutUserInput
  orders: OrderCreateManyWithoutCreatedByInput
}

input UserCreateManyWithoutBrandInput {
  create: [UserCreateWithoutBrandInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutRoleInput {
  create: [UserCreateWithoutRoleInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutStoresInput {
  create: [UserCreateWithoutStoresInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutContactPersonToBrandInput {
  create: UserCreateWithoutContactPersonToBrandInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBrandInput {
  deletedAt: DateTime
  note: String
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  sendNotificationToEmail: Boolean
  phoneNumber: String
  role: RoleCreateOneWithoutUsersInput!
  contactPersonToBrand: BrandCreateManyWithoutContactPersonInput
  stores: StoreCreateManyWithoutUsersInput
  notifications: NotificationCreateManyWithoutUserInput
  orders: OrderCreateManyWithoutCreatedByInput
}

input UserCreateWithoutContactPersonToBrandInput {
  deletedAt: DateTime
  note: String
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  sendNotificationToEmail: Boolean
  phoneNumber: String
  role: RoleCreateOneWithoutUsersInput!
  brand: BrandCreateOneWithoutUsersInput!
  stores: StoreCreateManyWithoutUsersInput
  notifications: NotificationCreateManyWithoutUserInput
  orders: OrderCreateManyWithoutCreatedByInput
}

input UserCreateWithoutNotificationsInput {
  deletedAt: DateTime
  note: String
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  sendNotificationToEmail: Boolean
  phoneNumber: String
  role: RoleCreateOneWithoutUsersInput!
  brand: BrandCreateOneWithoutUsersInput!
  contactPersonToBrand: BrandCreateManyWithoutContactPersonInput
  stores: StoreCreateManyWithoutUsersInput
  orders: OrderCreateManyWithoutCreatedByInput
}

input UserCreateWithoutOrdersInput {
  deletedAt: DateTime
  note: String
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  sendNotificationToEmail: Boolean
  phoneNumber: String
  role: RoleCreateOneWithoutUsersInput!
  brand: BrandCreateOneWithoutUsersInput!
  contactPersonToBrand: BrandCreateManyWithoutContactPersonInput
  stores: StoreCreateManyWithoutUsersInput
  notifications: NotificationCreateManyWithoutUserInput
}

input UserCreateWithoutRoleInput {
  deletedAt: DateTime
  note: String
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  sendNotificationToEmail: Boolean
  phoneNumber: String
  brand: BrandCreateOneWithoutUsersInput!
  contactPersonToBrand: BrandCreateManyWithoutContactPersonInput
  stores: StoreCreateManyWithoutUsersInput
  notifications: NotificationCreateManyWithoutUserInput
  orders: OrderCreateManyWithoutCreatedByInput
}

input UserCreateWithoutStoresInput {
  deletedAt: DateTime
  note: String
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  sendNotificationToEmail: Boolean
  phoneNumber: String
  role: RoleCreateOneWithoutUsersInput!
  brand: BrandCreateOneWithoutUsersInput!
  contactPersonToBrand: BrandCreateManyWithoutContactPersonInput
  notifications: NotificationCreateManyWithoutUserInput
  orders: OrderCreateManyWithoutCreatedByInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  note_ASC
  note_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  sendNotificationToEmail_ASC
  sendNotificationToEmail_DESC
  phoneNumber_ASC
  phoneNumber_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  note: String
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  sendNotificationToEmail: Boolean!
  phoneNumber: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  deletedAt: DateTime
  note: String
  email: String
  password: String
  firstName: String
  lastName: String
  sendNotificationToEmail: Boolean
  phoneNumber: String
  role: RoleUpdateOneRequiredWithoutUsersInput
  brand: BrandUpdateOneRequiredWithoutUsersInput
  contactPersonToBrand: BrandUpdateManyWithoutContactPersonInput
  stores: StoreUpdateManyWithoutUsersInput
  notifications: NotificationUpdateManyWithoutUserInput
  orders: OrderUpdateManyWithoutCreatedByInput
}

input UserUpdateInput {
  deletedAt: DateTime
  note: String
  email: String
  password: String
  firstName: String
  lastName: String
  sendNotificationToEmail: Boolean
  phoneNumber: String
  role: RoleUpdateOneRequiredWithoutUsersInput
  brand: BrandUpdateOneRequiredWithoutUsersInput
  contactPersonToBrand: BrandUpdateManyWithoutContactPersonInput
  stores: StoreUpdateManyWithoutUsersInput
  notifications: NotificationUpdateManyWithoutUserInput
  orders: OrderUpdateManyWithoutCreatedByInput
}

input UserUpdateManyMutationInput {
  deletedAt: DateTime
  note: String
  email: String
  password: String
  firstName: String
  lastName: String
  sendNotificationToEmail: Boolean
  phoneNumber: String
}

input UserUpdateManyWithoutBrandInput {
  create: [UserCreateWithoutBrandInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutBrandInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutBrandInput!]
}

input UserUpdateManyWithoutRoleInput {
  create: [UserCreateWithoutRoleInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutRoleInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutRoleInput!]
}

input UserUpdateManyWithoutStoresInput {
  create: [UserCreateWithoutStoresInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutStoresInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutStoresInput!]
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneRequiredWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutNotificationsDataInput
  upsert: UserUpsertWithoutNotificationsInput
}

input UserUpdateOneWithoutContactPersonToBrandInput {
  create: UserCreateWithoutContactPersonToBrandInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutContactPersonToBrandDataInput
  upsert: UserUpsertWithoutContactPersonToBrandInput
}

input UserUpdateOneWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutOrdersDataInput
  upsert: UserUpsertWithoutOrdersInput
}

input UserUpdateWithoutBrandDataInput {
  deletedAt: DateTime
  note: String
  email: String
  password: String
  firstName: String
  lastName: String
  sendNotificationToEmail: Boolean
  phoneNumber: String
  role: RoleUpdateOneRequiredWithoutUsersInput
  contactPersonToBrand: BrandUpdateManyWithoutContactPersonInput
  stores: StoreUpdateManyWithoutUsersInput
  notifications: NotificationUpdateManyWithoutUserInput
  orders: OrderUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutContactPersonToBrandDataInput {
  deletedAt: DateTime
  note: String
  email: String
  password: String
  firstName: String
  lastName: String
  sendNotificationToEmail: Boolean
  phoneNumber: String
  role: RoleUpdateOneRequiredWithoutUsersInput
  brand: BrandUpdateOneRequiredWithoutUsersInput
  stores: StoreUpdateManyWithoutUsersInput
  notifications: NotificationUpdateManyWithoutUserInput
  orders: OrderUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutNotificationsDataInput {
  deletedAt: DateTime
  note: String
  email: String
  password: String
  firstName: String
  lastName: String
  sendNotificationToEmail: Boolean
  phoneNumber: String
  role: RoleUpdateOneRequiredWithoutUsersInput
  brand: BrandUpdateOneRequiredWithoutUsersInput
  contactPersonToBrand: BrandUpdateManyWithoutContactPersonInput
  stores: StoreUpdateManyWithoutUsersInput
  orders: OrderUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutOrdersDataInput {
  deletedAt: DateTime
  note: String
  email: String
  password: String
  firstName: String
  lastName: String
  sendNotificationToEmail: Boolean
  phoneNumber: String
  role: RoleUpdateOneRequiredWithoutUsersInput
  brand: BrandUpdateOneRequiredWithoutUsersInput
  contactPersonToBrand: BrandUpdateManyWithoutContactPersonInput
  stores: StoreUpdateManyWithoutUsersInput
  notifications: NotificationUpdateManyWithoutUserInput
}

input UserUpdateWithoutRoleDataInput {
  deletedAt: DateTime
  note: String
  email: String
  password: String
  firstName: String
  lastName: String
  sendNotificationToEmail: Boolean
  phoneNumber: String
  brand: BrandUpdateOneRequiredWithoutUsersInput
  contactPersonToBrand: BrandUpdateManyWithoutContactPersonInput
  stores: StoreUpdateManyWithoutUsersInput
  notifications: NotificationUpdateManyWithoutUserInput
  orders: OrderUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutStoresDataInput {
  deletedAt: DateTime
  note: String
  email: String
  password: String
  firstName: String
  lastName: String
  sendNotificationToEmail: Boolean
  phoneNumber: String
  role: RoleUpdateOneRequiredWithoutUsersInput
  brand: BrandUpdateOneRequiredWithoutUsersInput
  contactPersonToBrand: BrandUpdateManyWithoutContactPersonInput
  notifications: NotificationUpdateManyWithoutUserInput
  orders: OrderUpdateManyWithoutCreatedByInput
}

input UserUpdateWithWhereUniqueWithoutBrandInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutBrandDataInput!
}

input UserUpdateWithWhereUniqueWithoutRoleInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutRoleDataInput!
}

input UserUpdateWithWhereUniqueWithoutStoresInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutStoresDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutContactPersonToBrandInput {
  update: UserUpdateWithoutContactPersonToBrandDataInput!
  create: UserCreateWithoutContactPersonToBrandInput!
}

input UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput!
  create: UserCreateWithoutNotificationsInput!
}

input UserUpsertWithoutOrdersInput {
  update: UserUpdateWithoutOrdersDataInput!
  create: UserCreateWithoutOrdersInput!
}

input UserUpsertWithWhereUniqueWithoutBrandInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutBrandDataInput!
  create: UserCreateWithoutBrandInput!
}

input UserUpsertWithWhereUniqueWithoutRoleInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutRoleDataInput!
  create: UserCreateWithoutRoleInput!
}

input UserUpsertWithWhereUniqueWithoutStoresInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutStoresDataInput!
  create: UserCreateWithoutStoresInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  sendNotificationToEmail: Boolean

  """All values that are not equal to given value."""
  sendNotificationToEmail_not: Boolean
  phoneNumber: String

  """All values that are not equal to given value."""
  phoneNumber_not: String

  """All values that are contained in given list."""
  phoneNumber_in: [String!]

  """All values that are not contained in given list."""
  phoneNumber_not_in: [String!]

  """All values less than the given value."""
  phoneNumber_lt: String

  """All values less than or equal the given value."""
  phoneNumber_lte: String

  """All values greater than the given value."""
  phoneNumber_gt: String

  """All values greater than or equal the given value."""
  phoneNumber_gte: String

  """All values containing the given string."""
  phoneNumber_contains: String

  """All values not containing the given string."""
  phoneNumber_not_contains: String

  """All values starting with the given string."""
  phoneNumber_starts_with: String

  """All values not starting with the given string."""
  phoneNumber_not_starts_with: String

  """All values ending with the given string."""
  phoneNumber_ends_with: String

  """All values not ending with the given string."""
  phoneNumber_not_ends_with: String
  role: RoleWhereInput
  brand: BrandWhereInput
  contactPersonToBrand_every: BrandWhereInput
  contactPersonToBrand_some: BrandWhereInput
  contactPersonToBrand_none: BrandWhereInput
  stores_every: StoreWhereInput
  stores_some: StoreWhereInput
  stores_none: StoreWhereInput
  notifications_every: NotificationWhereInput
  notifications_some: NotificationWhereInput
  notifications_none: NotificationWhereInput
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

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

export type OrderStatus =   'WAITING_FOR_APPROVAL' |
  'PENDING' |
  'RECEIVED' |
  'DISPATCHED' |
  'DELIVERED' |
  'INSTALLED' |
  'CANCELLED'

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

export type AddressOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC' |
  'countryCode_ASC' |
  'countryCode_DESC' |
  'country_ASC' |
  'country_DESC' |
  'city_ASC' |
  'city_DESC' |
  'street_ASC' |
  'street_DESC' |
  'number_ASC' |
  'number_DESC' |
  'postalCode_ASC' |
  'postalCode_DESC' |
  'addition_ASC' |
  'addition_DESC' |
  'longtitude_ASC' |
  'longtitude_DESC' |
  'latitude_ASC' |
  'latitude_DESC'

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

export type FilterOptionsOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'note_ASC' |
  'note_DESC' |
  'type_ASC' |
  'type_DESC' |
  'storeType_ASC' |
  'storeType_DESC' |
  'size_ASC' |
  'size_DESC' |
  'currency_ASC' |
  'currency_DESC'

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

export type FilterOptionsType =   'ALL' |
  'ZERO_OR_ONE' |
  'ONE' |
  'ZERO_OR_MORE' |
  'ONE_OR_MORE'

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

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

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

export type PermissionAction =   'CREATE_OWN' |
  'CREATE_ALL' |
  'UPDATE_OWN' |
  'UPDATE_ALL' |
  'DELETE_OWN' |
  'DELETE_ALL' |
  'VIEW_OWN' |
  'VIEW_ALL' |
  'ALL'

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

export interface FileUpdateWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput
  data: FileUpdateDataInput
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

export interface FileUpsertWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput
  update: FileUpdateDataInput
  create: FileCreateInput
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

export interface BrandUpsertWithoutUsersInput {
  update: BrandUpdateWithoutUsersDataInput
  create: BrandCreateWithoutUsersInput
}

export interface FilterOptionsCreateOneInput {
  create?: FilterOptionsCreateInput
  connect?: FilterOptionsWhereUniqueInput
}

export interface SupplierUpdateOneWithoutProductsInput {
  create?: SupplierCreateWithoutProductsInput
  connect?: SupplierWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: SupplierUpdateWithoutProductsDataInput
  upsert?: SupplierUpsertWithoutProductsInput
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

export interface LanguageSubscriptionWhereInput {
  AND?: LanguageSubscriptionWhereInput[] | LanguageSubscriptionWhereInput
  OR?: LanguageSubscriptionWhereInput[] | LanguageSubscriptionWhereInput
  NOT?: LanguageSubscriptionWhereInput[] | LanguageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LanguageWhereInput
}

export interface BrandCreateOneWithoutOrderTemplatesInput {
  create?: BrandCreateWithoutOrderTemplatesInput
  connect?: BrandWhereUniqueInput
}

export interface ProductSubscriptionWhereInput {
  AND?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  OR?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  NOT?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProductWhereInput
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

export interface BrandSubscriptionWhereInput {
  AND?: BrandSubscriptionWhereInput[] | BrandSubscriptionWhereInput
  OR?: BrandSubscriptionWhereInput[] | BrandSubscriptionWhereInput
  NOT?: BrandSubscriptionWhereInput[] | BrandSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BrandWhereInput
}

export interface OrderTemplateCreateOneWithoutChildrenInput {
  create?: OrderTemplateCreateWithoutChildrenInput
  connect?: OrderTemplateWhereUniqueInput
}

export interface RolePermissionSubscriptionWhereInput {
  AND?: RolePermissionSubscriptionWhereInput[] | RolePermissionSubscriptionWhereInput
  OR?: RolePermissionSubscriptionWhereInput[] | RolePermissionSubscriptionWhereInput
  NOT?: RolePermissionSubscriptionWhereInput[] | RolePermissionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RolePermissionWhereInput
}

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

export interface OrderItemSubscriptionWhereInput {
  AND?: OrderItemSubscriptionWhereInput[] | OrderItemSubscriptionWhereInput
  OR?: OrderItemSubscriptionWhereInput[] | OrderItemSubscriptionWhereInput
  NOT?: OrderItemSubscriptionWhereInput[] | OrderItemSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OrderItemWhereInput
}

export interface ProductCreateOneInput {
  create?: ProductCreateInput
  connect?: ProductWhereUniqueInput
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

export interface ProductCreateInput {
  deletedAt?: DateTime
  note?: String
  stock?: Int
  brand?: BrandCreateOneInput
  properties: PropertiesCreateOneWithoutProductInput
  productCategories?: ProductCategoryCreateOneWithoutProductsInput
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

export interface PropertiesCreateOneWithoutProductInput {
  create?: PropertiesCreateWithoutProductInput
  connect?: PropertiesWhereUniqueInput
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

export interface SupplierSubscriptionWhereInput {
  AND?: SupplierSubscriptionWhereInput[] | SupplierSubscriptionWhereInput
  OR?: SupplierSubscriptionWhereInput[] | SupplierSubscriptionWhereInput
  NOT?: SupplierSubscriptionWhereInput[] | SupplierSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SupplierWhereInput
}

export interface OrderTemplateCreateOneWithoutPropertiesInput {
  create?: OrderTemplateCreateWithoutPropertiesInput
  connect?: OrderTemplateWhereUniqueInput
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

export interface CommentSubscriptionWhereInput {
  AND?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  OR?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  NOT?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CommentWhereInput
}

export interface OrderTemplateCreateManyWithoutParentInput {
  create?: OrderTemplateCreateWithoutParentInput[] | OrderTemplateCreateWithoutParentInput
  connect?: OrderTemplateWhereUniqueInput[] | OrderTemplateWhereUniqueInput
}

export interface OrderSubscriptionWhereInput {
  AND?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput
  OR?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput
  NOT?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OrderWhereInput
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

export interface ProductCategorySubscriptionWhereInput {
  AND?: ProductCategorySubscriptionWhereInput[] | ProductCategorySubscriptionWhereInput
  OR?: ProductCategorySubscriptionWhereInput[] | ProductCategorySubscriptionWhereInput
  NOT?: ProductCategorySubscriptionWhereInput[] | ProductCategorySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProductCategoryWhereInput
}

export interface ProductCategoryCreateOneWithoutProductsInput {
  create?: ProductCategoryCreateWithoutProductsInput
  connect?: ProductCategoryWhereUniqueInput
}

export interface RoleSubscriptionWhereInput {
  AND?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput
  OR?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput
  NOT?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RoleWhereInput
}

export interface ProductCategoryCreateWithoutProductsInput {
  deletedAt?: DateTime
  note?: String
  properties: PropertiesCreateOneWithoutProductCategoryInput
  brand?: BrandCreateOneWithoutProductCategoriesInput
  parent?: ProductCategoryCreateOneWithoutChildrenInput
  children?: ProductCategoryCreateManyWithoutParentInput
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

export interface ProductCategoryCreateOneWithoutChildrenInput {
  create?: ProductCategoryCreateWithoutChildrenInput
  connect?: ProductCategoryWhereUniqueInput
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

export interface ProductCategoryCreateWithoutChildrenInput {
  deletedAt?: DateTime
  note?: String
  properties: PropertiesCreateOneWithoutProductCategoryInput
  brand?: BrandCreateOneWithoutProductCategoriesInput
  parent?: ProductCategoryCreateOneWithoutChildrenInput
  products?: ProductCreateManyWithoutProductCategoriesInput
}

export interface AddressUpdateManyMutationInput {
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

export interface ProductCreateManyWithoutProductCategoriesInput {
  create?: ProductCreateWithoutProductCategoriesInput[] | ProductCreateWithoutProductCategoriesInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
}

export interface LanguageUpdateManyMutationInput {
  deletedAt?: DateTime
  note?: String
  isoCode?: String
  articleCode?: String
  name?: String
}

export interface ProductCreateWithoutProductCategoriesInput {
  deletedAt?: DateTime
  note?: String
  stock?: Int
  brand?: BrandCreateOneInput
  properties: PropertiesCreateOneWithoutProductInput
}

export interface RoleWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface ProductCategoryCreateManyWithoutParentInput {
  create?: ProductCategoryCreateWithoutParentInput[] | ProductCategoryCreateWithoutParentInput
  connect?: ProductCategoryWhereUniqueInput[] | ProductCategoryWhereUniqueInput
}

export interface PropertiesWhereUniqueInput {
  id?: ID_Input
}

export interface ProductCategoryCreateWithoutParentInput {
  deletedAt?: DateTime
  note?: String
  properties: PropertiesCreateOneWithoutProductCategoryInput
  brand?: BrandCreateOneWithoutProductCategoriesInput
  children?: ProductCategoryCreateManyWithoutParentInput
  products?: ProductCreateManyWithoutProductCategoriesInput
}

export interface CommentWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateOneWithoutOrdersInput {
  create?: UserCreateWithoutOrdersInput
  connect?: UserWhereUniqueInput
}

export interface SupportPageWhereUniqueInput {
  id?: ID_Input
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

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface RoleCreateInput {
  deletedAt?: DateTime
  note?: String
  name: String
  description?: String
  permissions?: RolePermissionCreateManyInput
  users?: UserCreateManyWithoutRoleInput
}

export interface FilterOptionsWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateManyWithoutRoleInput {
  create?: UserCreateWithoutRoleInput[] | UserCreateWithoutRoleInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface RolePermissionWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateWithoutRoleInput {
  deletedAt?: DateTime
  note?: String
  email: String
  password: String
  firstName: String
  lastName: String
  sendNotificationToEmail?: Boolean
  phoneNumber?: String
  brand: BrandCreateOneWithoutUsersInput
  contactPersonToBrand?: BrandCreateManyWithoutContactPersonInput
  stores?: StoreCreateManyWithoutUsersInput
  notifications?: NotificationCreateManyWithoutUserInput
  orders?: OrderCreateManyWithoutCreatedByInput
}

export interface FileWhereUniqueInput {
  id?: ID_Input
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

export interface LanguageWhereUniqueInput {
  id?: ID_Input
  isoCode?: String
  articleCode?: String
}

export interface PropertiesCreateInput {
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
  orderTemplate?: OrderTemplateCreateOneWithoutPropertiesInput
}

export interface ProductUpdateManyMutationInput {
  deletedAt?: DateTime
  note?: String
  stock?: Int
}

export interface OrderCreateInput {
  deletedAt?: DateTime
  note?: String
  orderNumber?: String
  poNumber?: String
  trackAndTraceCode?: String
  status: OrderStatus
  orderedAt?: DateTime
  store: StoreCreateOneWithoutOrdersInput
  comments?: CommentCreateManyWithoutOrderInput
  createdBy?: UserCreateOneWithoutOrdersInput
  items?: OrderItemCreateManyInput
  address?: AddressCreateOneInput
}

export interface BrandUpdateManyMutationInput {
  deletedAt?: DateTime
  note?: String
  domain?: String
  name?: String
  primaryColor?: String
  secondaryColor?: String
  textColor?: String
}

export interface CommentCreateInput {
  deletedAt?: DateTime
  note?: String
  content?: String
  user: UserCreateOneInput
  order: OrderCreateOneWithoutCommentsInput
}

export interface OrderItemUpdateManyMutationInput {
  deletedAt?: DateTime
  note?: String
  name?: String
  amount?: Int
  price?: Int
  currency?: String
}

export interface OrderCreateOneWithoutCommentsInput {
  create?: OrderCreateWithoutCommentsInput
  connect?: OrderWhereUniqueInput
}

export interface OrderTemplateUpdateManyMutationInput {
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

export interface OrderCreateWithoutCommentsInput {
  deletedAt?: DateTime
  note?: String
  orderNumber?: String
  poNumber?: String
  trackAndTraceCode?: String
  status: OrderStatus
  orderedAt?: DateTime
  store: StoreCreateOneWithoutOrdersInput
  createdBy?: UserCreateOneWithoutOrdersInput
  items?: OrderItemCreateManyInput
  address?: AddressCreateOneInput
}

export interface NotificationUpdateManyMutationInput {
  deletedAt?: DateTime
  note?: String
  title?: String
  content?: String
  readAt?: DateTime
  link?: String
}

export interface SupplierCreateInput {
  deletedAt?: DateTime
  note?: String
  name: String
  products?: PropertiesCreateManyWithoutSupplierInput
  address: AddressCreateOneInput
}

export interface SupplierUpdateManyMutationInput {
  deletedAt?: DateTime
  note?: String
  name?: String
}

export interface PropertiesCreateManyWithoutSupplierInput {
  create?: PropertiesCreateWithoutSupplierInput[] | PropertiesCreateWithoutSupplierInput
  connect?: PropertiesWhereUniqueInput[] | PropertiesWhereUniqueInput
}

export interface OrderUpdateManyMutationInput {
  deletedAt?: DateTime
  note?: String
  orderNumber?: String
  poNumber?: String
  trackAndTraceCode?: String
  status?: OrderStatus
  orderedAt?: DateTime
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

export interface ProductCategoryUpdateManyMutationInput {
  deletedAt?: DateTime
  note?: String
}

export interface SupportPageCreateInput {
  deletedAt?: DateTime
  note?: String
  title: String
  content: String
}

export interface StoreUpdateManyMutationInput {
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
}

export interface NotificationCreateInput {
  deletedAt?: DateTime
  note?: String
  title: String
  content: String
  readAt?: DateTime
  link?: String
  user: UserCreateOneWithoutNotificationsInput
}

export interface LanguageUpdateInput {
  deletedAt?: DateTime
  note?: String
  isoCode?: String
  articleCode?: String
  name?: String
}

export interface UserCreateOneWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
}

export interface FileUpdateInput {
  deletedAt?: DateTime
  note?: String
  originalName?: String
  contentType?: String
  mimeType?: String
  bucket?: String
  key?: String
  location?: String
}

export interface UserCreateWithoutNotificationsInput {
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
  orders?: OrderCreateManyWithoutCreatedByInput
}

export interface RolePermissionUpdateInput {
  deletedAt?: DateTime
  note?: String
  action?: PermissionAction
  model?: PermissionModel
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

export interface FilterOptionsUpdateInput {
  deletedAt?: DateTime
  note?: String
  type?: FilterOptionsType
  storeType?: String
  size?: String
  currency?: String
  language?: LanguageUpdateOneInput
}

export interface AddressUpdateOneInput {
  create?: AddressCreateInput
  connect?: AddressWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: AddressUpdateDataInput
  upsert?: AddressUpsertNestedInput
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

export interface UserUpdateWithoutNotificationsDataInput {
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
  orders?: OrderUpdateManyWithoutCreatedByInput
}

export interface AddressUpsertNestedInput {
  update: AddressUpdateDataInput
  create: AddressCreateInput
}

export interface NotificationUpdateInput {
  deletedAt?: DateTime
  note?: String
  title?: String
  content?: String
  readAt?: DateTime
  link?: String
  user?: UserUpdateOneRequiredWithoutNotificationsInput
}

export interface BrandUpdateOneWithoutStoresInput {
  create?: BrandCreateWithoutStoresInput
  connect?: BrandWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BrandUpdateWithoutStoresDataInput
  upsert?: BrandUpsertWithoutStoresInput
}

export interface PropertiesUpsertWithWhereUniqueWithoutSupplierInput {
  where: PropertiesWhereUniqueInput
  update: PropertiesUpdateWithoutSupplierDataInput
  create: PropertiesCreateWithoutSupplierInput
}

export interface UserUpdateOneWithoutOrdersInput {
  create?: UserCreateWithoutOrdersInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutOrdersDataInput
  upsert?: UserUpsertWithoutOrdersInput
}

export interface PropertiesUpdateWithWhereUniqueWithoutSupplierInput {
  where: PropertiesWhereUniqueInput
  data: PropertiesUpdateWithoutSupplierDataInput
}

export interface FileUpdateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: FileUpdateDataInput
  upsert?: FileUpsertNestedInput
}

export interface SupplierUpdateInput {
  deletedAt?: DateTime
  note?: String
  name?: String
  products?: PropertiesUpdateManyWithoutSupplierInput
  address?: AddressUpdateOneRequiredInput
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

export interface OrderUpdateWithoutCommentsDataInput {
  deletedAt?: DateTime
  note?: String
  orderNumber?: String
  poNumber?: String
  trackAndTraceCode?: String
  status?: OrderStatus
  orderedAt?: DateTime
  store?: StoreUpdateOneRequiredWithoutOrdersInput
  createdBy?: UserUpdateOneWithoutOrdersInput
  items?: OrderItemUpdateManyInput
  address?: AddressUpdateOneInput
}

export interface FileUpsertNestedInput {
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface CommentUpdateInput {
  deletedAt?: DateTime
  note?: String
  content?: String
  user?: UserUpdateOneRequiredInput
  order?: OrderUpdateOneRequiredWithoutCommentsInput
}

export interface ProductCategoryUpdateManyWithoutBrandInput {
  create?: ProductCategoryCreateWithoutBrandInput[] | ProductCategoryCreateWithoutBrandInput
  connect?: ProductCategoryWhereUniqueInput[] | ProductCategoryWhereUniqueInput
  disconnect?: ProductCategoryWhereUniqueInput[] | ProductCategoryWhereUniqueInput
  delete?: ProductCategoryWhereUniqueInput[] | ProductCategoryWhereUniqueInput
  update?: ProductCategoryUpdateWithWhereUniqueWithoutBrandInput[] | ProductCategoryUpdateWithWhereUniqueWithoutBrandInput
  upsert?: ProductCategoryUpsertWithWhereUniqueWithoutBrandInput[] | ProductCategoryUpsertWithWhereUniqueWithoutBrandInput
}

export interface PropertiesUpdateInput {
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
  orderTemplate?: OrderTemplateUpdateOneWithoutPropertiesInput
}

export interface ProductCategoryUpdateWithWhereUniqueWithoutBrandInput {
  where: ProductCategoryWhereUniqueInput
  data: ProductCategoryUpdateWithoutBrandDataInput
}

export interface UserUpsertWithWhereUniqueWithoutRoleInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutRoleDataInput
  create: UserCreateWithoutRoleInput
}

export interface ProductCategoryUpdateWithoutBrandDataInput {
  deletedAt?: DateTime
  note?: String
  properties?: PropertiesUpdateOneRequiredWithoutProductCategoryInput
  parent?: ProductCategoryUpdateOneWithoutChildrenInput
  children?: ProductCategoryUpdateManyWithoutParentInput
  products?: ProductUpdateManyWithoutProductCategoriesInput
}

export interface UserUpdateWithWhereUniqueWithoutRoleInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutRoleDataInput
}

export interface PropertiesUpdateOneRequiredWithoutProductCategoryInput {
  create?: PropertiesCreateWithoutProductCategoryInput
  connect?: PropertiesWhereUniqueInput
  update?: PropertiesUpdateWithoutProductCategoryDataInput
  upsert?: PropertiesUpsertWithoutProductCategoryInput
}

export interface RoleUpdateInput {
  deletedAt?: DateTime
  note?: String
  name?: String
  description?: String
  permissions?: RolePermissionUpdateManyInput
  users?: UserUpdateManyWithoutRoleInput
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

export interface ProductCategoryUpsertWithWhereUniqueWithoutBrandInput {
  where: ProductCategoryWhereUniqueInput
  update: ProductCategoryUpdateWithoutBrandDataInput
  create: ProductCategoryCreateWithoutBrandInput
}

export interface LanguageUpdateOneInput {
  create?: LanguageCreateInput
  connect?: LanguageWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LanguageUpdateDataInput
  upsert?: LanguageUpsertNestedInput
}

export interface ProductUpsertWithoutPropertiesInput {
  update: ProductUpdateWithoutPropertiesDataInput
  create: ProductCreateWithoutPropertiesInput
}

export interface LanguageUpdateDataInput {
  deletedAt?: DateTime
  note?: String
  isoCode?: String
  articleCode?: String
  name?: String
}

export interface StoreUpsertWithWhereUniqueWithoutBrandInput {
  where: StoreWhereUniqueInput
  update: StoreUpdateWithoutBrandDataInput
  create: StoreCreateWithoutBrandInput
}

export interface LanguageUpsertNestedInput {
  update: LanguageUpdateDataInput
  create: LanguageCreateInput
}

export interface UserUpsertWithoutOrdersInput {
  update: UserUpdateWithoutOrdersDataInput
  create: UserCreateWithoutOrdersInput
}

export interface FileUpdateManyInput {
  create?: FileCreateInput[] | FileCreateInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
  disconnect?: FileWhereUniqueInput[] | FileWhereUniqueInput
  delete?: FileWhereUniqueInput[] | FileWhereUniqueInput
  update?: FileUpdateWithWhereUniqueNestedInput[] | FileUpdateWithWhereUniqueNestedInput
  upsert?: FileUpsertWithWhereUniqueNestedInput[] | FileUpsertWithWhereUniqueNestedInput
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

export interface CommentUpsertWithWhereUniqueWithoutOrderInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateWithoutOrderDataInput
  create: CommentCreateWithoutOrderInput
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

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
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

export interface SupplierUpdateWithoutProductsDataInput {
  deletedAt?: DateTime
  note?: String
  name?: String
  address?: AddressUpdateOneRequiredInput
}

export interface ProductCategoryCreateWithoutBrandInput {
  deletedAt?: DateTime
  note?: String
  properties: PropertiesCreateOneWithoutProductCategoryInput
  parent?: ProductCategoryCreateOneWithoutChildrenInput
  children?: ProductCategoryCreateManyWithoutParentInput
  products?: ProductCreateManyWithoutProductCategoriesInput
}

export interface AddressUpdateOneRequiredInput {
  create?: AddressCreateInput
  connect?: AddressWhereUniqueInput
  update?: AddressUpdateDataInput
  upsert?: AddressUpsertNestedInput
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

export interface SupplierUpsertWithoutProductsInput {
  update: SupplierUpdateWithoutProductsDataInput
  create: SupplierCreateWithoutProductsInput
}

export interface LanguageCreateInput {
  deletedAt?: DateTime
  note?: String
  isoCode: String
  articleCode: String
  name: String
}

export interface ProductUpdateOneWithoutPropertiesInput {
  create?: ProductCreateWithoutPropertiesInput
  connect?: ProductWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ProductUpdateWithoutPropertiesDataInput
  upsert?: ProductUpsertWithoutPropertiesInput
}

export interface SupplierCreateOneWithoutProductsInput {
  create?: SupplierCreateWithoutProductsInput
  connect?: SupplierWhereUniqueInput
}

export interface ProductUpdateWithoutPropertiesDataInput {
  deletedAt?: DateTime
  note?: String
  stock?: Int
  brand?: BrandUpdateOneInput
  productCategories?: ProductCategoryUpdateOneWithoutProductsInput
}

export interface ProductCreateOneWithoutPropertiesInput {
  create?: ProductCreateWithoutPropertiesInput
  connect?: ProductWhereUniqueInput
}

export interface BrandUpdateOneInput {
  create?: BrandCreateInput
  connect?: BrandWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BrandUpdateDataInput
  upsert?: BrandUpsertNestedInput
}

export interface BrandCreateOneInput {
  create?: BrandCreateInput
  connect?: BrandWhereUniqueInput
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

export interface StoreCreateManyWithoutBrandInput {
  create?: StoreCreateWithoutBrandInput[] | StoreCreateWithoutBrandInput
  connect?: StoreWhereUniqueInput[] | StoreWhereUniqueInput
}

export interface StoreUpdateManyWithoutBrandInput {
  create?: StoreCreateWithoutBrandInput[] | StoreCreateWithoutBrandInput
  connect?: StoreWhereUniqueInput[] | StoreWhereUniqueInput
  disconnect?: StoreWhereUniqueInput[] | StoreWhereUniqueInput
  delete?: StoreWhereUniqueInput[] | StoreWhereUniqueInput
  update?: StoreUpdateWithWhereUniqueWithoutBrandInput[] | StoreUpdateWithWhereUniqueWithoutBrandInput
  upsert?: StoreUpsertWithWhereUniqueWithoutBrandInput[] | StoreUpsertWithWhereUniqueWithoutBrandInput
}

export interface OrderCreateManyWithoutStoreInput {
  create?: OrderCreateWithoutStoreInput[] | OrderCreateWithoutStoreInput
  connect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
}

export interface StoreUpdateWithWhereUniqueWithoutBrandInput {
  where: StoreWhereUniqueInput
  data: StoreUpdateWithoutBrandDataInput
}

export interface CommentCreateManyWithoutOrderInput {
  create?: CommentCreateWithoutOrderInput[] | CommentCreateWithoutOrderInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
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

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface OrderUpdateManyWithoutStoreInput {
  create?: OrderCreateWithoutStoreInput[] | OrderCreateWithoutStoreInput
  connect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
  disconnect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
  delete?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
  update?: OrderUpdateWithWhereUniqueWithoutStoreInput[] | OrderUpdateWithWhereUniqueWithoutStoreInput
  upsert?: OrderUpsertWithWhereUniqueWithoutStoreInput[] | OrderUpsertWithWhereUniqueWithoutStoreInput
}

export interface RoleCreateOneWithoutUsersInput {
  create?: RoleCreateWithoutUsersInput
  connect?: RoleWhereUniqueInput
}

export interface OrderUpdateWithWhereUniqueWithoutStoreInput {
  where: OrderWhereUniqueInput
  data: OrderUpdateWithoutStoreDataInput
}

export interface RolePermissionCreateManyInput {
  create?: RolePermissionCreateInput[] | RolePermissionCreateInput
  connect?: RolePermissionWhereUniqueInput[] | RolePermissionWhereUniqueInput
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

export interface BrandCreateOneWithoutUsersInput {
  create?: BrandCreateWithoutUsersInput
  connect?: BrandWhereUniqueInput
}

export interface CommentUpdateManyWithoutOrderInput {
  create?: CommentCreateWithoutOrderInput[] | CommentCreateWithoutOrderInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  update?: CommentUpdateWithWhereUniqueWithoutOrderInput[] | CommentUpdateWithWhereUniqueWithoutOrderInput
  upsert?: CommentUpsertWithWhereUniqueWithoutOrderInput[] | CommentUpsertWithWhereUniqueWithoutOrderInput
}

export interface OrderTemplateCreateManyWithoutBrandInput {
  create?: OrderTemplateCreateWithoutBrandInput[] | OrderTemplateCreateWithoutBrandInput
  connect?: OrderTemplateWhereUniqueInput[] | OrderTemplateWhereUniqueInput
}

export interface CommentUpdateWithWhereUniqueWithoutOrderInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateWithoutOrderDataInput
}

export interface PropertiesCreateOneWithoutOrderTemplateInput {
  create?: PropertiesCreateWithoutOrderTemplateInput
  connect?: PropertiesWhereUniqueInput
}

export interface CommentUpdateWithoutOrderDataInput {
  deletedAt?: DateTime
  note?: String
  content?: String
  user?: UserUpdateOneRequiredInput
}

export interface ProductCategoryCreateOneWithoutPropertiesInput {
  create?: ProductCategoryCreateWithoutPropertiesInput
  connect?: ProductCategoryWhereUniqueInput
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface BrandCreateOneWithoutProductCategoriesInput {
  create?: BrandCreateWithoutProductCategoriesInput
  connect?: BrandWhereUniqueInput
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

export interface UserCreateOneWithoutContactPersonToBrandInput {
  create?: UserCreateWithoutContactPersonToBrandInput
  connect?: UserWhereUniqueInput
}

export interface RoleUpdateOneRequiredWithoutUsersInput {
  create?: RoleCreateWithoutUsersInput
  connect?: RoleWhereUniqueInput
  update?: RoleUpdateWithoutUsersDataInput
  upsert?: RoleUpsertWithoutUsersInput
}

export interface StoreCreateManyWithoutUsersInput {
  create?: StoreCreateWithoutUsersInput[] | StoreCreateWithoutUsersInput
  connect?: StoreWhereUniqueInput[] | StoreWhereUniqueInput
}

export interface RoleUpdateWithoutUsersDataInput {
  deletedAt?: DateTime
  note?: String
  name?: String
  description?: String
  permissions?: RolePermissionUpdateManyInput
}

export interface NotificationCreateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
}

export interface RolePermissionUpdateManyInput {
  create?: RolePermissionCreateInput[] | RolePermissionCreateInput
  connect?: RolePermissionWhereUniqueInput[] | RolePermissionWhereUniqueInput
  disconnect?: RolePermissionWhereUniqueInput[] | RolePermissionWhereUniqueInput
  delete?: RolePermissionWhereUniqueInput[] | RolePermissionWhereUniqueInput
  update?: RolePermissionUpdateWithWhereUniqueNestedInput[] | RolePermissionUpdateWithWhereUniqueNestedInput
  upsert?: RolePermissionUpsertWithWhereUniqueNestedInput[] | RolePermissionUpsertWithWhereUniqueNestedInput
}

export interface OrderCreateManyWithoutCreatedByInput {
  create?: OrderCreateWithoutCreatedByInput[] | OrderCreateWithoutCreatedByInput
  connect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
}

export interface RolePermissionUpdateWithWhereUniqueNestedInput {
  where: RolePermissionWhereUniqueInput
  data: RolePermissionUpdateDataInput
}

export interface StoreCreateOneWithoutOrdersInput {
  create?: StoreCreateWithoutOrdersInput
  connect?: StoreWhereUniqueInput
}

export interface RolePermissionUpdateDataInput {
  deletedAt?: DateTime
  note?: String
  action?: PermissionAction
  model?: PermissionModel
}

export interface UserCreateManyWithoutStoresInput {
  create?: UserCreateWithoutStoresInput[] | UserCreateWithoutStoresInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface RolePermissionUpsertWithWhereUniqueNestedInput {
  where: RolePermissionWhereUniqueInput
  update: RolePermissionUpdateDataInput
  create: RolePermissionCreateInput
}

export interface BrandCreateManyWithoutContactPersonInput {
  create?: BrandCreateWithoutContactPersonInput[] | BrandCreateWithoutContactPersonInput
  connect?: BrandWhereUniqueInput[] | BrandWhereUniqueInput
}

export interface RoleUpsertWithoutUsersInput {
  update: RoleUpdateWithoutUsersDataInput
  create: RoleCreateWithoutUsersInput
}

export interface UserCreateManyWithoutBrandInput {
  create?: UserCreateWithoutBrandInput[] | UserCreateWithoutBrandInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface BrandUpdateOneRequiredWithoutUsersInput {
  create?: BrandCreateWithoutUsersInput
  connect?: BrandWhereUniqueInput
  update?: BrandUpdateWithoutUsersDataInput
  upsert?: BrandUpsertWithoutUsersInput
}

export interface OrderItemCreateManyInput {
  create?: OrderItemCreateInput[] | OrderItemCreateInput
  connect?: OrderItemWhereUniqueInput[] | OrderItemWhereUniqueInput
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

export interface OrderTemplateCreateOneInput {
  create?: OrderTemplateCreateInput
  connect?: OrderTemplateWhereUniqueInput
}

export interface OrderTemplateUpdateManyWithoutBrandInput {
  create?: OrderTemplateCreateWithoutBrandInput[] | OrderTemplateCreateWithoutBrandInput
  connect?: OrderTemplateWhereUniqueInput[] | OrderTemplateWhereUniqueInput
  disconnect?: OrderTemplateWhereUniqueInput[] | OrderTemplateWhereUniqueInput
  delete?: OrderTemplateWhereUniqueInput[] | OrderTemplateWhereUniqueInput
  update?: OrderTemplateUpdateWithWhereUniqueWithoutBrandInput[] | OrderTemplateUpdateWithWhereUniqueWithoutBrandInput
  upsert?: OrderTemplateUpsertWithWhereUniqueWithoutBrandInput[] | OrderTemplateUpsertWithWhereUniqueWithoutBrandInput
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

export interface OrderTemplateUpdateWithWhereUniqueWithoutBrandInput {
  where: OrderTemplateWhereUniqueInput
  data: OrderTemplateUpdateWithoutBrandDataInput
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

export interface FilterOptionsSubscriptionWhereInput {
  AND?: FilterOptionsSubscriptionWhereInput[] | FilterOptionsSubscriptionWhereInput
  OR?: FilterOptionsSubscriptionWhereInput[] | FilterOptionsSubscriptionWhereInput
  NOT?: FilterOptionsSubscriptionWhereInput[] | FilterOptionsSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FilterOptionsWhereInput
}

export interface PropertiesUpdateOneWithoutOrderTemplateInput {
  create?: PropertiesCreateWithoutOrderTemplateInput
  connect?: PropertiesWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PropertiesUpdateWithoutOrderTemplateDataInput
  upsert?: PropertiesUpsertWithoutOrderTemplateInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
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

export interface ProductCategoryUpdateOneWithoutPropertiesInput {
  create?: ProductCategoryCreateWithoutPropertiesInput
  connect?: ProductCategoryWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ProductCategoryUpdateWithoutPropertiesDataInput
  upsert?: ProductCategoryUpsertWithoutPropertiesInput
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

export interface ProductCategoryUpdateWithoutPropertiesDataInput {
  deletedAt?: DateTime
  note?: String
  brand?: BrandUpdateOneWithoutProductCategoriesInput
  parent?: ProductCategoryUpdateOneWithoutChildrenInput
  children?: ProductCategoryUpdateManyWithoutParentInput
  products?: ProductUpdateManyWithoutProductCategoriesInput
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

export interface BrandUpdateOneWithoutProductCategoriesInput {
  create?: BrandCreateWithoutProductCategoriesInput
  connect?: BrandWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BrandUpdateWithoutProductCategoriesDataInput
  upsert?: BrandUpsertWithoutProductCategoriesInput
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

export interface UserUpdateOneWithoutContactPersonToBrandInput {
  create?: UserCreateWithoutContactPersonToBrandInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutContactPersonToBrandDataInput
  upsert?: UserUpsertWithoutContactPersonToBrandInput
}

export interface ProductCategoryWhereUniqueInput {
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

export interface SupplierWhereUniqueInput {
  id?: ID_Input
}

export interface StoreUpdateManyWithoutUsersInput {
  create?: StoreCreateWithoutUsersInput[] | StoreCreateWithoutUsersInput
  connect?: StoreWhereUniqueInput[] | StoreWhereUniqueInput
  disconnect?: StoreWhereUniqueInput[] | StoreWhereUniqueInput
  delete?: StoreWhereUniqueInput[] | StoreWhereUniqueInput
  update?: StoreUpdateWithWhereUniqueWithoutUsersInput[] | StoreUpdateWithWhereUniqueWithoutUsersInput
  upsert?: StoreUpsertWithWhereUniqueWithoutUsersInput[] | StoreUpsertWithWhereUniqueWithoutUsersInput
}

export interface OrderTemplateWhereUniqueInput {
  id?: ID_Input
}

export interface StoreUpdateWithWhereUniqueWithoutUsersInput {
  where: StoreWhereUniqueInput
  data: StoreUpdateWithoutUsersDataInput
}

export interface BrandWhereUniqueInput {
  id?: ID_Input
  domain?: String
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

export interface AddressWhereUniqueInput {
  id?: ID_Input
}

export interface StoreUpsertWithWhereUniqueWithoutUsersInput {
  where: StoreWhereUniqueInput
  update: StoreUpdateWithoutUsersDataInput
  create: StoreCreateWithoutUsersInput
}

export interface RolePermissionUpdateManyMutationInput {
  deletedAt?: DateTime
  note?: String
  action?: PermissionAction
  model?: PermissionModel
}

export interface NotificationUpdateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  disconnect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  delete?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  update?: NotificationUpdateWithWhereUniqueWithoutUserInput[] | NotificationUpdateWithWhereUniqueWithoutUserInput
  upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput[] | NotificationUpsertWithWhereUniqueWithoutUserInput
}

export interface UserUpdateManyMutationInput {
  deletedAt?: DateTime
  note?: String
  email?: String
  password?: String
  firstName?: String
  lastName?: String
  sendNotificationToEmail?: Boolean
  phoneNumber?: String
}

export interface NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateWithoutUserDataInput
}

export interface CommentUpdateManyMutationInput {
  deletedAt?: DateTime
  note?: String
  content?: String
}

export interface NotificationUpdateWithoutUserDataInput {
  deletedAt?: DateTime
  note?: String
  title?: String
  content?: String
  readAt?: DateTime
  link?: String
}

export interface RoleUpdateManyMutationInput {
  deletedAt?: DateTime
  note?: String
  name?: String
  description?: String
}

export interface NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  update: NotificationUpdateWithoutUserDataInput
  create: NotificationCreateWithoutUserInput
}

export interface ProductUpdateInput {
  deletedAt?: DateTime
  note?: String
  stock?: Int
  brand?: BrandUpdateOneInput
  properties?: PropertiesUpdateOneRequiredWithoutProductInput
  productCategories?: ProductCategoryUpdateOneWithoutProductsInput
}

export interface OrderUpdateManyWithoutCreatedByInput {
  create?: OrderCreateWithoutCreatedByInput[] | OrderCreateWithoutCreatedByInput
  connect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
  disconnect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
  delete?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
  update?: OrderUpdateWithWhereUniqueWithoutCreatedByInput[] | OrderUpdateWithWhereUniqueWithoutCreatedByInput
  upsert?: OrderUpsertWithWhereUniqueWithoutCreatedByInput[] | OrderUpsertWithWhereUniqueWithoutCreatedByInput
}

export interface OrderItemUpdateInput {
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

export interface OrderUpdateWithWhereUniqueWithoutCreatedByInput {
  where: OrderWhereUniqueInput
  data: OrderUpdateWithoutCreatedByDataInput
}

export interface UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput
  create: UserCreateWithoutNotificationsInput
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

export interface SupportPageUpdateInput {
  deletedAt?: DateTime
  note?: String
  title?: String
  content?: String
}

export interface StoreUpdateOneRequiredWithoutOrdersInput {
  create?: StoreCreateWithoutOrdersInput
  connect?: StoreWhereUniqueInput
  update?: StoreUpdateWithoutOrdersDataInput
  upsert?: StoreUpsertWithoutOrdersInput
}

export interface PropertiesUpdateManyWithoutSupplierInput {
  create?: PropertiesCreateWithoutSupplierInput[] | PropertiesCreateWithoutSupplierInput
  connect?: PropertiesWhereUniqueInput[] | PropertiesWhereUniqueInput
  disconnect?: PropertiesWhereUniqueInput[] | PropertiesWhereUniqueInput
  delete?: PropertiesWhereUniqueInput[] | PropertiesWhereUniqueInput
  update?: PropertiesUpdateWithWhereUniqueWithoutSupplierInput[] | PropertiesUpdateWithWhereUniqueWithoutSupplierInput
  upsert?: PropertiesUpsertWithWhereUniqueWithoutSupplierInput[] | PropertiesUpsertWithWhereUniqueWithoutSupplierInput
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

export interface OrderUpdateOneRequiredWithoutCommentsInput {
  create?: OrderCreateWithoutCommentsInput
  connect?: OrderWhereUniqueInput
  update?: OrderUpdateWithoutCommentsDataInput
  upsert?: OrderUpsertWithoutCommentsInput
}

export interface UserUpdateManyWithoutStoresInput {
  create?: UserCreateWithoutStoresInput[] | UserCreateWithoutStoresInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutStoresInput[] | UserUpdateWithWhereUniqueWithoutStoresInput
  upsert?: UserUpsertWithWhereUniqueWithoutStoresInput[] | UserUpsertWithWhereUniqueWithoutStoresInput
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

export interface UserUpdateWithWhereUniqueWithoutStoresInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutStoresDataInput
}

export interface UserUpdateManyWithoutRoleInput {
  create?: UserCreateWithoutRoleInput[] | UserCreateWithoutRoleInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutRoleInput[] | UserUpdateWithWhereUniqueWithoutRoleInput
  upsert?: UserUpsertWithWhereUniqueWithoutRoleInput[] | UserUpsertWithWhereUniqueWithoutRoleInput
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

export interface PropertiesUpsertWithoutProductCategoryInput {
  update: PropertiesUpdateWithoutProductCategoryDataInput
  create: PropertiesCreateWithoutProductCategoryInput
}

export interface BrandUpdateManyWithoutContactPersonInput {
  create?: BrandCreateWithoutContactPersonInput[] | BrandCreateWithoutContactPersonInput
  connect?: BrandWhereUniqueInput[] | BrandWhereUniqueInput
  disconnect?: BrandWhereUniqueInput[] | BrandWhereUniqueInput
  delete?: BrandWhereUniqueInput[] | BrandWhereUniqueInput
  update?: BrandUpdateWithWhereUniqueWithoutContactPersonInput[] | BrandUpdateWithWhereUniqueWithoutContactPersonInput
  upsert?: BrandUpsertWithWhereUniqueWithoutContactPersonInput[] | BrandUpsertWithWhereUniqueWithoutContactPersonInput
}

export interface OrderUpsertWithWhereUniqueWithoutStoreInput {
  where: OrderWhereUniqueInput
  update: OrderUpdateWithoutStoreDataInput
  create: OrderCreateWithoutStoreInput
}

export interface BrandUpdateWithWhereUniqueWithoutContactPersonInput {
  where: BrandWhereUniqueInput
  data: BrandUpdateWithoutContactPersonDataInput
}

export interface AddressCreateOneInput {
  create?: AddressCreateInput
  connect?: AddressWhereUniqueInput
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

export interface FileCreateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
}

export interface UserUpdateManyWithoutBrandInput {
  create?: UserCreateWithoutBrandInput[] | UserCreateWithoutBrandInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutBrandInput[] | UserUpdateWithWhereUniqueWithoutBrandInput
  upsert?: UserUpsertWithWhereUniqueWithoutBrandInput[] | UserUpsertWithWhereUniqueWithoutBrandInput
}

export interface PropertiesCreateOneWithoutProductCategoryInput {
  create?: PropertiesCreateWithoutProductCategoryInput
  connect?: PropertiesWhereUniqueInput
}

export interface UserUpdateWithWhereUniqueWithoutBrandInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutBrandDataInput
}

export interface FileCreateManyInput {
  create?: FileCreateInput[] | FileCreateInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
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

export interface ProductCreateWithoutPropertiesInput {
  deletedAt?: DateTime
  note?: String
  stock?: Int
  brand?: BrandCreateOneInput
  productCategories?: ProductCategoryCreateOneWithoutProductsInput
}

export interface UserUpsertWithWhereUniqueWithoutBrandInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutBrandDataInput
  create: UserCreateWithoutBrandInput
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

export interface BrandUpsertWithWhereUniqueWithoutContactPersonInput {
  where: BrandWhereUniqueInput
  update: BrandUpdateWithoutContactPersonDataInput
  create: BrandCreateWithoutContactPersonInput
}

export interface CommentCreateWithoutOrderInput {
  deletedAt?: DateTime
  note?: String
  content?: String
  user: UserCreateOneInput
}

export interface UserUpsertWithWhereUniqueWithoutStoresInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutStoresDataInput
  create: UserCreateWithoutStoresInput
}

export interface RoleCreateWithoutUsersInput {
  deletedAt?: DateTime
  note?: String
  name: String
  description?: String
  permissions?: RolePermissionCreateManyInput
}

export interface StoreUpsertWithoutOrdersInput {
  update: StoreUpdateWithoutOrdersDataInput
  create: StoreCreateWithoutOrdersInput
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

export interface OrderItemUpdateManyInput {
  create?: OrderItemCreateInput[] | OrderItemCreateInput
  connect?: OrderItemWhereUniqueInput[] | OrderItemWhereUniqueInput
  disconnect?: OrderItemWhereUniqueInput[] | OrderItemWhereUniqueInput
  delete?: OrderItemWhereUniqueInput[] | OrderItemWhereUniqueInput
  update?: OrderItemUpdateWithWhereUniqueNestedInput[] | OrderItemUpdateWithWhereUniqueNestedInput
  upsert?: OrderItemUpsertWithWhereUniqueNestedInput[] | OrderItemUpsertWithWhereUniqueNestedInput
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

export interface OrderItemUpdateWithWhereUniqueNestedInput {
  where: OrderItemWhereUniqueInput
  data: OrderItemUpdateDataInput
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

export interface OrderTemplateUpdateOneInput {
  create?: OrderTemplateCreateInput
  connect?: OrderTemplateWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OrderTemplateUpdateDataInput
  upsert?: OrderTemplateUpsertNestedInput
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

export interface FilterOptionsUpdateOneInput {
  create?: FilterOptionsCreateInput
  connect?: FilterOptionsWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: FilterOptionsUpdateDataInput
  upsert?: FilterOptionsUpsertNestedInput
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

export interface FilterOptionsUpdateDataInput {
  deletedAt?: DateTime
  note?: String
  type?: FilterOptionsType
  storeType?: String
  size?: String
  currency?: String
  language?: LanguageUpdateOneInput
}

export interface AddressSubscriptionWhereInput {
  AND?: AddressSubscriptionWhereInput[] | AddressSubscriptionWhereInput
  OR?: AddressSubscriptionWhereInput[] | AddressSubscriptionWhereInput
  NOT?: AddressSubscriptionWhereInput[] | AddressSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AddressWhereInput
}

export interface FilterOptionsUpsertNestedInput {
  update: FilterOptionsUpdateDataInput
  create: FilterOptionsCreateInput
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

export interface BrandUpdateOneRequiredWithoutOrderTemplatesInput {
  create?: BrandCreateWithoutOrderTemplatesInput
  connect?: BrandWhereUniqueInput
  update?: BrandUpdateWithoutOrderTemplatesDataInput
  upsert?: BrandUpsertWithoutOrderTemplatesInput
}

export interface SupportPageSubscriptionWhereInput {
  AND?: SupportPageSubscriptionWhereInput[] | SupportPageSubscriptionWhereInput
  OR?: SupportPageSubscriptionWhereInput[] | SupportPageSubscriptionWhereInput
  NOT?: SupportPageSubscriptionWhereInput[] | SupportPageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SupportPageWhereInput
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

export interface PropertiesSubscriptionWhereInput {
  AND?: PropertiesSubscriptionWhereInput[] | PropertiesSubscriptionWhereInput
  OR?: PropertiesSubscriptionWhereInput[] | PropertiesSubscriptionWhereInput
  NOT?: PropertiesSubscriptionWhereInput[] | PropertiesSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PropertiesWhereInput
}

export interface BrandUpsertWithoutOrderTemplatesInput {
  update: BrandUpdateWithoutOrderTemplatesDataInput
  create: BrandCreateWithoutOrderTemplatesInput
}

export interface StoreSubscriptionWhereInput {
  AND?: StoreSubscriptionWhereInput[] | StoreSubscriptionWhereInput
  OR?: StoreSubscriptionWhereInput[] | StoreSubscriptionWhereInput
  NOT?: StoreSubscriptionWhereInput[] | StoreSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: StoreWhereInput
}

export interface OrderTemplateUpdateOneWithoutChildrenInput {
  create?: OrderTemplateCreateWithoutChildrenInput
  connect?: OrderTemplateWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OrderTemplateUpdateWithoutChildrenDataInput
  upsert?: OrderTemplateUpsertWithoutChildrenInput
}

export interface OrderWhereUniqueInput {
  id?: ID_Input
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

export interface OrderItemWhereUniqueInput {
  id?: ID_Input
}

export interface ProductUpdateOneInput {
  create?: ProductCreateInput
  connect?: ProductWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ProductUpdateDataInput
  upsert?: ProductUpsertNestedInput
}

export interface FileUpdateManyMutationInput {
  deletedAt?: DateTime
  note?: String
  originalName?: String
  contentType?: String
  mimeType?: String
  bucket?: String
  key?: String
  location?: String
}

export interface ProductUpdateDataInput {
  deletedAt?: DateTime
  note?: String
  stock?: Int
  brand?: BrandUpdateOneInput
  properties?: PropertiesUpdateOneRequiredWithoutProductInput
  productCategories?: ProductCategoryUpdateOneWithoutProductsInput
}

export interface SupportPageUpdateManyMutationInput {
  deletedAt?: DateTime
  note?: String
  title?: String
  content?: String
}

export interface PropertiesUpdateOneRequiredWithoutProductInput {
  create?: PropertiesCreateWithoutProductInput
  connect?: PropertiesWhereUniqueInput
  update?: PropertiesUpdateWithoutProductDataInput
  upsert?: PropertiesUpsertWithoutProductInput
}

export interface AddressUpdateInput {
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

export interface OrderTemplateUpdateOneWithoutPropertiesInput {
  create?: OrderTemplateCreateWithoutPropertiesInput
  connect?: OrderTemplateWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OrderTemplateUpdateWithoutPropertiesDataInput
  upsert?: OrderTemplateUpsertWithoutPropertiesInput
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

export interface OrderTemplateUpdateManyWithoutParentInput {
  create?: OrderTemplateCreateWithoutParentInput[] | OrderTemplateCreateWithoutParentInput
  connect?: OrderTemplateWhereUniqueInput[] | OrderTemplateWhereUniqueInput
  disconnect?: OrderTemplateWhereUniqueInput[] | OrderTemplateWhereUniqueInput
  delete?: OrderTemplateWhereUniqueInput[] | OrderTemplateWhereUniqueInput
  update?: OrderTemplateUpdateWithWhereUniqueWithoutParentInput[] | OrderTemplateUpdateWithWhereUniqueWithoutParentInput
  upsert?: OrderTemplateUpsertWithWhereUniqueWithoutParentInput[] | OrderTemplateUpsertWithWhereUniqueWithoutParentInput
}

export interface BrandUpsertWithoutStoresInput {
  update: BrandUpdateWithoutStoresDataInput
  create: BrandCreateWithoutStoresInput
}

export interface OrderTemplateUpdateWithWhereUniqueWithoutParentInput {
  where: OrderTemplateWhereUniqueInput
  data: OrderTemplateUpdateWithoutParentDataInput
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

export interface ProductCategoryCreateManyWithoutBrandInput {
  create?: ProductCategoryCreateWithoutBrandInput[] | ProductCategoryCreateWithoutBrandInput
  connect?: ProductCategoryWhereUniqueInput[] | ProductCategoryWhereUniqueInput
}

export interface OrderTemplateUpsertWithWhereUniqueWithoutParentInput {
  where: OrderTemplateWhereUniqueInput
  update: OrderTemplateUpdateWithoutParentDataInput
  create: OrderTemplateCreateWithoutParentInput
}

export interface SupplierCreateWithoutProductsInput {
  deletedAt?: DateTime
  note?: String
  name: String
  address: AddressCreateOneInput
}

export interface OrderTemplateUpsertWithoutPropertiesInput {
  update: OrderTemplateUpdateWithoutPropertiesDataInput
  create: OrderTemplateCreateWithoutPropertiesInput
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

export interface PropertiesUpsertWithoutProductInput {
  update: PropertiesUpdateWithoutProductDataInput
  create: PropertiesCreateWithoutProductInput
}

export interface RolePermissionCreateInput {
  deletedAt?: DateTime
  note?: String
  action: PermissionAction
  model: PermissionModel
}

export interface ProductCategoryUpdateOneWithoutProductsInput {
  create?: ProductCategoryCreateWithoutProductsInput
  connect?: ProductCategoryWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ProductCategoryUpdateWithoutProductsDataInput
  upsert?: ProductCategoryUpsertWithoutProductsInput
}

export interface ProductCategoryCreateWithoutPropertiesInput {
  deletedAt?: DateTime
  note?: String
  brand?: BrandCreateOneWithoutProductCategoriesInput
  parent?: ProductCategoryCreateOneWithoutChildrenInput
  children?: ProductCategoryCreateManyWithoutParentInput
  products?: ProductCreateManyWithoutProductCategoriesInput
}

export interface ProductCategoryUpdateWithoutProductsDataInput {
  deletedAt?: DateTime
  note?: String
  properties?: PropertiesUpdateOneRequiredWithoutProductCategoryInput
  brand?: BrandUpdateOneWithoutProductCategoriesInput
  parent?: ProductCategoryUpdateOneWithoutChildrenInput
  children?: ProductCategoryUpdateManyWithoutParentInput
}

export interface NotificationCreateWithoutUserInput {
  deletedAt?: DateTime
  note?: String
  title: String
  content: String
  readAt?: DateTime
  link?: String
}

export interface ProductCategoryUpdateOneWithoutChildrenInput {
  create?: ProductCategoryCreateWithoutChildrenInput
  connect?: ProductCategoryWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ProductCategoryUpdateWithoutChildrenDataInput
  upsert?: ProductCategoryUpsertWithoutChildrenInput
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

export interface ProductCategoryUpdateWithoutChildrenDataInput {
  deletedAt?: DateTime
  note?: String
  properties?: PropertiesUpdateOneRequiredWithoutProductCategoryInput
  brand?: BrandUpdateOneWithoutProductCategoriesInput
  parent?: ProductCategoryUpdateOneWithoutChildrenInput
  products?: ProductUpdateManyWithoutProductCategoriesInput
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FileWhereInput
}

export interface ProductUpdateManyWithoutProductCategoriesInput {
  create?: ProductCreateWithoutProductCategoriesInput[] | ProductCreateWithoutProductCategoriesInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  update?: ProductUpdateWithWhereUniqueWithoutProductCategoriesInput[] | ProductUpdateWithWhereUniqueWithoutProductCategoriesInput
  upsert?: ProductUpsertWithWhereUniqueWithoutProductCategoriesInput[] | ProductUpsertWithWhereUniqueWithoutProductCategoriesInput
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

export interface ProductUpdateWithWhereUniqueWithoutProductCategoriesInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutProductCategoriesDataInput
}

export interface StoreWhereUniqueInput {
  id?: ID_Input
}

export interface ProductUpdateWithoutProductCategoriesDataInput {
  deletedAt?: DateTime
  note?: String
  stock?: Int
  brand?: BrandUpdateOneInput
  properties?: PropertiesUpdateOneRequiredWithoutProductInput
}

export interface ProductWhereUniqueInput {
  id?: ID_Input
}

export interface ProductUpsertWithWhereUniqueWithoutProductCategoriesInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutProductCategoriesDataInput
  create: ProductCreateWithoutProductCategoriesInput
}

export interface PropertiesUpdateManyMutationInput {
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
}

export interface ProductCategoryUpsertWithoutChildrenInput {
  update: ProductCategoryUpdateWithoutChildrenDataInput
  create: ProductCategoryCreateWithoutChildrenInput
}

export interface UserUpdateOneRequiredWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutNotificationsDataInput
  upsert?: UserUpsertWithoutNotificationsInput
}

export interface ProductCategoryUpdateManyWithoutParentInput {
  create?: ProductCategoryCreateWithoutParentInput[] | ProductCategoryCreateWithoutParentInput
  connect?: ProductCategoryWhereUniqueInput[] | ProductCategoryWhereUniqueInput
  disconnect?: ProductCategoryWhereUniqueInput[] | ProductCategoryWhereUniqueInput
  delete?: ProductCategoryWhereUniqueInput[] | ProductCategoryWhereUniqueInput
  update?: ProductCategoryUpdateWithWhereUniqueWithoutParentInput[] | ProductCategoryUpdateWithWhereUniqueWithoutParentInput
  upsert?: ProductCategoryUpsertWithWhereUniqueWithoutParentInput[] | ProductCategoryUpsertWithWhereUniqueWithoutParentInput
}

export interface UserUpdateWithoutRoleDataInput {
  deletedAt?: DateTime
  note?: String
  email?: String
  password?: String
  firstName?: String
  lastName?: String
  sendNotificationToEmail?: Boolean
  phoneNumber?: String
  brand?: BrandUpdateOneRequiredWithoutUsersInput
  contactPersonToBrand?: BrandUpdateManyWithoutContactPersonInput
  stores?: StoreUpdateManyWithoutUsersInput
  notifications?: NotificationUpdateManyWithoutUserInput
  orders?: OrderUpdateManyWithoutCreatedByInput
}

export interface ProductCategoryUpdateWithWhereUniqueWithoutParentInput {
  where: ProductCategoryWhereUniqueInput
  data: ProductCategoryUpdateWithoutParentDataInput
}

export interface BrandCreateOneWithoutStoresInput {
  create?: BrandCreateWithoutStoresInput
  connect?: BrandWhereUniqueInput
}

export interface ProductCategoryUpdateWithoutParentDataInput {
  deletedAt?: DateTime
  note?: String
  properties?: PropertiesUpdateOneRequiredWithoutProductCategoryInput
  brand?: BrandUpdateOneWithoutProductCategoriesInput
  children?: ProductCategoryUpdateManyWithoutParentInput
  products?: ProductUpdateManyWithoutProductCategoriesInput
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

export interface ProductCategoryUpsertWithWhereUniqueWithoutParentInput {
  where: ProductCategoryWhereUniqueInput
  update: ProductCategoryUpdateWithoutParentDataInput
  create: ProductCategoryCreateWithoutParentInput
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

export interface ProductCategoryUpsertWithoutProductsInput {
  update: ProductCategoryUpdateWithoutProductsDataInput
  create: ProductCategoryCreateWithoutProductsInput
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

export interface ProductUpsertNestedInput {
  update: ProductUpdateDataInput
  create: ProductCreateInput
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

export interface OrderTemplateUpsertWithoutChildrenInput {
  update: OrderTemplateUpdateWithoutChildrenDataInput
  create: OrderTemplateCreateWithoutChildrenInput
}

export interface NotificationWhereUniqueInput {
  id?: ID_Input
}

export interface OrderTemplateUpsertNestedInput {
  update: OrderTemplateUpdateDataInput
  create: OrderTemplateCreateInput
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

export interface OrderItemUpsertWithWhereUniqueNestedInput {
  where: OrderItemWhereUniqueInput
  update: OrderItemUpdateDataInput
  create: OrderItemCreateInput
}

export interface BrandUpsertNestedInput {
  update: BrandUpdateDataInput
  create: BrandCreateInput
}

export interface OrderUpsertWithWhereUniqueWithoutCreatedByInput {
  where: OrderWhereUniqueInput
  update: OrderUpdateWithoutCreatedByDataInput
  create: OrderCreateWithoutCreatedByInput
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

export interface UserUpsertWithoutContactPersonToBrandInput {
  update: UserUpdateWithoutContactPersonToBrandDataInput
  create: UserCreateWithoutContactPersonToBrandInput
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

export interface FilterOptionsUpdateManyMutationInput {
  deletedAt?: DateTime
  note?: String
  type?: FilterOptionsType
  storeType?: String
  size?: String
  currency?: String
}

export interface OrderTemplateUpsertWithWhereUniqueWithoutBrandInput {
  where: OrderTemplateWhereUniqueInput
  update: OrderTemplateUpdateWithoutBrandDataInput
  create: OrderTemplateCreateWithoutBrandInput
}

export interface PropertiesUpsertWithoutOrderTemplateInput {
  update: PropertiesUpdateWithoutOrderTemplateDataInput
  create: PropertiesCreateWithoutOrderTemplateInput
}

export interface ProductCategoryUpsertWithoutPropertiesInput {
  update: ProductCategoryUpdateWithoutPropertiesDataInput
  create: ProductCategoryCreateWithoutPropertiesInput
}

export interface BrandUpsertWithoutProductCategoriesInput {
  update: BrandUpdateWithoutProductCategoriesDataInput
  create: BrandCreateWithoutProductCategoriesInput
}

export interface OrderUpsertWithoutCommentsInput {
  update: OrderUpdateWithoutCommentsDataInput
  create: OrderCreateWithoutCommentsInput
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

export interface LanguageCreateOneInput {
  create?: LanguageCreateInput
  connect?: LanguageWhereUniqueInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
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

export interface AddressPreviousValues {
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

export interface ProductPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  stock?: Int
}

export interface AggregateAddress {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface AddressEdge {
  node: Address
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface AddressConnection {
  pageInfo: PageInfo
  edges: AddressEdge[]
  aggregate: AggregateAddress
}

/*
 * An edge in a connection.

 */
export interface LanguageEdge {
  node: Language
  cursor: String
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

export interface AggregateProduct {
  count: Int
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

/*
 * A connection to a list of items.

 */
export interface ProductConnection {
  pageInfo: PageInfo
  edges: ProductEdge[]
  aggregate: AggregateProduct
}

export interface LanguagePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  isoCode: String
  articleCode: String
  name: String
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

export interface StoreSubscriptionPayload {
  mutation: MutationType
  node?: Store
  updatedFields?: String[]
  previousValues?: StorePreviousValues
}

export interface AggregateBrand {
  count: Int
}

export interface StorePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
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
}

/*
 * A connection to a list of items.

 */
export interface BrandConnection {
  pageInfo: PageInfo
  edges: BrandEdge[]
  aggregate: AggregateBrand
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

/*
 * An edge in a connection.

 */
export interface RolePermissionEdge {
  node: RolePermission
  cursor: String
}

export interface RoleSubscriptionPayload {
  mutation: MutationType
  node?: Role
  updatedFields?: String[]
  previousValues?: RolePreviousValues
}

export interface AggregateOrderItem {
  count: Int
}

export interface RolePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  name: String
  description?: String
}

/*
 * A connection to a list of items.

 */
export interface OrderItemConnection {
  pageInfo: PageInfo
  edges: OrderItemEdge[]
  aggregate: AggregateOrderItem
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

/*
 * An edge in a connection.

 */
export interface FilterOptionsEdge {
  node: FilterOptions
  cursor: String
}

export interface ProductCategorySubscriptionPayload {
  mutation: MutationType
  node?: ProductCategory
  updatedFields?: String[]
  previousValues?: ProductCategoryPreviousValues
}

export interface AggregateOrderTemplate {
  count: Int
}

export interface ProductCategoryPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
}

/*
 * A connection to a list of items.

 */
export interface OrderTemplateConnection {
  pageInfo: PageInfo
  edges: OrderTemplateEdge[]
  aggregate: AggregateOrderTemplate
}

export interface LanguageSubscriptionPayload {
  mutation: MutationType
  node?: Language
  updatedFields?: String[]
  previousValues?: LanguagePreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface PropertiesSubscriptionPayload {
  mutation: MutationType
  node?: Properties
  updatedFields?: String[]
  previousValues?: PropertiesPreviousValues
}

export interface AggregateNotification {
  count: Int
}

export interface PropertiesPreviousValues {
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
}

/*
 * A connection to a list of items.

 */
export interface NotificationConnection {
  pageInfo: PageInfo
  edges: NotificationEdge[]
  aggregate: AggregateNotification
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

/*
 * An edge in a connection.

 */
export interface SupportPageEdge {
  node: SupportPage
  cursor: String
}

export interface OrderSubscriptionPayload {
  mutation: MutationType
  node?: Order
  updatedFields?: String[]
  previousValues?: OrderPreviousValues
}

export interface AggregateSupplier {
  count: Int
}

export interface OrderPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  orderNumber?: String
  poNumber?: String
  trackAndTraceCode?: String
  status: OrderStatus
  orderedAt?: DateTime
}

/*
 * A connection to a list of items.

 */
export interface SupplierConnection {
  pageInfo: PageInfo
  edges: SupplierEdge[]
  aggregate: AggregateSupplier
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

/*
 * An edge in a connection.

 */
export interface CommentEdge {
  node: Comment
  cursor: String
}

export interface CommentSubscriptionPayload {
  mutation: MutationType
  node?: Comment
  updatedFields?: String[]
  previousValues?: CommentPreviousValues
}

export interface BatchPayload {
  count: Long
}

export interface CommentPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  content?: String
}

export interface AggregateOrder {
  count: Int
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

/*
 * A connection to a list of items.

 */
export interface OrderConnection {
  pageInfo: PageInfo
  edges: OrderEdge[]
  aggregate: AggregateOrder
}

export interface SupplierSubscriptionPayload {
  mutation: MutationType
  node?: Supplier
  updatedFields?: String[]
  previousValues?: SupplierPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PropertiesEdge {
  node: Properties
  cursor: String
}

export interface SupplierPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  name: String
}

export interface AggregateProductCategory {
  count: Int
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
 * A connection to a list of items.

 */
export interface ProductCategoryConnection {
  pageInfo: PageInfo
  edges: ProductCategoryEdge[]
  aggregate: AggregateProductCategory
}

export interface SupportPageSubscriptionPayload {
  mutation: MutationType
  node?: SupportPage
  updatedFields?: String[]
  previousValues?: SupportPagePreviousValues
}

/*
 * An edge in a connection.

 */
export interface RoleEdge {
  node: Role
  cursor: String
}

export interface SupportPagePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  title: String
  content: String
}

export interface AggregateStore {
  count: Int
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

export interface AggregateLanguage {
  count: Int
}

export interface NotificationSubscriptionPayload {
  mutation: MutationType
  node?: Notification
  updatedFields?: String[]
  previousValues?: NotificationPreviousValues
}

/*
 * An edge in a connection.

 */
export interface ProductEdge {
  node: Product
  cursor: String
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

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: FileEdge[]
  aggregate: AggregateFile
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

export interface AggregateRolePermission {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface OrderItemEdge {
  node: OrderItem
  cursor: String
}

export interface UserPreviousValues {
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
}

/*
 * A connection to a list of items.

 */
export interface FilterOptionsConnection {
  pageInfo: PageInfo
  edges: FilterOptionsEdge[]
  aggregate: AggregateFilterOptions
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

export interface AggregateUser {
  count: Int
}

export interface OrderTemplateSubscriptionPayload {
  mutation: MutationType
  node?: OrderTemplate
  updatedFields?: String[]
  previousValues?: OrderTemplatePreviousValues
}

/*
 * An edge in a connection.

 */
export interface NotificationEdge {
  node: Notification
  cursor: String
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

/*
 * A connection to a list of items.

 */
export interface SupportPageConnection {
  pageInfo: PageInfo
  edges: SupportPageEdge[]
  aggregate: AggregateSupportPage
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

export interface AggregateComment {
  count: Int
}

export interface FilterOptionsSubscriptionPayload {
  mutation: MutationType
  node?: FilterOptions
  updatedFields?: String[]
  previousValues?: FilterOptionsPreviousValues
}

export interface AddressSubscriptionPayload {
  mutation: MutationType
  node?: Address
  updatedFields?: String[]
  previousValues?: AddressPreviousValues
}

export interface FilterOptionsPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  type?: FilterOptionsType
  storeType?: String
  size?: String
  currency?: String
}

export interface AggregateProperties {
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

/*
 * An edge in a connection.

 */
export interface ProductCategoryEdge {
  node: ProductCategory
  cursor: String
}

export interface OrderItemSubscriptionPayload {
  mutation: MutationType
  node?: OrderItem
  updatedFields?: String[]
  previousValues?: OrderItemPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface RoleConnection {
  pageInfo: PageInfo
  edges: RoleEdge[]
  aggregate: AggregateRole
}

export interface OrderItemPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  name?: String
  amount?: Int
  price?: Int
  currency?: String
}

/*
 * A connection to a list of items.

 */
export interface LanguageConnection {
  pageInfo: PageInfo
  edges: LanguageEdge[]
  aggregate: AggregateLanguage
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

/*
 * An edge in a connection.

 */
export interface BrandEdge {
  node: Brand
  cursor: String
}

export interface RolePermissionSubscriptionPayload {
  mutation: MutationType
  node?: RolePermission
  updatedFields?: String[]
  previousValues?: RolePermissionPreviousValues
}

export interface AggregateFilterOptions {
  count: Int
}

export interface RolePermissionPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt?: DateTime
  note?: String
  action: PermissionAction
  model: PermissionModel
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
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

/*
 * An edge in a connection.

 */
export interface SupplierEdge {
  node: Supplier
  cursor: String
}

export interface BrandSubscriptionPayload {
  mutation: MutationType
  node?: Brand
  updatedFields?: String[]
  previousValues?: BrandPreviousValues
}

/*
 * An edge in a connection.

 */
export interface OrderEdge {
  node: Order
  cursor: String
}

export interface BrandPreviousValues {
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
}

export interface AggregateRole {
  count: Int
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

export interface AggregateFile {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface OrderTemplateEdge {
  node: OrderTemplate
  cursor: String
}

export interface ProductSubscriptionPayload {
  mutation: MutationType
  node?: Product
  updatedFields?: String[]
  previousValues?: ProductPreviousValues
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

export interface FilePreviousValues {
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

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File
  updatedFields?: String[]
  previousValues?: FilePreviousValues
}

export interface AggregateSupportPage {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface RolePermissionConnection {
  pageInfo: PageInfo
  edges: RolePermissionEdge[]
  aggregate: AggregateRolePermission
}

/*
 * An edge in a connection.

 */
export interface StoreEdge {
  node: Store
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface PropertiesConnection {
  pageInfo: PageInfo
  edges: PropertiesEdge[]
  aggregate: AggregateProperties
}

/*
 * A connection to a list of items.

 */
export interface CommentConnection {
  pageInfo: PageInfo
  edges: CommentEdge[]
  aggregate: AggregateComment
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number

export type DateTime = Date | string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean