
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  email: string
  createdAt: Date
  password: string
  organizationId: string
}

/**
 * Model Organization
 * 
 */
export type Organization = {
  id: string
  name: string
}

/**
 * Model ApiKey
 * 
 */
export type ApiKey = {
  id: string
  createdAt: Date
  active: boolean
  organizationId: string
}

/**
 * Model Message
 * 
 */
export type Message = {
  id: string
  createdAt: Date
  to: string[]
  cc: string[]
  bcc: string[]
  subject: string | null
  from: string | null
  openedAt: Date | null
  openCount: number
  templateName: string | null
  previewName: string | null
}

/**
 * Model MessageContent
 * 
 */
export type MessageContent = {
  id: string
  createdAt: Date
  html: string | null
  messageId: string
}

/**
 * Model Click
 * 
 */
export type Click = {
  id: string
  createdAt: Date
  updatedAt: Date
  url: string
  count: number
  messageId: string
}

/**
 * Model List
 * 
 */
export type List = {
  id: string
  createdAt: Date
  updatedAt: Date
  isDefault: boolean
  name: string
  displayName: string
  organizationId: string
}

/**
 * Model Member
 * 
 */
export type Member = {
  id: string
  createdAt: Date
  updatedAt: Date
  email: string
  listId: string
  status: MemberStatus
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const MemberStatus: {
  subscribed: 'subscribed',
  unsubscribed: 'unsubscribed'
};

export type MemberStatus = (typeof MemberStatus)[keyof typeof MemberStatus]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<GlobalReject>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<GlobalReject>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<GlobalReject>;

  /**
   * `prisma.messageContent`: Exposes CRUD operations for the **MessageContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageContents
    * const messageContents = await prisma.messageContent.findMany()
    * ```
    */
  get messageContent(): Prisma.MessageContentDelegate<GlobalReject>;

  /**
   * `prisma.click`: Exposes CRUD operations for the **Click** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clicks
    * const clicks = await prisma.click.findMany()
    * ```
    */
  get click(): Prisma.ClickDelegate<GlobalReject>;

  /**
   * `prisma.list`: Exposes CRUD operations for the **List** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lists
    * const lists = await prisma.list.findMany()
    * ```
    */
  get list(): Prisma.ListDelegate<GlobalReject>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.4.0
   * Query Engine version: f352a33b70356f46311da8b00d83386dd9f145d6
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Organization: 'Organization',
    ApiKey: 'ApiKey',
    Message: 'Message',
    MessageContent: 'MessageContent',
    Click: 'Click',
    List: 'List',
    Member: 'Member'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */


  export type OrganizationCountOutputType = {
    User: number
    ApiKey: number
    List: number
  }

  export type OrganizationCountOutputTypeSelect = {
    User?: boolean
    ApiKey?: boolean
    List?: boolean
  }

  export type OrganizationCountOutputTypeGetPayload<
    S extends boolean | null | undefined | OrganizationCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? OrganizationCountOutputType
    : S extends undefined
    ? never
    : S extends OrganizationCountOutputTypeArgs
    ?'include' extends U
    ? OrganizationCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof OrganizationCountOutputType ? OrganizationCountOutputType[P] : never
  } 
    : OrganizationCountOutputType
  : OrganizationCountOutputType




  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     * 
    **/
    select?: OrganizationCountOutputTypeSelect | null
  }



  /**
   * Count Type MessageCountOutputType
   */


  export type MessageCountOutputType = {
    Click: number
  }

  export type MessageCountOutputTypeSelect = {
    Click?: boolean
  }

  export type MessageCountOutputTypeGetPayload<
    S extends boolean | null | undefined | MessageCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? MessageCountOutputType
    : S extends undefined
    ? never
    : S extends MessageCountOutputTypeArgs
    ?'include' extends U
    ? MessageCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MessageCountOutputType ? MessageCountOutputType[P] : never
  } 
    : MessageCountOutputType
  : MessageCountOutputType




  // Custom InputTypes

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     * 
    **/
    select?: MessageCountOutputTypeSelect | null
  }



  /**
   * Count Type ListCountOutputType
   */


  export type ListCountOutputType = {
    Member: number
  }

  export type ListCountOutputTypeSelect = {
    Member?: boolean
  }

  export type ListCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ListCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ListCountOutputType
    : S extends undefined
    ? never
    : S extends ListCountOutputTypeArgs
    ?'include' extends U
    ? ListCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ListCountOutputType ? ListCountOutputType[P] : never
  } 
    : ListCountOutputType
  : ListCountOutputType




  // Custom InputTypes

  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ListCountOutputType
     * 
    **/
    select?: ListCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    password: string | null
    organizationId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    password: string | null
    organizationId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    password: number
    organizationId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    password?: true
    organizationId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    password?: true
    organizationId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    password?: true
    organizationId?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    email: string
    createdAt: Date
    password: string
    organizationId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    password?: boolean
    organizationId?: boolean
    Organization?: boolean | OrganizationArgs
  }

  export type UserInclude = {
    Organization?: boolean | OrganizationArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Organization' ? OrganizationGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Organization' ? OrganizationGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null, null>, Prisma__UserClient<UserGetPayload<T> | null, null>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null, null>, Prisma__UserClient<UserGetPayload<T> | null, null>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Organization<T extends OrganizationArgs = {}>(args?: Subset<T, OrganizationArgs>): CheckSelect<T, Prisma__OrganizationClient<Organization | Null>, Prisma__OrganizationClient<OrganizationGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Organization
   */


  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type OrganizationAggregateArgs = {
    /**
     * Filter which Organization to aggregate.
     * 
    **/
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     * 
    **/
    orderBy?: Enumerable<OrganizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs = {
    where?: OrganizationWhereInput
    orderBy?: Enumerable<OrganizationOrderByWithAggregationInput>
    by: Array<OrganizationScalarFieldEnum>
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }


  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect = {
    id?: boolean
    name?: boolean
    User?: boolean | UserFindManyArgs
    ApiKey?: boolean | ApiKeyFindManyArgs
    List?: boolean | ListFindManyArgs
    _count?: boolean | OrganizationCountOutputTypeArgs
  }

  export type OrganizationInclude = {
    User?: boolean | UserFindManyArgs
    ApiKey?: boolean | ApiKeyFindManyArgs
    List?: boolean | ListFindManyArgs
    _count?: boolean | OrganizationCountOutputTypeArgs
  }

  export type OrganizationGetPayload<
    S extends boolean | null | undefined | OrganizationArgs,
    U = keyof S
      > = S extends true
        ? Organization
    : S extends undefined
    ? never
    : S extends OrganizationArgs | OrganizationFindManyArgs
    ?'include' extends U
    ? Organization  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? Array < UserGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'ApiKey' ? Array < ApiKeyGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'List' ? Array < ListGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? OrganizationCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? Array < UserGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'ApiKey' ? Array < ApiKeyGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'List' ? Array < ListGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? OrganizationCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Organization ? Organization[P] : never
  } 
    : Organization
  : Organization


  type OrganizationCountArgs = Merge<
    Omit<OrganizationFindManyArgs, 'select' | 'include'> & {
      select?: OrganizationCountAggregateInputType | true
    }
  >

  export interface OrganizationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrganizationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrganizationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Organization'> extends True ? CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>> : CheckSelect<T, Prisma__OrganizationClient<Organization | null, null>, Prisma__OrganizationClient<OrganizationGetPayload<T> | null, null>>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrganizationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrganizationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Organization'> extends True ? CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>> : CheckSelect<T, Prisma__OrganizationClient<Organization | null, null>, Prisma__OrganizationClient<OrganizationGetPayload<T> | null, null>>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrganizationFindManyArgs>(
      args?: SelectSubset<T, OrganizationFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Organization>>, PrismaPromise<Array<OrganizationGetPayload<T>>>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
    **/
    create<T extends OrganizationCreateArgs>(
      args: SelectSubset<T, OrganizationCreateArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Create many Organizations.
     *     @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrganizationCreateManyArgs>(
      args?: SelectSubset<T, OrganizationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
    **/
    delete<T extends OrganizationDeleteArgs>(
      args: SelectSubset<T, OrganizationDeleteArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrganizationUpdateArgs>(
      args: SelectSubset<T, OrganizationUpdateArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrganizationDeleteManyArgs>(
      args?: SelectSubset<T, OrganizationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrganizationUpdateManyArgs>(
      args: SelectSubset<T, OrganizationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
    **/
    upsert<T extends OrganizationUpsertArgs>(
      args: SelectSubset<T, OrganizationUpsertArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Find one Organization that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OrganizationFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Find the first Organization that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrganizationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>| Null>, PrismaPromise<Array<UserGetPayload<T>>| Null>>;

    ApiKey<T extends ApiKeyFindManyArgs = {}>(args?: Subset<T, ApiKeyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ApiKey>| Null>, PrismaPromise<Array<ApiKeyGetPayload<T>>| Null>>;

    List<T extends ListFindManyArgs = {}>(args?: Subset<T, ListFindManyArgs>): CheckSelect<T, PrismaPromise<Array<List>| Null>, PrismaPromise<Array<ListGetPayload<T>>| Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Organization base type for findUnique actions
   */
  export type OrganizationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * Filter, which Organization to fetch.
     * 
    **/
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization: findUnique
   */
  export interface OrganizationFindUniqueArgs extends OrganizationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Organization base type for findFirst actions
   */
  export type OrganizationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * Filter, which Organization to fetch.
     * 
    **/
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     * 
    **/
    orderBy?: Enumerable<OrganizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     * 
    **/
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     * 
    **/
    distinct?: Enumerable<OrganizationScalarFieldEnum>
  }

  /**
   * Organization: findFirst
   */
  export interface OrganizationFindFirstArgs extends OrganizationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * Filter, which Organizations to fetch.
     * 
    **/
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     * 
    **/
    orderBy?: Enumerable<OrganizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     * 
    **/
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OrganizationScalarFieldEnum>
  }


  /**
   * Organization create
   */
  export type OrganizationCreateArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * The data needed to create a Organization.
     * 
    **/
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }


  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs = {
    /**
     * The data used to create many Organizations.
     * 
    **/
    data: Enumerable<OrganizationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Organization update
   */
  export type OrganizationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * The data needed to update a Organization.
     * 
    **/
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     * 
    **/
    where: OrganizationWhereUniqueInput
  }


  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs = {
    /**
     * The data used to update Organizations.
     * 
    **/
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     * 
    **/
    where?: OrganizationWhereInput
  }


  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * The filter to search for the Organization to update in case it exists.
     * 
    **/
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     * 
    **/
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }


  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * Filter which Organization to delete.
     * 
    **/
    where: OrganizationWhereUniqueInput
  }


  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs = {
    /**
     * Filter which Organizations to delete
     * 
    **/
    where?: OrganizationWhereInput
  }


  /**
   * Organization: findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs = OrganizationFindUniqueArgsBase
      

  /**
   * Organization: findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs = OrganizationFindFirstArgsBase
      

  /**
   * Organization without action
   */
  export type OrganizationArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
  }



  /**
   * Model ApiKey
   */


  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    active: boolean | null
    organizationId: string | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    active: boolean | null
    organizationId: string | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    createdAt: number
    active: number
    organizationId: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    createdAt?: true
    active?: true
    organizationId?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    createdAt?: true
    active?: true
    organizationId?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    createdAt?: true
    active?: true
    organizationId?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs = {
    /**
     * Filter which ApiKey to aggregate.
     * 
    **/
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     * 
    **/
    orderBy?: Enumerable<ApiKeyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs = {
    where?: ApiKeyWhereInput
    orderBy?: Enumerable<ApiKeyOrderByWithAggregationInput>
    by: Array<ApiKeyScalarFieldEnum>
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }


  export type ApiKeyGroupByOutputType = {
    id: string
    createdAt: Date
    active: boolean
    organizationId: string
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect = {
    id?: boolean
    createdAt?: boolean
    active?: boolean
    organizationId?: boolean
    Organization?: boolean | OrganizationArgs
  }

  export type ApiKeyInclude = {
    Organization?: boolean | OrganizationArgs
  }

  export type ApiKeyGetPayload<
    S extends boolean | null | undefined | ApiKeyArgs,
    U = keyof S
      > = S extends true
        ? ApiKey
    : S extends undefined
    ? never
    : S extends ApiKeyArgs | ApiKeyFindManyArgs
    ?'include' extends U
    ? ApiKey  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Organization' ? OrganizationGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Organization' ? OrganizationGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof ApiKey ? ApiKey[P] : never
  } 
    : ApiKey
  : ApiKey


  type ApiKeyCountArgs = Merge<
    Omit<ApiKeyFindManyArgs, 'select' | 'include'> & {
      select?: ApiKeyCountAggregateInputType | true
    }
  >

  export interface ApiKeyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApiKeyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ApiKeyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ApiKey'> extends True ? CheckSelect<T, Prisma__ApiKeyClient<ApiKey>, Prisma__ApiKeyClient<ApiKeyGetPayload<T>>> : CheckSelect<T, Prisma__ApiKeyClient<ApiKey | null, null>, Prisma__ApiKeyClient<ApiKeyGetPayload<T> | null, null>>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApiKeyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ApiKeyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ApiKey'> extends True ? CheckSelect<T, Prisma__ApiKeyClient<ApiKey>, Prisma__ApiKeyClient<ApiKeyGetPayload<T>>> : CheckSelect<T, Prisma__ApiKeyClient<ApiKey | null, null>, Prisma__ApiKeyClient<ApiKeyGetPayload<T> | null, null>>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ApiKeyFindManyArgs>(
      args?: SelectSubset<T, ApiKeyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ApiKey>>, PrismaPromise<Array<ApiKeyGetPayload<T>>>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
    **/
    create<T extends ApiKeyCreateArgs>(
      args: SelectSubset<T, ApiKeyCreateArgs>
    ): CheckSelect<T, Prisma__ApiKeyClient<ApiKey>, Prisma__ApiKeyClient<ApiKeyGetPayload<T>>>

    /**
     * Create many ApiKeys.
     *     @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     *     @example
     *     // Create many ApiKeys
     *     const apiKey = await prisma.apiKey.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ApiKeyCreateManyArgs>(
      args?: SelectSubset<T, ApiKeyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
    **/
    delete<T extends ApiKeyDeleteArgs>(
      args: SelectSubset<T, ApiKeyDeleteArgs>
    ): CheckSelect<T, Prisma__ApiKeyClient<ApiKey>, Prisma__ApiKeyClient<ApiKeyGetPayload<T>>>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApiKeyUpdateArgs>(
      args: SelectSubset<T, ApiKeyUpdateArgs>
    ): CheckSelect<T, Prisma__ApiKeyClient<ApiKey>, Prisma__ApiKeyClient<ApiKeyGetPayload<T>>>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApiKeyDeleteManyArgs>(
      args?: SelectSubset<T, ApiKeyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApiKeyUpdateManyArgs>(
      args: SelectSubset<T, ApiKeyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
    **/
    upsert<T extends ApiKeyUpsertArgs>(
      args: SelectSubset<T, ApiKeyUpsertArgs>
    ): CheckSelect<T, Prisma__ApiKeyClient<ApiKey>, Prisma__ApiKeyClient<ApiKeyGetPayload<T>>>

    /**
     * Find one ApiKey that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ApiKeyClient<ApiKey>, Prisma__ApiKeyClient<ApiKeyGetPayload<T>>>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ApiKeyClient<ApiKey>, Prisma__ApiKeyClient<ApiKeyGetPayload<T>>>

    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ApiKeyClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Organization<T extends OrganizationArgs = {}>(args?: Subset<T, OrganizationArgs>): CheckSelect<T, Prisma__OrganizationClient<Organization | Null>, Prisma__OrganizationClient<OrganizationGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ApiKey base type for findUnique actions
   */
  export type ApiKeyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ApiKey
     * 
    **/
    select?: ApiKeySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApiKeyInclude | null
    /**
     * Filter, which ApiKey to fetch.
     * 
    **/
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey: findUnique
   */
  export interface ApiKeyFindUniqueArgs extends ApiKeyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ApiKey base type for findFirst actions
   */
  export type ApiKeyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ApiKey
     * 
    **/
    select?: ApiKeySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApiKeyInclude | null
    /**
     * Filter, which ApiKey to fetch.
     * 
    **/
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     * 
    **/
    orderBy?: Enumerable<ApiKeyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     * 
    **/
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     * 
    **/
    distinct?: Enumerable<ApiKeyScalarFieldEnum>
  }

  /**
   * ApiKey: findFirst
   */
  export interface ApiKeyFindFirstArgs extends ApiKeyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs = {
    /**
     * Select specific fields to fetch from the ApiKey
     * 
    **/
    select?: ApiKeySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApiKeyInclude | null
    /**
     * Filter, which ApiKeys to fetch.
     * 
    **/
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     * 
    **/
    orderBy?: Enumerable<ApiKeyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     * 
    **/
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ApiKeyScalarFieldEnum>
  }


  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs = {
    /**
     * Select specific fields to fetch from the ApiKey
     * 
    **/
    select?: ApiKeySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApiKeyInclude | null
    /**
     * The data needed to create a ApiKey.
     * 
    **/
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }


  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs = {
    /**
     * The data used to create many ApiKeys.
     * 
    **/
    data: Enumerable<ApiKeyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs = {
    /**
     * Select specific fields to fetch from the ApiKey
     * 
    **/
    select?: ApiKeySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApiKeyInclude | null
    /**
     * The data needed to update a ApiKey.
     * 
    **/
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     * 
    **/
    where: ApiKeyWhereUniqueInput
  }


  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs = {
    /**
     * The data used to update ApiKeys.
     * 
    **/
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     * 
    **/
    where?: ApiKeyWhereInput
  }


  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs = {
    /**
     * Select specific fields to fetch from the ApiKey
     * 
    **/
    select?: ApiKeySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApiKeyInclude | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     * 
    **/
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     * 
    **/
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }


  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs = {
    /**
     * Select specific fields to fetch from the ApiKey
     * 
    **/
    select?: ApiKeySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApiKeyInclude | null
    /**
     * Filter which ApiKey to delete.
     * 
    **/
    where: ApiKeyWhereUniqueInput
  }


  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs = {
    /**
     * Filter which ApiKeys to delete
     * 
    **/
    where?: ApiKeyWhereInput
  }


  /**
   * ApiKey: findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs = ApiKeyFindUniqueArgsBase
      

  /**
   * ApiKey: findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs = ApiKeyFindFirstArgsBase
      

  /**
   * ApiKey without action
   */
  export type ApiKeyArgs = {
    /**
     * Select specific fields to fetch from the ApiKey
     * 
    **/
    select?: ApiKeySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApiKeyInclude | null
  }



  /**
   * Model Message
   */


  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    openCount: number | null
  }

  export type MessageSumAggregateOutputType = {
    openCount: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    subject: string | null
    from: string | null
    openedAt: Date | null
    openCount: number | null
    templateName: string | null
    previewName: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    subject: string | null
    from: string | null
    openedAt: Date | null
    openCount: number | null
    templateName: string | null
    previewName: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    createdAt: number
    to: number
    cc: number
    bcc: number
    subject: number
    from: number
    openedAt: number
    openCount: number
    templateName: number
    previewName: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    openCount?: true
  }

  export type MessageSumAggregateInputType = {
    openCount?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    createdAt?: true
    subject?: true
    from?: true
    openedAt?: true
    openCount?: true
    templateName?: true
    previewName?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    subject?: true
    from?: true
    openedAt?: true
    openCount?: true
    templateName?: true
    previewName?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    createdAt?: true
    to?: true
    cc?: true
    bcc?: true
    subject?: true
    from?: true
    openedAt?: true
    openCount?: true
    templateName?: true
    previewName?: true
    _all?: true
  }

  export type MessageAggregateArgs = {
    /**
     * Filter which Message to aggregate.
     * 
    **/
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs = {
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithAggregationInput>
    by: Array<MessageScalarFieldEnum>
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }


  export type MessageGroupByOutputType = {
    id: string
    createdAt: Date
    to: string[]
    cc: string[]
    bcc: string[]
    subject: string | null
    from: string | null
    openedAt: Date | null
    openCount: number
    templateName: string | null
    previewName: string | null
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect = {
    id?: boolean
    createdAt?: boolean
    to?: boolean
    cc?: boolean
    bcc?: boolean
    subject?: boolean
    from?: boolean
    openedAt?: boolean
    openCount?: boolean
    templateName?: boolean
    previewName?: boolean
    Click?: boolean | ClickFindManyArgs
    MessageContent?: boolean | MessageContentArgs
    _count?: boolean | MessageCountOutputTypeArgs
  }

  export type MessageInclude = {
    Click?: boolean | ClickFindManyArgs
    MessageContent?: boolean | MessageContentArgs
    _count?: boolean | MessageCountOutputTypeArgs
  }

  export type MessageGetPayload<
    S extends boolean | null | undefined | MessageArgs,
    U = keyof S
      > = S extends true
        ? Message
    : S extends undefined
    ? never
    : S extends MessageArgs | MessageFindManyArgs
    ?'include' extends U
    ? Message  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Click' ? Array < ClickGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'MessageContent' ? MessageContentGetPayload<Exclude<S['include'], undefined | null>[P]> | null :
        P extends '_count' ? MessageCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Click' ? Array < ClickGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'MessageContent' ? MessageContentGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends '_count' ? MessageCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Message ? Message[P] : never
  } 
    : Message
  : Message


  type MessageCountArgs = Merge<
    Omit<MessageFindManyArgs, 'select' | 'include'> & {
      select?: MessageCountAggregateInputType | true
    }
  >

  export interface MessageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MessageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Message'> extends True ? CheckSelect<T, Prisma__MessageClient<Message>, Prisma__MessageClient<MessageGetPayload<T>>> : CheckSelect<T, Prisma__MessageClient<Message | null, null>, Prisma__MessageClient<MessageGetPayload<T> | null, null>>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MessageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Message'> extends True ? CheckSelect<T, Prisma__MessageClient<Message>, Prisma__MessageClient<MessageGetPayload<T>>> : CheckSelect<T, Prisma__MessageClient<Message | null, null>, Prisma__MessageClient<MessageGetPayload<T> | null, null>>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageFindManyArgs>(
      args?: SelectSubset<T, MessageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Message>>, PrismaPromise<Array<MessageGetPayload<T>>>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
    **/
    create<T extends MessageCreateArgs>(
      args: SelectSubset<T, MessageCreateArgs>
    ): CheckSelect<T, Prisma__MessageClient<Message>, Prisma__MessageClient<MessageGetPayload<T>>>

    /**
     * Create many Messages.
     *     @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const message = await prisma.message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageCreateManyArgs>(
      args?: SelectSubset<T, MessageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
    **/
    delete<T extends MessageDeleteArgs>(
      args: SelectSubset<T, MessageDeleteArgs>
    ): CheckSelect<T, Prisma__MessageClient<Message>, Prisma__MessageClient<MessageGetPayload<T>>>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageUpdateArgs>(
      args: SelectSubset<T, MessageUpdateArgs>
    ): CheckSelect<T, Prisma__MessageClient<Message>, Prisma__MessageClient<MessageGetPayload<T>>>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageDeleteManyArgs>(
      args?: SelectSubset<T, MessageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageUpdateManyArgs>(
      args: SelectSubset<T, MessageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
    **/
    upsert<T extends MessageUpsertArgs>(
      args: SelectSubset<T, MessageUpsertArgs>
    ): CheckSelect<T, Prisma__MessageClient<Message>, Prisma__MessageClient<MessageGetPayload<T>>>

    /**
     * Find one Message that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__MessageClient<Message>, Prisma__MessageClient<MessageGetPayload<T>>>

    /**
     * Find the first Message that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__MessageClient<Message>, Prisma__MessageClient<MessageGetPayload<T>>>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MessageClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Click<T extends ClickFindManyArgs = {}>(args?: Subset<T, ClickFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Click>| Null>, PrismaPromise<Array<ClickGetPayload<T>>| Null>>;

    MessageContent<T extends MessageContentArgs = {}>(args?: Subset<T, MessageContentArgs>): CheckSelect<T, Prisma__MessageContentClient<MessageContent | Null>, Prisma__MessageContentClient<MessageContentGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Message base type for findUnique actions
   */
  export type MessageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     * 
    **/
    where: MessageWhereUniqueInput
  }

  /**
   * Message: findUnique
   */
  export interface MessageFindUniqueArgs extends MessageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Message base type for findFirst actions
   */
  export type MessageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     * 
    **/
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     * 
    **/
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     * 
    **/
    distinct?: Enumerable<MessageScalarFieldEnum>
  }

  /**
   * Message: findFirst
   */
  export interface MessageFindFirstArgs extends MessageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Message findMany
   */
  export type MessageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter, which Messages to fetch.
     * 
    **/
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     * 
    **/
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Message create
   */
  export type MessageCreateArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * The data needed to create a Message.
     * 
    **/
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message createMany
   */
  export type MessageCreateManyArgs = {
    /**
     * The data used to create many Messages.
     * 
    **/
    data: Enumerable<MessageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * The data needed to update a Message.
     * 
    **/
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     * 
    **/
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs = {
    /**
     * The data used to update Messages.
     * 
    **/
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     * 
    **/
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * The filter to search for the Message to update in case it exists.
     * 
    **/
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     * 
    **/
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter which Message to delete.
     * 
    **/
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs = {
    /**
     * Filter which Messages to delete
     * 
    **/
    where?: MessageWhereInput
  }


  /**
   * Message: findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs = MessageFindUniqueArgsBase
      

  /**
   * Message: findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs = MessageFindFirstArgsBase
      

  /**
   * Message without action
   */
  export type MessageArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
  }



  /**
   * Model MessageContent
   */


  export type AggregateMessageContent = {
    _count: MessageContentCountAggregateOutputType | null
    _min: MessageContentMinAggregateOutputType | null
    _max: MessageContentMaxAggregateOutputType | null
  }

  export type MessageContentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    html: string | null
    messageId: string | null
  }

  export type MessageContentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    html: string | null
    messageId: string | null
  }

  export type MessageContentCountAggregateOutputType = {
    id: number
    createdAt: number
    html: number
    messageId: number
    _all: number
  }


  export type MessageContentMinAggregateInputType = {
    id?: true
    createdAt?: true
    html?: true
    messageId?: true
  }

  export type MessageContentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    html?: true
    messageId?: true
  }

  export type MessageContentCountAggregateInputType = {
    id?: true
    createdAt?: true
    html?: true
    messageId?: true
    _all?: true
  }

  export type MessageContentAggregateArgs = {
    /**
     * Filter which MessageContent to aggregate.
     * 
    **/
    where?: MessageContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageContents to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MessageContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageContents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageContents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageContents
    **/
    _count?: true | MessageContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageContentMaxAggregateInputType
  }

  export type GetMessageContentAggregateType<T extends MessageContentAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageContent[P]>
      : GetScalarType<T[P], AggregateMessageContent[P]>
  }




  export type MessageContentGroupByArgs = {
    where?: MessageContentWhereInput
    orderBy?: Enumerable<MessageContentOrderByWithAggregationInput>
    by: Array<MessageContentScalarFieldEnum>
    having?: MessageContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageContentCountAggregateInputType | true
    _min?: MessageContentMinAggregateInputType
    _max?: MessageContentMaxAggregateInputType
  }


  export type MessageContentGroupByOutputType = {
    id: string
    createdAt: Date
    html: string | null
    messageId: string
    _count: MessageContentCountAggregateOutputType | null
    _min: MessageContentMinAggregateOutputType | null
    _max: MessageContentMaxAggregateOutputType | null
  }

  type GetMessageContentGroupByPayload<T extends MessageContentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MessageContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageContentGroupByOutputType[P]>
            : GetScalarType<T[P], MessageContentGroupByOutputType[P]>
        }
      >
    >


  export type MessageContentSelect = {
    id?: boolean
    createdAt?: boolean
    html?: boolean
    messageId?: boolean
    Message?: boolean | MessageArgs
  }

  export type MessageContentInclude = {
    Message?: boolean | MessageArgs
  }

  export type MessageContentGetPayload<
    S extends boolean | null | undefined | MessageContentArgs,
    U = keyof S
      > = S extends true
        ? MessageContent
    : S extends undefined
    ? never
    : S extends MessageContentArgs | MessageContentFindManyArgs
    ?'include' extends U
    ? MessageContent  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Message' ? MessageGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Message' ? MessageGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof MessageContent ? MessageContent[P] : never
  } 
    : MessageContent
  : MessageContent


  type MessageContentCountArgs = Merge<
    Omit<MessageContentFindManyArgs, 'select' | 'include'> & {
      select?: MessageContentCountAggregateInputType | true
    }
  >

  export interface MessageContentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one MessageContent that matches the filter.
     * @param {MessageContentFindUniqueArgs} args - Arguments to find a MessageContent
     * @example
     * // Get one MessageContent
     * const messageContent = await prisma.messageContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageContentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MessageContentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MessageContent'> extends True ? CheckSelect<T, Prisma__MessageContentClient<MessageContent>, Prisma__MessageContentClient<MessageContentGetPayload<T>>> : CheckSelect<T, Prisma__MessageContentClient<MessageContent | null, null>, Prisma__MessageContentClient<MessageContentGetPayload<T> | null, null>>

    /**
     * Find the first MessageContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageContentFindFirstArgs} args - Arguments to find a MessageContent
     * @example
     * // Get one MessageContent
     * const messageContent = await prisma.messageContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageContentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MessageContentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MessageContent'> extends True ? CheckSelect<T, Prisma__MessageContentClient<MessageContent>, Prisma__MessageContentClient<MessageContentGetPayload<T>>> : CheckSelect<T, Prisma__MessageContentClient<MessageContent | null, null>, Prisma__MessageContentClient<MessageContentGetPayload<T> | null, null>>

    /**
     * Find zero or more MessageContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageContentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageContents
     * const messageContents = await prisma.messageContent.findMany()
     * 
     * // Get first 10 MessageContents
     * const messageContents = await prisma.messageContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageContentWithIdOnly = await prisma.messageContent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageContentFindManyArgs>(
      args?: SelectSubset<T, MessageContentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<MessageContent>>, PrismaPromise<Array<MessageContentGetPayload<T>>>>

    /**
     * Create a MessageContent.
     * @param {MessageContentCreateArgs} args - Arguments to create a MessageContent.
     * @example
     * // Create one MessageContent
     * const MessageContent = await prisma.messageContent.create({
     *   data: {
     *     // ... data to create a MessageContent
     *   }
     * })
     * 
    **/
    create<T extends MessageContentCreateArgs>(
      args: SelectSubset<T, MessageContentCreateArgs>
    ): CheckSelect<T, Prisma__MessageContentClient<MessageContent>, Prisma__MessageContentClient<MessageContentGetPayload<T>>>

    /**
     * Create many MessageContents.
     *     @param {MessageContentCreateManyArgs} args - Arguments to create many MessageContents.
     *     @example
     *     // Create many MessageContents
     *     const messageContent = await prisma.messageContent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageContentCreateManyArgs>(
      args?: SelectSubset<T, MessageContentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a MessageContent.
     * @param {MessageContentDeleteArgs} args - Arguments to delete one MessageContent.
     * @example
     * // Delete one MessageContent
     * const MessageContent = await prisma.messageContent.delete({
     *   where: {
     *     // ... filter to delete one MessageContent
     *   }
     * })
     * 
    **/
    delete<T extends MessageContentDeleteArgs>(
      args: SelectSubset<T, MessageContentDeleteArgs>
    ): CheckSelect<T, Prisma__MessageContentClient<MessageContent>, Prisma__MessageContentClient<MessageContentGetPayload<T>>>

    /**
     * Update one MessageContent.
     * @param {MessageContentUpdateArgs} args - Arguments to update one MessageContent.
     * @example
     * // Update one MessageContent
     * const messageContent = await prisma.messageContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageContentUpdateArgs>(
      args: SelectSubset<T, MessageContentUpdateArgs>
    ): CheckSelect<T, Prisma__MessageContentClient<MessageContent>, Prisma__MessageContentClient<MessageContentGetPayload<T>>>

    /**
     * Delete zero or more MessageContents.
     * @param {MessageContentDeleteManyArgs} args - Arguments to filter MessageContents to delete.
     * @example
     * // Delete a few MessageContents
     * const { count } = await prisma.messageContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageContentDeleteManyArgs>(
      args?: SelectSubset<T, MessageContentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageContents
     * const messageContent = await prisma.messageContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageContentUpdateManyArgs>(
      args: SelectSubset<T, MessageContentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one MessageContent.
     * @param {MessageContentUpsertArgs} args - Arguments to update or create a MessageContent.
     * @example
     * // Update or create a MessageContent
     * const messageContent = await prisma.messageContent.upsert({
     *   create: {
     *     // ... data to create a MessageContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageContent we want to update
     *   }
     * })
    **/
    upsert<T extends MessageContentUpsertArgs>(
      args: SelectSubset<T, MessageContentUpsertArgs>
    ): CheckSelect<T, Prisma__MessageContentClient<MessageContent>, Prisma__MessageContentClient<MessageContentGetPayload<T>>>

    /**
     * Find one MessageContent that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {MessageContentFindUniqueOrThrowArgs} args - Arguments to find a MessageContent
     * @example
     * // Get one MessageContent
     * const messageContent = await prisma.messageContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageContentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MessageContentFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__MessageContentClient<MessageContent>, Prisma__MessageContentClient<MessageContentGetPayload<T>>>

    /**
     * Find the first MessageContent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageContentFindFirstOrThrowArgs} args - Arguments to find a MessageContent
     * @example
     * // Get one MessageContent
     * const messageContent = await prisma.messageContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageContentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MessageContentFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__MessageContentClient<MessageContent>, Prisma__MessageContentClient<MessageContentGetPayload<T>>>

    /**
     * Count the number of MessageContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageContentCountArgs} args - Arguments to filter MessageContents to count.
     * @example
     * // Count the number of MessageContents
     * const count = await prisma.messageContent.count({
     *   where: {
     *     // ... the filter for the MessageContents we want to count
     *   }
     * })
    **/
    count<T extends MessageContentCountArgs>(
      args?: Subset<T, MessageContentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageContentAggregateArgs>(args: Subset<T, MessageContentAggregateArgs>): PrismaPromise<GetMessageContentAggregateType<T>>

    /**
     * Group by MessageContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageContentGroupByArgs['orderBy'] }
        : { orderBy?: MessageContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageContentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MessageContentClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Message<T extends MessageArgs = {}>(args?: Subset<T, MessageArgs>): CheckSelect<T, Prisma__MessageClient<Message | Null>, Prisma__MessageClient<MessageGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MessageContent base type for findUnique actions
   */
  export type MessageContentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the MessageContent
     * 
    **/
    select?: MessageContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageContentInclude | null
    /**
     * Filter, which MessageContent to fetch.
     * 
    **/
    where: MessageContentWhereUniqueInput
  }

  /**
   * MessageContent: findUnique
   */
  export interface MessageContentFindUniqueArgs extends MessageContentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MessageContent base type for findFirst actions
   */
  export type MessageContentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the MessageContent
     * 
    **/
    select?: MessageContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageContentInclude | null
    /**
     * Filter, which MessageContent to fetch.
     * 
    **/
    where?: MessageContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageContents to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageContents.
     * 
    **/
    cursor?: MessageContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageContents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageContents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageContents.
     * 
    **/
    distinct?: Enumerable<MessageContentScalarFieldEnum>
  }

  /**
   * MessageContent: findFirst
   */
  export interface MessageContentFindFirstArgs extends MessageContentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MessageContent findMany
   */
  export type MessageContentFindManyArgs = {
    /**
     * Select specific fields to fetch from the MessageContent
     * 
    **/
    select?: MessageContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageContentInclude | null
    /**
     * Filter, which MessageContents to fetch.
     * 
    **/
    where?: MessageContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageContents to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageContents.
     * 
    **/
    cursor?: MessageContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageContents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageContents.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MessageContentScalarFieldEnum>
  }


  /**
   * MessageContent create
   */
  export type MessageContentCreateArgs = {
    /**
     * Select specific fields to fetch from the MessageContent
     * 
    **/
    select?: MessageContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageContentInclude | null
    /**
     * The data needed to create a MessageContent.
     * 
    **/
    data: XOR<MessageContentCreateInput, MessageContentUncheckedCreateInput>
  }


  /**
   * MessageContent createMany
   */
  export type MessageContentCreateManyArgs = {
    /**
     * The data used to create many MessageContents.
     * 
    **/
    data: Enumerable<MessageContentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * MessageContent update
   */
  export type MessageContentUpdateArgs = {
    /**
     * Select specific fields to fetch from the MessageContent
     * 
    **/
    select?: MessageContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageContentInclude | null
    /**
     * The data needed to update a MessageContent.
     * 
    **/
    data: XOR<MessageContentUpdateInput, MessageContentUncheckedUpdateInput>
    /**
     * Choose, which MessageContent to update.
     * 
    **/
    where: MessageContentWhereUniqueInput
  }


  /**
   * MessageContent updateMany
   */
  export type MessageContentUpdateManyArgs = {
    /**
     * The data used to update MessageContents.
     * 
    **/
    data: XOR<MessageContentUpdateManyMutationInput, MessageContentUncheckedUpdateManyInput>
    /**
     * Filter which MessageContents to update
     * 
    **/
    where?: MessageContentWhereInput
  }


  /**
   * MessageContent upsert
   */
  export type MessageContentUpsertArgs = {
    /**
     * Select specific fields to fetch from the MessageContent
     * 
    **/
    select?: MessageContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageContentInclude | null
    /**
     * The filter to search for the MessageContent to update in case it exists.
     * 
    **/
    where: MessageContentWhereUniqueInput
    /**
     * In case the MessageContent found by the `where` argument doesn't exist, create a new MessageContent with this data.
     * 
    **/
    create: XOR<MessageContentCreateInput, MessageContentUncheckedCreateInput>
    /**
     * In case the MessageContent was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MessageContentUpdateInput, MessageContentUncheckedUpdateInput>
  }


  /**
   * MessageContent delete
   */
  export type MessageContentDeleteArgs = {
    /**
     * Select specific fields to fetch from the MessageContent
     * 
    **/
    select?: MessageContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageContentInclude | null
    /**
     * Filter which MessageContent to delete.
     * 
    **/
    where: MessageContentWhereUniqueInput
  }


  /**
   * MessageContent deleteMany
   */
  export type MessageContentDeleteManyArgs = {
    /**
     * Filter which MessageContents to delete
     * 
    **/
    where?: MessageContentWhereInput
  }


  /**
   * MessageContent: findUniqueOrThrow
   */
  export type MessageContentFindUniqueOrThrowArgs = MessageContentFindUniqueArgsBase
      

  /**
   * MessageContent: findFirstOrThrow
   */
  export type MessageContentFindFirstOrThrowArgs = MessageContentFindFirstArgsBase
      

  /**
   * MessageContent without action
   */
  export type MessageContentArgs = {
    /**
     * Select specific fields to fetch from the MessageContent
     * 
    **/
    select?: MessageContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageContentInclude | null
  }



  /**
   * Model Click
   */


  export type AggregateClick = {
    _count: ClickCountAggregateOutputType | null
    _avg: ClickAvgAggregateOutputType | null
    _sum: ClickSumAggregateOutputType | null
    _min: ClickMinAggregateOutputType | null
    _max: ClickMaxAggregateOutputType | null
  }

  export type ClickAvgAggregateOutputType = {
    count: number | null
  }

  export type ClickSumAggregateOutputType = {
    count: number | null
  }

  export type ClickMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
    count: number | null
    messageId: string | null
  }

  export type ClickMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
    count: number | null
    messageId: string | null
  }

  export type ClickCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    url: number
    count: number
    messageId: number
    _all: number
  }


  export type ClickAvgAggregateInputType = {
    count?: true
  }

  export type ClickSumAggregateInputType = {
    count?: true
  }

  export type ClickMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    count?: true
    messageId?: true
  }

  export type ClickMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    count?: true
    messageId?: true
  }

  export type ClickCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    count?: true
    messageId?: true
    _all?: true
  }

  export type ClickAggregateArgs = {
    /**
     * Filter which Click to aggregate.
     * 
    **/
    where?: ClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clicks to fetch.
     * 
    **/
    orderBy?: Enumerable<ClickOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clicks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clicks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clicks
    **/
    _count?: true | ClickCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClickAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClickSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClickMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClickMaxAggregateInputType
  }

  export type GetClickAggregateType<T extends ClickAggregateArgs> = {
        [P in keyof T & keyof AggregateClick]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClick[P]>
      : GetScalarType<T[P], AggregateClick[P]>
  }




  export type ClickGroupByArgs = {
    where?: ClickWhereInput
    orderBy?: Enumerable<ClickOrderByWithAggregationInput>
    by: Array<ClickScalarFieldEnum>
    having?: ClickScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClickCountAggregateInputType | true
    _avg?: ClickAvgAggregateInputType
    _sum?: ClickSumAggregateInputType
    _min?: ClickMinAggregateInputType
    _max?: ClickMaxAggregateInputType
  }


  export type ClickGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    url: string
    count: number
    messageId: string
    _count: ClickCountAggregateOutputType | null
    _avg: ClickAvgAggregateOutputType | null
    _sum: ClickSumAggregateOutputType | null
    _min: ClickMinAggregateOutputType | null
    _max: ClickMaxAggregateOutputType | null
  }

  type GetClickGroupByPayload<T extends ClickGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ClickGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClickGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClickGroupByOutputType[P]>
            : GetScalarType<T[P], ClickGroupByOutputType[P]>
        }
      >
    >


  export type ClickSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    count?: boolean
    messageId?: boolean
    Message?: boolean | MessageArgs
  }

  export type ClickInclude = {
    Message?: boolean | MessageArgs
  }

  export type ClickGetPayload<
    S extends boolean | null | undefined | ClickArgs,
    U = keyof S
      > = S extends true
        ? Click
    : S extends undefined
    ? never
    : S extends ClickArgs | ClickFindManyArgs
    ?'include' extends U
    ? Click  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Message' ? MessageGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Message' ? MessageGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Click ? Click[P] : never
  } 
    : Click
  : Click


  type ClickCountArgs = Merge<
    Omit<ClickFindManyArgs, 'select' | 'include'> & {
      select?: ClickCountAggregateInputType | true
    }
  >

  export interface ClickDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Click that matches the filter.
     * @param {ClickFindUniqueArgs} args - Arguments to find a Click
     * @example
     * // Get one Click
     * const click = await prisma.click.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClickFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClickFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Click'> extends True ? CheckSelect<T, Prisma__ClickClient<Click>, Prisma__ClickClient<ClickGetPayload<T>>> : CheckSelect<T, Prisma__ClickClient<Click | null, null>, Prisma__ClickClient<ClickGetPayload<T> | null, null>>

    /**
     * Find the first Click that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickFindFirstArgs} args - Arguments to find a Click
     * @example
     * // Get one Click
     * const click = await prisma.click.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClickFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClickFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Click'> extends True ? CheckSelect<T, Prisma__ClickClient<Click>, Prisma__ClickClient<ClickGetPayload<T>>> : CheckSelect<T, Prisma__ClickClient<Click | null, null>, Prisma__ClickClient<ClickGetPayload<T> | null, null>>

    /**
     * Find zero or more Clicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clicks
     * const clicks = await prisma.click.findMany()
     * 
     * // Get first 10 Clicks
     * const clicks = await prisma.click.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clickWithIdOnly = await prisma.click.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClickFindManyArgs>(
      args?: SelectSubset<T, ClickFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Click>>, PrismaPromise<Array<ClickGetPayload<T>>>>

    /**
     * Create a Click.
     * @param {ClickCreateArgs} args - Arguments to create a Click.
     * @example
     * // Create one Click
     * const Click = await prisma.click.create({
     *   data: {
     *     // ... data to create a Click
     *   }
     * })
     * 
    **/
    create<T extends ClickCreateArgs>(
      args: SelectSubset<T, ClickCreateArgs>
    ): CheckSelect<T, Prisma__ClickClient<Click>, Prisma__ClickClient<ClickGetPayload<T>>>

    /**
     * Create many Clicks.
     *     @param {ClickCreateManyArgs} args - Arguments to create many Clicks.
     *     @example
     *     // Create many Clicks
     *     const click = await prisma.click.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClickCreateManyArgs>(
      args?: SelectSubset<T, ClickCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Click.
     * @param {ClickDeleteArgs} args - Arguments to delete one Click.
     * @example
     * // Delete one Click
     * const Click = await prisma.click.delete({
     *   where: {
     *     // ... filter to delete one Click
     *   }
     * })
     * 
    **/
    delete<T extends ClickDeleteArgs>(
      args: SelectSubset<T, ClickDeleteArgs>
    ): CheckSelect<T, Prisma__ClickClient<Click>, Prisma__ClickClient<ClickGetPayload<T>>>

    /**
     * Update one Click.
     * @param {ClickUpdateArgs} args - Arguments to update one Click.
     * @example
     * // Update one Click
     * const click = await prisma.click.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClickUpdateArgs>(
      args: SelectSubset<T, ClickUpdateArgs>
    ): CheckSelect<T, Prisma__ClickClient<Click>, Prisma__ClickClient<ClickGetPayload<T>>>

    /**
     * Delete zero or more Clicks.
     * @param {ClickDeleteManyArgs} args - Arguments to filter Clicks to delete.
     * @example
     * // Delete a few Clicks
     * const { count } = await prisma.click.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClickDeleteManyArgs>(
      args?: SelectSubset<T, ClickDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clicks
     * const click = await prisma.click.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClickUpdateManyArgs>(
      args: SelectSubset<T, ClickUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Click.
     * @param {ClickUpsertArgs} args - Arguments to update or create a Click.
     * @example
     * // Update or create a Click
     * const click = await prisma.click.upsert({
     *   create: {
     *     // ... data to create a Click
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Click we want to update
     *   }
     * })
    **/
    upsert<T extends ClickUpsertArgs>(
      args: SelectSubset<T, ClickUpsertArgs>
    ): CheckSelect<T, Prisma__ClickClient<Click>, Prisma__ClickClient<ClickGetPayload<T>>>

    /**
     * Find one Click that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ClickFindUniqueOrThrowArgs} args - Arguments to find a Click
     * @example
     * // Get one Click
     * const click = await prisma.click.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClickFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ClickFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ClickClient<Click>, Prisma__ClickClient<ClickGetPayload<T>>>

    /**
     * Find the first Click that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickFindFirstOrThrowArgs} args - Arguments to find a Click
     * @example
     * // Get one Click
     * const click = await prisma.click.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClickFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClickFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ClickClient<Click>, Prisma__ClickClient<ClickGetPayload<T>>>

    /**
     * Count the number of Clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickCountArgs} args - Arguments to filter Clicks to count.
     * @example
     * // Count the number of Clicks
     * const count = await prisma.click.count({
     *   where: {
     *     // ... the filter for the Clicks we want to count
     *   }
     * })
    **/
    count<T extends ClickCountArgs>(
      args?: Subset<T, ClickCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClickCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Click.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClickAggregateArgs>(args: Subset<T, ClickAggregateArgs>): PrismaPromise<GetClickAggregateType<T>>

    /**
     * Group by Click.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClickGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClickGroupByArgs['orderBy'] }
        : { orderBy?: ClickGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClickGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Click.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClickClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Message<T extends MessageArgs = {}>(args?: Subset<T, MessageArgs>): CheckSelect<T, Prisma__MessageClient<Message | Null>, Prisma__MessageClient<MessageGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Click base type for findUnique actions
   */
  export type ClickFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Click
     * 
    **/
    select?: ClickSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClickInclude | null
    /**
     * Filter, which Click to fetch.
     * 
    **/
    where: ClickWhereUniqueInput
  }

  /**
   * Click: findUnique
   */
  export interface ClickFindUniqueArgs extends ClickFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Click base type for findFirst actions
   */
  export type ClickFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Click
     * 
    **/
    select?: ClickSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClickInclude | null
    /**
     * Filter, which Click to fetch.
     * 
    **/
    where?: ClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clicks to fetch.
     * 
    **/
    orderBy?: Enumerable<ClickOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clicks.
     * 
    **/
    cursor?: ClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clicks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clicks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clicks.
     * 
    **/
    distinct?: Enumerable<ClickScalarFieldEnum>
  }

  /**
   * Click: findFirst
   */
  export interface ClickFindFirstArgs extends ClickFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Click findMany
   */
  export type ClickFindManyArgs = {
    /**
     * Select specific fields to fetch from the Click
     * 
    **/
    select?: ClickSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClickInclude | null
    /**
     * Filter, which Clicks to fetch.
     * 
    **/
    where?: ClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clicks to fetch.
     * 
    **/
    orderBy?: Enumerable<ClickOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clicks.
     * 
    **/
    cursor?: ClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clicks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clicks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ClickScalarFieldEnum>
  }


  /**
   * Click create
   */
  export type ClickCreateArgs = {
    /**
     * Select specific fields to fetch from the Click
     * 
    **/
    select?: ClickSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClickInclude | null
    /**
     * The data needed to create a Click.
     * 
    **/
    data: XOR<ClickCreateInput, ClickUncheckedCreateInput>
  }


  /**
   * Click createMany
   */
  export type ClickCreateManyArgs = {
    /**
     * The data used to create many Clicks.
     * 
    **/
    data: Enumerable<ClickCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Click update
   */
  export type ClickUpdateArgs = {
    /**
     * Select specific fields to fetch from the Click
     * 
    **/
    select?: ClickSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClickInclude | null
    /**
     * The data needed to update a Click.
     * 
    **/
    data: XOR<ClickUpdateInput, ClickUncheckedUpdateInput>
    /**
     * Choose, which Click to update.
     * 
    **/
    where: ClickWhereUniqueInput
  }


  /**
   * Click updateMany
   */
  export type ClickUpdateManyArgs = {
    /**
     * The data used to update Clicks.
     * 
    **/
    data: XOR<ClickUpdateManyMutationInput, ClickUncheckedUpdateManyInput>
    /**
     * Filter which Clicks to update
     * 
    **/
    where?: ClickWhereInput
  }


  /**
   * Click upsert
   */
  export type ClickUpsertArgs = {
    /**
     * Select specific fields to fetch from the Click
     * 
    **/
    select?: ClickSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClickInclude | null
    /**
     * The filter to search for the Click to update in case it exists.
     * 
    **/
    where: ClickWhereUniqueInput
    /**
     * In case the Click found by the `where` argument doesn't exist, create a new Click with this data.
     * 
    **/
    create: XOR<ClickCreateInput, ClickUncheckedCreateInput>
    /**
     * In case the Click was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ClickUpdateInput, ClickUncheckedUpdateInput>
  }


  /**
   * Click delete
   */
  export type ClickDeleteArgs = {
    /**
     * Select specific fields to fetch from the Click
     * 
    **/
    select?: ClickSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClickInclude | null
    /**
     * Filter which Click to delete.
     * 
    **/
    where: ClickWhereUniqueInput
  }


  /**
   * Click deleteMany
   */
  export type ClickDeleteManyArgs = {
    /**
     * Filter which Clicks to delete
     * 
    **/
    where?: ClickWhereInput
  }


  /**
   * Click: findUniqueOrThrow
   */
  export type ClickFindUniqueOrThrowArgs = ClickFindUniqueArgsBase
      

  /**
   * Click: findFirstOrThrow
   */
  export type ClickFindFirstOrThrowArgs = ClickFindFirstArgsBase
      

  /**
   * Click without action
   */
  export type ClickArgs = {
    /**
     * Select specific fields to fetch from the Click
     * 
    **/
    select?: ClickSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClickInclude | null
  }



  /**
   * Model List
   */


  export type AggregateList = {
    _count: ListCountAggregateOutputType | null
    _min: ListMinAggregateOutputType | null
    _max: ListMaxAggregateOutputType | null
  }

  export type ListMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDefault: boolean | null
    name: string | null
    displayName: string | null
    organizationId: string | null
  }

  export type ListMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDefault: boolean | null
    name: string | null
    displayName: string | null
    organizationId: string | null
  }

  export type ListCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isDefault: number
    name: number
    displayName: number
    organizationId: number
    _all: number
  }


  export type ListMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDefault?: true
    name?: true
    displayName?: true
    organizationId?: true
  }

  export type ListMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDefault?: true
    name?: true
    displayName?: true
    organizationId?: true
  }

  export type ListCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDefault?: true
    name?: true
    displayName?: true
    organizationId?: true
    _all?: true
  }

  export type ListAggregateArgs = {
    /**
     * Filter which List to aggregate.
     * 
    **/
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     * 
    **/
    orderBy?: Enumerable<ListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lists
    **/
    _count?: true | ListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListMaxAggregateInputType
  }

  export type GetListAggregateType<T extends ListAggregateArgs> = {
        [P in keyof T & keyof AggregateList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateList[P]>
      : GetScalarType<T[P], AggregateList[P]>
  }




  export type ListGroupByArgs = {
    where?: ListWhereInput
    orderBy?: Enumerable<ListOrderByWithAggregationInput>
    by: Array<ListScalarFieldEnum>
    having?: ListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListCountAggregateInputType | true
    _min?: ListMinAggregateInputType
    _max?: ListMaxAggregateInputType
  }


  export type ListGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    isDefault: boolean
    name: string
    displayName: string
    organizationId: string
    _count: ListCountAggregateOutputType | null
    _min: ListMinAggregateOutputType | null
    _max: ListMaxAggregateOutputType | null
  }

  type GetListGroupByPayload<T extends ListGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListGroupByOutputType[P]>
            : GetScalarType<T[P], ListGroupByOutputType[P]>
        }
      >
    >


  export type ListSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDefault?: boolean
    name?: boolean
    displayName?: boolean
    organizationId?: boolean
    Organization?: boolean | OrganizationArgs
    Member?: boolean | MemberFindManyArgs
    _count?: boolean | ListCountOutputTypeArgs
  }

  export type ListInclude = {
    Organization?: boolean | OrganizationArgs
    Member?: boolean | MemberFindManyArgs
    _count?: boolean | ListCountOutputTypeArgs
  }

  export type ListGetPayload<
    S extends boolean | null | undefined | ListArgs,
    U = keyof S
      > = S extends true
        ? List
    : S extends undefined
    ? never
    : S extends ListArgs | ListFindManyArgs
    ?'include' extends U
    ? List  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Organization' ? OrganizationGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'Member' ? Array < MemberGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? ListCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Organization' ? OrganizationGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'Member' ? Array < MemberGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? ListCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof List ? List[P] : never
  } 
    : List
  : List


  type ListCountArgs = Merge<
    Omit<ListFindManyArgs, 'select' | 'include'> & {
      select?: ListCountAggregateInputType | true
    }
  >

  export interface ListDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one List that matches the filter.
     * @param {ListFindUniqueArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ListFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ListFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'List'> extends True ? CheckSelect<T, Prisma__ListClient<List>, Prisma__ListClient<ListGetPayload<T>>> : CheckSelect<T, Prisma__ListClient<List | null, null>, Prisma__ListClient<ListGetPayload<T> | null, null>>

    /**
     * Find the first List that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindFirstArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ListFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ListFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'List'> extends True ? CheckSelect<T, Prisma__ListClient<List>, Prisma__ListClient<ListGetPayload<T>>> : CheckSelect<T, Prisma__ListClient<List | null, null>, Prisma__ListClient<ListGetPayload<T> | null, null>>

    /**
     * Find zero or more Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lists
     * const lists = await prisma.list.findMany()
     * 
     * // Get first 10 Lists
     * const lists = await prisma.list.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listWithIdOnly = await prisma.list.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ListFindManyArgs>(
      args?: SelectSubset<T, ListFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<List>>, PrismaPromise<Array<ListGetPayload<T>>>>

    /**
     * Create a List.
     * @param {ListCreateArgs} args - Arguments to create a List.
     * @example
     * // Create one List
     * const List = await prisma.list.create({
     *   data: {
     *     // ... data to create a List
     *   }
     * })
     * 
    **/
    create<T extends ListCreateArgs>(
      args: SelectSubset<T, ListCreateArgs>
    ): CheckSelect<T, Prisma__ListClient<List>, Prisma__ListClient<ListGetPayload<T>>>

    /**
     * Create many Lists.
     *     @param {ListCreateManyArgs} args - Arguments to create many Lists.
     *     @example
     *     // Create many Lists
     *     const list = await prisma.list.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ListCreateManyArgs>(
      args?: SelectSubset<T, ListCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a List.
     * @param {ListDeleteArgs} args - Arguments to delete one List.
     * @example
     * // Delete one List
     * const List = await prisma.list.delete({
     *   where: {
     *     // ... filter to delete one List
     *   }
     * })
     * 
    **/
    delete<T extends ListDeleteArgs>(
      args: SelectSubset<T, ListDeleteArgs>
    ): CheckSelect<T, Prisma__ListClient<List>, Prisma__ListClient<ListGetPayload<T>>>

    /**
     * Update one List.
     * @param {ListUpdateArgs} args - Arguments to update one List.
     * @example
     * // Update one List
     * const list = await prisma.list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ListUpdateArgs>(
      args: SelectSubset<T, ListUpdateArgs>
    ): CheckSelect<T, Prisma__ListClient<List>, Prisma__ListClient<ListGetPayload<T>>>

    /**
     * Delete zero or more Lists.
     * @param {ListDeleteManyArgs} args - Arguments to filter Lists to delete.
     * @example
     * // Delete a few Lists
     * const { count } = await prisma.list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ListDeleteManyArgs>(
      args?: SelectSubset<T, ListDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lists
     * const list = await prisma.list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ListUpdateManyArgs>(
      args: SelectSubset<T, ListUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one List.
     * @param {ListUpsertArgs} args - Arguments to update or create a List.
     * @example
     * // Update or create a List
     * const list = await prisma.list.upsert({
     *   create: {
     *     // ... data to create a List
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the List we want to update
     *   }
     * })
    **/
    upsert<T extends ListUpsertArgs>(
      args: SelectSubset<T, ListUpsertArgs>
    ): CheckSelect<T, Prisma__ListClient<List>, Prisma__ListClient<ListGetPayload<T>>>

    /**
     * Find one List that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ListFindUniqueOrThrowArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ListFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ListFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ListClient<List>, Prisma__ListClient<ListGetPayload<T>>>

    /**
     * Find the first List that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindFirstOrThrowArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ListFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ListFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ListClient<List>, Prisma__ListClient<ListGetPayload<T>>>

    /**
     * Count the number of Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListCountArgs} args - Arguments to filter Lists to count.
     * @example
     * // Count the number of Lists
     * const count = await prisma.list.count({
     *   where: {
     *     // ... the filter for the Lists we want to count
     *   }
     * })
    **/
    count<T extends ListCountArgs>(
      args?: Subset<T, ListCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListAggregateArgs>(args: Subset<T, ListAggregateArgs>): PrismaPromise<GetListAggregateType<T>>

    /**
     * Group by List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListGroupByArgs['orderBy'] }
        : { orderBy?: ListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for List.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ListClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Organization<T extends OrganizationArgs = {}>(args?: Subset<T, OrganizationArgs>): CheckSelect<T, Prisma__OrganizationClient<Organization | Null>, Prisma__OrganizationClient<OrganizationGetPayload<T> | Null>>;

    Member<T extends MemberFindManyArgs = {}>(args?: Subset<T, MemberFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Member>| Null>, PrismaPromise<Array<MemberGetPayload<T>>| Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * List base type for findUnique actions
   */
  export type ListFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the List
     * 
    **/
    select?: ListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListInclude | null
    /**
     * Filter, which List to fetch.
     * 
    **/
    where: ListWhereUniqueInput
  }

  /**
   * List: findUnique
   */
  export interface ListFindUniqueArgs extends ListFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * List base type for findFirst actions
   */
  export type ListFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the List
     * 
    **/
    select?: ListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListInclude | null
    /**
     * Filter, which List to fetch.
     * 
    **/
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     * 
    **/
    orderBy?: Enumerable<ListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     * 
    **/
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     * 
    **/
    distinct?: Enumerable<ListScalarFieldEnum>
  }

  /**
   * List: findFirst
   */
  export interface ListFindFirstArgs extends ListFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * List findMany
   */
  export type ListFindManyArgs = {
    /**
     * Select specific fields to fetch from the List
     * 
    **/
    select?: ListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListInclude | null
    /**
     * Filter, which Lists to fetch.
     * 
    **/
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     * 
    **/
    orderBy?: Enumerable<ListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lists.
     * 
    **/
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ListScalarFieldEnum>
  }


  /**
   * List create
   */
  export type ListCreateArgs = {
    /**
     * Select specific fields to fetch from the List
     * 
    **/
    select?: ListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListInclude | null
    /**
     * The data needed to create a List.
     * 
    **/
    data: XOR<ListCreateInput, ListUncheckedCreateInput>
  }


  /**
   * List createMany
   */
  export type ListCreateManyArgs = {
    /**
     * The data used to create many Lists.
     * 
    **/
    data: Enumerable<ListCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * List update
   */
  export type ListUpdateArgs = {
    /**
     * Select specific fields to fetch from the List
     * 
    **/
    select?: ListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListInclude | null
    /**
     * The data needed to update a List.
     * 
    **/
    data: XOR<ListUpdateInput, ListUncheckedUpdateInput>
    /**
     * Choose, which List to update.
     * 
    **/
    where: ListWhereUniqueInput
  }


  /**
   * List updateMany
   */
  export type ListUpdateManyArgs = {
    /**
     * The data used to update Lists.
     * 
    **/
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyInput>
    /**
     * Filter which Lists to update
     * 
    **/
    where?: ListWhereInput
  }


  /**
   * List upsert
   */
  export type ListUpsertArgs = {
    /**
     * Select specific fields to fetch from the List
     * 
    **/
    select?: ListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListInclude | null
    /**
     * The filter to search for the List to update in case it exists.
     * 
    **/
    where: ListWhereUniqueInput
    /**
     * In case the List found by the `where` argument doesn't exist, create a new List with this data.
     * 
    **/
    create: XOR<ListCreateInput, ListUncheckedCreateInput>
    /**
     * In case the List was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ListUpdateInput, ListUncheckedUpdateInput>
  }


  /**
   * List delete
   */
  export type ListDeleteArgs = {
    /**
     * Select specific fields to fetch from the List
     * 
    **/
    select?: ListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListInclude | null
    /**
     * Filter which List to delete.
     * 
    **/
    where: ListWhereUniqueInput
  }


  /**
   * List deleteMany
   */
  export type ListDeleteManyArgs = {
    /**
     * Filter which Lists to delete
     * 
    **/
    where?: ListWhereInput
  }


  /**
   * List: findUniqueOrThrow
   */
  export type ListFindUniqueOrThrowArgs = ListFindUniqueArgsBase
      

  /**
   * List: findFirstOrThrow
   */
  export type ListFindFirstOrThrowArgs = ListFindFirstArgsBase
      

  /**
   * List without action
   */
  export type ListArgs = {
    /**
     * Select specific fields to fetch from the List
     * 
    **/
    select?: ListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListInclude | null
  }



  /**
   * Model Member
   */


  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    listId: string | null
    status: MemberStatus | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    listId: string | null
    status: MemberStatus | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    listId: number
    status: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    listId?: true
    status?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    listId?: true
    status?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    listId?: true
    status?: true
    _all?: true
  }

  export type MemberAggregateArgs = {
    /**
     * Filter which Member to aggregate.
     * 
    **/
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     * 
    **/
    orderBy?: Enumerable<MemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs = {
    where?: MemberWhereInput
    orderBy?: Enumerable<MemberOrderByWithAggregationInput>
    by: Array<MemberScalarFieldEnum>
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }


  export type MemberGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    listId: string
    status: MemberStatus
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    listId?: boolean
    List?: boolean | ListArgs
    status?: boolean
  }

  export type MemberInclude = {
    List?: boolean | ListArgs
  }

  export type MemberGetPayload<
    S extends boolean | null | undefined | MemberArgs,
    U = keyof S
      > = S extends true
        ? Member
    : S extends undefined
    ? never
    : S extends MemberArgs | MemberFindManyArgs
    ?'include' extends U
    ? Member  & {
    [P in TrueKeys<S['include']>]:
        P extends 'List' ? ListGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'List' ? ListGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Member ? Member[P] : never
  } 
    : Member
  : Member


  type MemberCountArgs = Merge<
    Omit<MemberFindManyArgs, 'select' | 'include'> & {
      select?: MemberCountAggregateInputType | true
    }
  >

  export interface MemberDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MemberFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MemberFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Member'> extends True ? CheckSelect<T, Prisma__MemberClient<Member>, Prisma__MemberClient<MemberGetPayload<T>>> : CheckSelect<T, Prisma__MemberClient<Member | null, null>, Prisma__MemberClient<MemberGetPayload<T> | null, null>>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MemberFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MemberFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Member'> extends True ? CheckSelect<T, Prisma__MemberClient<Member>, Prisma__MemberClient<MemberGetPayload<T>>> : CheckSelect<T, Prisma__MemberClient<Member | null, null>, Prisma__MemberClient<MemberGetPayload<T> | null, null>>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MemberFindManyArgs>(
      args?: SelectSubset<T, MemberFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Member>>, PrismaPromise<Array<MemberGetPayload<T>>>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
    **/
    create<T extends MemberCreateArgs>(
      args: SelectSubset<T, MemberCreateArgs>
    ): CheckSelect<T, Prisma__MemberClient<Member>, Prisma__MemberClient<MemberGetPayload<T>>>

    /**
     * Create many Members.
     *     @param {MemberCreateManyArgs} args - Arguments to create many Members.
     *     @example
     *     // Create many Members
     *     const member = await prisma.member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MemberCreateManyArgs>(
      args?: SelectSubset<T, MemberCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
    **/
    delete<T extends MemberDeleteArgs>(
      args: SelectSubset<T, MemberDeleteArgs>
    ): CheckSelect<T, Prisma__MemberClient<Member>, Prisma__MemberClient<MemberGetPayload<T>>>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MemberUpdateArgs>(
      args: SelectSubset<T, MemberUpdateArgs>
    ): CheckSelect<T, Prisma__MemberClient<Member>, Prisma__MemberClient<MemberGetPayload<T>>>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MemberDeleteManyArgs>(
      args?: SelectSubset<T, MemberDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MemberUpdateManyArgs>(
      args: SelectSubset<T, MemberUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
    **/
    upsert<T extends MemberUpsertArgs>(
      args: SelectSubset<T, MemberUpsertArgs>
    ): CheckSelect<T, Prisma__MemberClient<Member>, Prisma__MemberClient<MemberGetPayload<T>>>

    /**
     * Find one Member that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MemberFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__MemberClient<Member>, Prisma__MemberClient<MemberGetPayload<T>>>

    /**
     * Find the first Member that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MemberFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__MemberClient<Member>, Prisma__MemberClient<MemberGetPayload<T>>>

    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MemberClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    List<T extends ListArgs = {}>(args?: Subset<T, ListArgs>): CheckSelect<T, Prisma__ListClient<List | Null>, Prisma__ListClient<ListGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Member base type for findUnique actions
   */
  export type MemberFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Member
     * 
    **/
    select?: MemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MemberInclude | null
    /**
     * Filter, which Member to fetch.
     * 
    **/
    where: MemberWhereUniqueInput
  }

  /**
   * Member: findUnique
   */
  export interface MemberFindUniqueArgs extends MemberFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Member base type for findFirst actions
   */
  export type MemberFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Member
     * 
    **/
    select?: MemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MemberInclude | null
    /**
     * Filter, which Member to fetch.
     * 
    **/
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     * 
    **/
    orderBy?: Enumerable<MemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     * 
    **/
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     * 
    **/
    distinct?: Enumerable<MemberScalarFieldEnum>
  }

  /**
   * Member: findFirst
   */
  export interface MemberFindFirstArgs extends MemberFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Member findMany
   */
  export type MemberFindManyArgs = {
    /**
     * Select specific fields to fetch from the Member
     * 
    **/
    select?: MemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MemberInclude | null
    /**
     * Filter, which Members to fetch.
     * 
    **/
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     * 
    **/
    orderBy?: Enumerable<MemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     * 
    **/
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MemberScalarFieldEnum>
  }


  /**
   * Member create
   */
  export type MemberCreateArgs = {
    /**
     * Select specific fields to fetch from the Member
     * 
    **/
    select?: MemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MemberInclude | null
    /**
     * The data needed to create a Member.
     * 
    **/
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }


  /**
   * Member createMany
   */
  export type MemberCreateManyArgs = {
    /**
     * The data used to create many Members.
     * 
    **/
    data: Enumerable<MemberCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Member update
   */
  export type MemberUpdateArgs = {
    /**
     * Select specific fields to fetch from the Member
     * 
    **/
    select?: MemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MemberInclude | null
    /**
     * The data needed to update a Member.
     * 
    **/
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     * 
    **/
    where: MemberWhereUniqueInput
  }


  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs = {
    /**
     * The data used to update Members.
     * 
    **/
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     * 
    **/
    where?: MemberWhereInput
  }


  /**
   * Member upsert
   */
  export type MemberUpsertArgs = {
    /**
     * Select specific fields to fetch from the Member
     * 
    **/
    select?: MemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MemberInclude | null
    /**
     * The filter to search for the Member to update in case it exists.
     * 
    **/
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     * 
    **/
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }


  /**
   * Member delete
   */
  export type MemberDeleteArgs = {
    /**
     * Select specific fields to fetch from the Member
     * 
    **/
    select?: MemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MemberInclude | null
    /**
     * Filter which Member to delete.
     * 
    **/
    where: MemberWhereUniqueInput
  }


  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs = {
    /**
     * Filter which Members to delete
     * 
    **/
    where?: MemberWhereInput
  }


  /**
   * Member: findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs = MemberFindUniqueArgsBase
      

  /**
   * Member: findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs = MemberFindFirstArgsBase
      

  /**
   * Member without action
   */
  export type MemberArgs = {
    /**
     * Select specific fields to fetch from the Member
     * 
    **/
    select?: MemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MemberInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    active: 'active',
    organizationId: 'organizationId'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const ClickScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    url: 'url',
    count: 'count',
    messageId: 'messageId'
  };

  export type ClickScalarFieldEnum = (typeof ClickScalarFieldEnum)[keyof typeof ClickScalarFieldEnum]


  export const ListScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDefault: 'isDefault',
    name: 'name',
    displayName: 'displayName',
    organizationId: 'organizationId'
  };

  export type ListScalarFieldEnum = (typeof ListScalarFieldEnum)[keyof typeof ListScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    listId: 'listId',
    status: 'status'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const MessageContentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    html: 'html',
    messageId: 'messageId'
  };

  export type MessageContentScalarFieldEnum = (typeof MessageContentScalarFieldEnum)[keyof typeof MessageContentScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    to: 'to',
    cc: 'cc',
    bcc: 'bcc',
    subject: 'subject',
    from: 'from',
    openedAt: 'openedAt',
    openCount: 'openCount',
    templateName: 'templateName',
    previewName: 'previewName'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt',
    password: 'password',
    organizationId: 'organizationId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    password?: StringFilter | string
    organizationId?: StringFilter | string
    Organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    organizationId?: SortOrder
    Organization?: OrganizationOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    organizationId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    password?: StringWithAggregatesFilter | string
    organizationId?: StringWithAggregatesFilter | string
  }

  export type OrganizationWhereInput = {
    AND?: Enumerable<OrganizationWhereInput>
    OR?: Enumerable<OrganizationWhereInput>
    NOT?: Enumerable<OrganizationWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    User?: UserListRelationFilter
    ApiKey?: ApiKeyListRelationFilter
    List?: ListListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    User?: UserOrderByRelationAggregateInput
    ApiKey?: ApiKeyOrderByRelationAggregateInput
    List?: ListOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = {
    id?: string
  }

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrganizationScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrganizationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrganizationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type ApiKeyWhereInput = {
    AND?: Enumerable<ApiKeyWhereInput>
    OR?: Enumerable<ApiKeyWhereInput>
    NOT?: Enumerable<ApiKeyWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    active?: BoolFilter | boolean
    organizationId?: StringFilter | string
    Organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    organizationId?: SortOrder
    Organization?: OrganizationOrderByWithRelationInput
  }

  export type ApiKeyWhereUniqueInput = {
    id?: string
  }

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    organizationId?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ApiKeyScalarWhereWithAggregatesInput>
    OR?: Enumerable<ApiKeyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ApiKeyScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    active?: BoolWithAggregatesFilter | boolean
    organizationId?: StringWithAggregatesFilter | string
  }

  export type MessageWhereInput = {
    AND?: Enumerable<MessageWhereInput>
    OR?: Enumerable<MessageWhereInput>
    NOT?: Enumerable<MessageWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    to?: StringNullableListFilter
    cc?: StringNullableListFilter
    bcc?: StringNullableListFilter
    subject?: StringNullableFilter | string | null
    from?: StringNullableFilter | string | null
    openedAt?: DateTimeNullableFilter | Date | string | null
    openCount?: IntFilter | number
    templateName?: StringNullableFilter | string | null
    previewName?: StringNullableFilter | string | null
    Click?: ClickListRelationFilter
    MessageContent?: XOR<MessageContentRelationFilter, MessageContentWhereInput> | null
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    to?: SortOrder
    cc?: SortOrder
    bcc?: SortOrder
    subject?: SortOrder
    from?: SortOrder
    openedAt?: SortOrder
    openCount?: SortOrder
    templateName?: SortOrder
    previewName?: SortOrder
    Click?: ClickOrderByRelationAggregateInput
    MessageContent?: MessageContentOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = {
    id?: string
  }

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    to?: SortOrder
    cc?: SortOrder
    bcc?: SortOrder
    subject?: SortOrder
    from?: SortOrder
    openedAt?: SortOrder
    openCount?: SortOrder
    templateName?: SortOrder
    previewName?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MessageScalarWhereWithAggregatesInput>
    OR?: Enumerable<MessageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MessageScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    to?: StringNullableListFilter
    cc?: StringNullableListFilter
    bcc?: StringNullableListFilter
    subject?: StringNullableWithAggregatesFilter | string | null
    from?: StringNullableWithAggregatesFilter | string | null
    openedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    openCount?: IntWithAggregatesFilter | number
    templateName?: StringNullableWithAggregatesFilter | string | null
    previewName?: StringNullableWithAggregatesFilter | string | null
  }

  export type MessageContentWhereInput = {
    AND?: Enumerable<MessageContentWhereInput>
    OR?: Enumerable<MessageContentWhereInput>
    NOT?: Enumerable<MessageContentWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    html?: StringNullableFilter | string | null
    messageId?: StringFilter | string
    Message?: XOR<MessageRelationFilter, MessageWhereInput>
  }

  export type MessageContentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    html?: SortOrder
    messageId?: SortOrder
    Message?: MessageOrderByWithRelationInput
  }

  export type MessageContentWhereUniqueInput = {
    id?: string
    messageId?: string
  }

  export type MessageContentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    html?: SortOrder
    messageId?: SortOrder
    _count?: MessageContentCountOrderByAggregateInput
    _max?: MessageContentMaxOrderByAggregateInput
    _min?: MessageContentMinOrderByAggregateInput
  }

  export type MessageContentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MessageContentScalarWhereWithAggregatesInput>
    OR?: Enumerable<MessageContentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MessageContentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    html?: StringNullableWithAggregatesFilter | string | null
    messageId?: StringWithAggregatesFilter | string
  }

  export type ClickWhereInput = {
    AND?: Enumerable<ClickWhereInput>
    OR?: Enumerable<ClickWhereInput>
    NOT?: Enumerable<ClickWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    count?: IntFilter | number
    messageId?: StringFilter | string
    Message?: XOR<MessageRelationFilter, MessageWhereInput>
  }

  export type ClickOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    count?: SortOrder
    messageId?: SortOrder
    Message?: MessageOrderByWithRelationInput
  }

  export type ClickWhereUniqueInput = {
    id?: string
    messageId_url?: ClickMessageIdUrlCompoundUniqueInput
  }

  export type ClickOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    count?: SortOrder
    messageId?: SortOrder
    _count?: ClickCountOrderByAggregateInput
    _avg?: ClickAvgOrderByAggregateInput
    _max?: ClickMaxOrderByAggregateInput
    _min?: ClickMinOrderByAggregateInput
    _sum?: ClickSumOrderByAggregateInput
  }

  export type ClickScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClickScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClickScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClickScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    url?: StringWithAggregatesFilter | string
    count?: IntWithAggregatesFilter | number
    messageId?: StringWithAggregatesFilter | string
  }

  export type ListWhereInput = {
    AND?: Enumerable<ListWhereInput>
    OR?: Enumerable<ListWhereInput>
    NOT?: Enumerable<ListWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDefault?: BoolFilter | boolean
    name?: StringFilter | string
    displayName?: StringFilter | string
    organizationId?: StringFilter | string
    Organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    Member?: MemberListRelationFilter
  }

  export type ListOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDefault?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    organizationId?: SortOrder
    Organization?: OrganizationOrderByWithRelationInput
    Member?: MemberOrderByRelationAggregateInput
  }

  export type ListWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type ListOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDefault?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    organizationId?: SortOrder
    _count?: ListCountOrderByAggregateInput
    _max?: ListMaxOrderByAggregateInput
    _min?: ListMinOrderByAggregateInput
  }

  export type ListScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ListScalarWhereWithAggregatesInput>
    OR?: Enumerable<ListScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ListScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    isDefault?: BoolWithAggregatesFilter | boolean
    name?: StringWithAggregatesFilter | string
    displayName?: StringWithAggregatesFilter | string
    organizationId?: StringWithAggregatesFilter | string
  }

  export type MemberWhereInput = {
    AND?: Enumerable<MemberWhereInput>
    OR?: Enumerable<MemberWhereInput>
    NOT?: Enumerable<MemberWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    listId?: StringFilter | string
    List?: XOR<ListRelationFilter, ListWhereInput>
    status?: EnumMemberStatusFilter | MemberStatus
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    listId?: SortOrder
    List?: ListOrderByWithRelationInput
    status?: SortOrder
  }

  export type MemberWhereUniqueInput = {
    id?: string
    listId_email?: MemberListIdEmailCompoundUniqueInput
  }

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    listId?: SortOrder
    status?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MemberScalarWhereWithAggregatesInput>
    OR?: Enumerable<MemberScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MemberScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    email?: StringWithAggregatesFilter | string
    listId?: StringWithAggregatesFilter | string
    status?: EnumMemberStatusWithAggregatesFilter | MemberStatus
  }

  export type UserCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    password: string
    Organization: OrganizationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    password: string
    organizationId: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    Organization?: OrganizationUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    createdAt?: Date | string
    password: string
    organizationId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    User?: UserCreateNestedManyWithoutOrganizationInput
    ApiKey?: ApiKeyCreateNestedManyWithoutOrganizationInput
    List?: ListCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    User?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    ApiKey?: ApiKeyUncheckedCreateNestedManyWithoutOrganizationInput
    List?: ListUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateManyWithoutOrganizationNestedInput
    ApiKey?: ApiKeyUpdateManyWithoutOrganizationNestedInput
    List?: ListUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    ApiKey?: ApiKeyUncheckedUpdateManyWithoutOrganizationNestedInput
    List?: ListUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    createdAt?: Date | string
    active?: boolean
    Organization: OrganizationCreateNestedOneWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    active?: boolean
    organizationId: string
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    Organization?: OrganizationUpdateOneRequiredWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    createdAt?: Date | string
    active?: boolean
    organizationId: string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    id?: string
    createdAt?: Date | string
    to?: MessageCreatetoInput | Enumerable<string>
    cc?: MessageCreateccInput | Enumerable<string>
    bcc?: MessageCreatebccInput | Enumerable<string>
    subject?: string | null
    from?: string | null
    openedAt?: Date | string | null
    openCount?: number
    templateName?: string | null
    previewName?: string | null
    Click?: ClickCreateNestedManyWithoutMessageInput
    MessageContent?: MessageContentCreateNestedOneWithoutMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    to?: MessageCreatetoInput | Enumerable<string>
    cc?: MessageCreateccInput | Enumerable<string>
    bcc?: MessageCreatebccInput | Enumerable<string>
    subject?: string | null
    from?: string | null
    openedAt?: Date | string | null
    openCount?: number
    templateName?: string | null
    previewName?: string | null
    Click?: ClickUncheckedCreateNestedManyWithoutMessageInput
    MessageContent?: MessageContentUncheckedCreateNestedOneWithoutMessageInput
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: MessageUpdatetoInput | Enumerable<string>
    cc?: MessageUpdateccInput | Enumerable<string>
    bcc?: MessageUpdatebccInput | Enumerable<string>
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openCount?: IntFieldUpdateOperationsInput | number
    templateName?: NullableStringFieldUpdateOperationsInput | string | null
    previewName?: NullableStringFieldUpdateOperationsInput | string | null
    Click?: ClickUpdateManyWithoutMessageNestedInput
    MessageContent?: MessageContentUpdateOneWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: MessageUpdatetoInput | Enumerable<string>
    cc?: MessageUpdateccInput | Enumerable<string>
    bcc?: MessageUpdatebccInput | Enumerable<string>
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openCount?: IntFieldUpdateOperationsInput | number
    templateName?: NullableStringFieldUpdateOperationsInput | string | null
    previewName?: NullableStringFieldUpdateOperationsInput | string | null
    Click?: ClickUncheckedUpdateManyWithoutMessageNestedInput
    MessageContent?: MessageContentUncheckedUpdateOneWithoutMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: string
    createdAt?: Date | string
    to?: MessageCreatetoInput | Enumerable<string>
    cc?: MessageCreateccInput | Enumerable<string>
    bcc?: MessageCreatebccInput | Enumerable<string>
    subject?: string | null
    from?: string | null
    openedAt?: Date | string | null
    openCount?: number
    templateName?: string | null
    previewName?: string | null
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: MessageUpdatetoInput | Enumerable<string>
    cc?: MessageUpdateccInput | Enumerable<string>
    bcc?: MessageUpdatebccInput | Enumerable<string>
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openCount?: IntFieldUpdateOperationsInput | number
    templateName?: NullableStringFieldUpdateOperationsInput | string | null
    previewName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: MessageUpdatetoInput | Enumerable<string>
    cc?: MessageUpdateccInput | Enumerable<string>
    bcc?: MessageUpdatebccInput | Enumerable<string>
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openCount?: IntFieldUpdateOperationsInput | number
    templateName?: NullableStringFieldUpdateOperationsInput | string | null
    previewName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageContentCreateInput = {
    id?: string
    createdAt?: Date | string
    html?: string | null
    Message: MessageCreateNestedOneWithoutMessageContentInput
  }

  export type MessageContentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    html?: string | null
    messageId: string
  }

  export type MessageContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    html?: NullableStringFieldUpdateOperationsInput | string | null
    Message?: MessageUpdateOneRequiredWithoutMessageContentNestedInput
  }

  export type MessageContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    html?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageContentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    html?: string | null
    messageId: string
  }

  export type MessageContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    html?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    html?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: StringFieldUpdateOperationsInput | string
  }

  export type ClickCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    count?: number
    Message: MessageCreateNestedOneWithoutClickInput
  }

  export type ClickUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    count?: number
    messageId: string
  }

  export type ClickUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    Message?: MessageUpdateOneRequiredWithoutClickNestedInput
  }

  export type ClickUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    messageId?: StringFieldUpdateOperationsInput | string
  }

  export type ClickCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    count?: number
    messageId: string
  }

  export type ClickUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ClickUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    messageId?: StringFieldUpdateOperationsInput | string
  }

  export type ListCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDefault?: boolean
    name: string
    displayName: string
    Organization: OrganizationCreateNestedOneWithoutListInput
    Member?: MemberCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDefault?: boolean
    name: string
    displayName: string
    organizationId: string
    Member?: MemberUncheckedCreateNestedManyWithoutListInput
  }

  export type ListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    Organization?: OrganizationUpdateOneRequiredWithoutListNestedInput
    Member?: MemberUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    Member?: MemberUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDefault?: boolean
    name: string
    displayName: string
    organizationId: string
  }

  export type ListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
  }

  export type ListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type MemberCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    List: ListCreateNestedOneWithoutMemberInput
    status: MemberStatus
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    listId: string
    status: MemberStatus
  }

  export type MemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    List?: ListUpdateOneRequiredWithoutMemberNestedInput
    status?: EnumMemberStatusFieldUpdateOperationsInput | MemberStatus
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | MemberStatus
  }

  export type MemberCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    listId: string
    status: MemberStatus
  }

  export type MemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | MemberStatus
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | MemberStatus
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type OrganizationRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    organizationId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    organizationId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    organizationId?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type ListListRelationFilter = {
    every?: ListWhereInput
    some?: ListWhereInput
    none?: ListWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    organizationId?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    organizationId?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    organizationId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type ClickListRelationFilter = {
    every?: ClickWhereInput
    some?: ClickWhereInput
    none?: ClickWhereInput
  }

  export type MessageContentRelationFilter = {
    is?: MessageContentWhereInput | null
    isNot?: MessageContentWhereInput | null
  }

  export type ClickOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    to?: SortOrder
    cc?: SortOrder
    bcc?: SortOrder
    subject?: SortOrder
    from?: SortOrder
    openedAt?: SortOrder
    openCount?: SortOrder
    templateName?: SortOrder
    previewName?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    openCount?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    subject?: SortOrder
    from?: SortOrder
    openedAt?: SortOrder
    openCount?: SortOrder
    templateName?: SortOrder
    previewName?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    subject?: SortOrder
    from?: SortOrder
    openedAt?: SortOrder
    openCount?: SortOrder
    templateName?: SortOrder
    previewName?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    openCount?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type MessageRelationFilter = {
    is?: MessageWhereInput
    isNot?: MessageWhereInput
  }

  export type MessageContentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    html?: SortOrder
    messageId?: SortOrder
  }

  export type MessageContentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    html?: SortOrder
    messageId?: SortOrder
  }

  export type MessageContentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    html?: SortOrder
    messageId?: SortOrder
  }

  export type ClickMessageIdUrlCompoundUniqueInput = {
    messageId: string
    url: string
  }

  export type ClickCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    count?: SortOrder
    messageId?: SortOrder
  }

  export type ClickAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type ClickMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    count?: SortOrder
    messageId?: SortOrder
  }

  export type ClickMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    count?: SortOrder
    messageId?: SortOrder
  }

  export type ClickSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDefault?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    organizationId?: SortOrder
  }

  export type ListMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDefault?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    organizationId?: SortOrder
  }

  export type ListMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDefault?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    organizationId?: SortOrder
  }

  export type ListRelationFilter = {
    is?: ListWhereInput
    isNot?: ListWhereInput
  }

  export type EnumMemberStatusFilter = {
    equals?: MemberStatus
    in?: Enumerable<MemberStatus>
    notIn?: Enumerable<MemberStatus>
    not?: NestedEnumMemberStatusFilter | MemberStatus
  }

  export type MemberListIdEmailCompoundUniqueInput = {
    listId: string
    email: string
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    listId?: SortOrder
    status?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    listId?: SortOrder
    status?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    listId?: SortOrder
    status?: SortOrder
  }

  export type EnumMemberStatusWithAggregatesFilter = {
    equals?: MemberStatus
    in?: Enumerable<MemberStatus>
    notIn?: Enumerable<MemberStatus>
    not?: NestedEnumMemberStatusWithAggregatesFilter | MemberStatus
    _count?: NestedIntFilter
    _min?: NestedEnumMemberStatusFilter
    _max?: NestedEnumMemberStatusFilter
  }

  export type OrganizationCreateNestedOneWithoutUserInput = {
    create?: XOR<OrganizationCreateWithoutUserInput, OrganizationUncheckedCreateWithoutUserInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUserInput
    connect?: OrganizationWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrganizationUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<OrganizationCreateWithoutUserInput, OrganizationUncheckedCreateWithoutUserInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUserInput
    upsert?: OrganizationUpsertWithoutUserInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<OrganizationUpdateWithoutUserInput, OrganizationUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<UserCreateWithoutOrganizationInput>, Enumerable<UserUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutOrganizationInput>
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type ApiKeyCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<ApiKeyCreateWithoutOrganizationInput>, Enumerable<ApiKeyUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ApiKeyCreateOrConnectWithoutOrganizationInput>
    createMany?: ApiKeyCreateManyOrganizationInputEnvelope
    connect?: Enumerable<ApiKeyWhereUniqueInput>
  }

  export type ListCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<ListCreateWithoutOrganizationInput>, Enumerable<ListUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ListCreateOrConnectWithoutOrganizationInput>
    createMany?: ListCreateManyOrganizationInputEnvelope
    connect?: Enumerable<ListWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<UserCreateWithoutOrganizationInput>, Enumerable<UserUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutOrganizationInput>
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<ApiKeyCreateWithoutOrganizationInput>, Enumerable<ApiKeyUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ApiKeyCreateOrConnectWithoutOrganizationInput>
    createMany?: ApiKeyCreateManyOrganizationInputEnvelope
    connect?: Enumerable<ApiKeyWhereUniqueInput>
  }

  export type ListUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<ListCreateWithoutOrganizationInput>, Enumerable<ListUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ListCreateOrConnectWithoutOrganizationInput>
    createMany?: ListCreateManyOrganizationInputEnvelope
    connect?: Enumerable<ListWhereUniqueInput>
  }

  export type UserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutOrganizationInput>, Enumerable<UserUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type ApiKeyUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<ApiKeyCreateWithoutOrganizationInput>, Enumerable<ApiKeyUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ApiKeyCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<ApiKeyUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: ApiKeyCreateManyOrganizationInputEnvelope
    set?: Enumerable<ApiKeyWhereUniqueInput>
    disconnect?: Enumerable<ApiKeyWhereUniqueInput>
    delete?: Enumerable<ApiKeyWhereUniqueInput>
    connect?: Enumerable<ApiKeyWhereUniqueInput>
    update?: Enumerable<ApiKeyUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<ApiKeyUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<ApiKeyScalarWhereInput>
  }

  export type ListUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<ListCreateWithoutOrganizationInput>, Enumerable<ListUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ListCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<ListUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: ListCreateManyOrganizationInputEnvelope
    set?: Enumerable<ListWhereUniqueInput>
    disconnect?: Enumerable<ListWhereUniqueInput>
    delete?: Enumerable<ListWhereUniqueInput>
    connect?: Enumerable<ListWhereUniqueInput>
    update?: Enumerable<ListUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<ListUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<ListScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutOrganizationInput>, Enumerable<UserUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type ApiKeyUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<ApiKeyCreateWithoutOrganizationInput>, Enumerable<ApiKeyUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ApiKeyCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<ApiKeyUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: ApiKeyCreateManyOrganizationInputEnvelope
    set?: Enumerable<ApiKeyWhereUniqueInput>
    disconnect?: Enumerable<ApiKeyWhereUniqueInput>
    delete?: Enumerable<ApiKeyWhereUniqueInput>
    connect?: Enumerable<ApiKeyWhereUniqueInput>
    update?: Enumerable<ApiKeyUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<ApiKeyUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<ApiKeyScalarWhereInput>
  }

  export type ListUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<ListCreateWithoutOrganizationInput>, Enumerable<ListUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ListCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<ListUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: ListCreateManyOrganizationInputEnvelope
    set?: Enumerable<ListWhereUniqueInput>
    disconnect?: Enumerable<ListWhereUniqueInput>
    delete?: Enumerable<ListWhereUniqueInput>
    connect?: Enumerable<ListWhereUniqueInput>
    update?: Enumerable<ListUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<ListUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<ListScalarWhereInput>
  }

  export type OrganizationCreateNestedOneWithoutApiKeyInput = {
    create?: XOR<OrganizationCreateWithoutApiKeyInput, OrganizationUncheckedCreateWithoutApiKeyInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutApiKeyInput
    connect?: OrganizationWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrganizationUpdateOneRequiredWithoutApiKeyNestedInput = {
    create?: XOR<OrganizationCreateWithoutApiKeyInput, OrganizationUncheckedCreateWithoutApiKeyInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutApiKeyInput
    upsert?: OrganizationUpsertWithoutApiKeyInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<OrganizationUpdateWithoutApiKeyInput, OrganizationUncheckedUpdateWithoutApiKeyInput>
  }

  export type MessageCreatetoInput = {
    set: Enumerable<string>
  }

  export type MessageCreateccInput = {
    set: Enumerable<string>
  }

  export type MessageCreatebccInput = {
    set: Enumerable<string>
  }

  export type ClickCreateNestedManyWithoutMessageInput = {
    create?: XOR<Enumerable<ClickCreateWithoutMessageInput>, Enumerable<ClickUncheckedCreateWithoutMessageInput>>
    connectOrCreate?: Enumerable<ClickCreateOrConnectWithoutMessageInput>
    createMany?: ClickCreateManyMessageInputEnvelope
    connect?: Enumerable<ClickWhereUniqueInput>
  }

  export type MessageContentCreateNestedOneWithoutMessageInput = {
    create?: XOR<MessageContentCreateWithoutMessageInput, MessageContentUncheckedCreateWithoutMessageInput>
    connectOrCreate?: MessageContentCreateOrConnectWithoutMessageInput
    connect?: MessageContentWhereUniqueInput
  }

  export type ClickUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<Enumerable<ClickCreateWithoutMessageInput>, Enumerable<ClickUncheckedCreateWithoutMessageInput>>
    connectOrCreate?: Enumerable<ClickCreateOrConnectWithoutMessageInput>
    createMany?: ClickCreateManyMessageInputEnvelope
    connect?: Enumerable<ClickWhereUniqueInput>
  }

  export type MessageContentUncheckedCreateNestedOneWithoutMessageInput = {
    create?: XOR<MessageContentCreateWithoutMessageInput, MessageContentUncheckedCreateWithoutMessageInput>
    connectOrCreate?: MessageContentCreateOrConnectWithoutMessageInput
    connect?: MessageContentWhereUniqueInput
  }

  export type MessageUpdatetoInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type MessageUpdateccInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type MessageUpdatebccInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClickUpdateManyWithoutMessageNestedInput = {
    create?: XOR<Enumerable<ClickCreateWithoutMessageInput>, Enumerable<ClickUncheckedCreateWithoutMessageInput>>
    connectOrCreate?: Enumerable<ClickCreateOrConnectWithoutMessageInput>
    upsert?: Enumerable<ClickUpsertWithWhereUniqueWithoutMessageInput>
    createMany?: ClickCreateManyMessageInputEnvelope
    set?: Enumerable<ClickWhereUniqueInput>
    disconnect?: Enumerable<ClickWhereUniqueInput>
    delete?: Enumerable<ClickWhereUniqueInput>
    connect?: Enumerable<ClickWhereUniqueInput>
    update?: Enumerable<ClickUpdateWithWhereUniqueWithoutMessageInput>
    updateMany?: Enumerable<ClickUpdateManyWithWhereWithoutMessageInput>
    deleteMany?: Enumerable<ClickScalarWhereInput>
  }

  export type MessageContentUpdateOneWithoutMessageNestedInput = {
    create?: XOR<MessageContentCreateWithoutMessageInput, MessageContentUncheckedCreateWithoutMessageInput>
    connectOrCreate?: MessageContentCreateOrConnectWithoutMessageInput
    upsert?: MessageContentUpsertWithoutMessageInput
    disconnect?: boolean
    delete?: boolean
    connect?: MessageContentWhereUniqueInput
    update?: XOR<MessageContentUpdateWithoutMessageInput, MessageContentUncheckedUpdateWithoutMessageInput>
  }

  export type ClickUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<Enumerable<ClickCreateWithoutMessageInput>, Enumerable<ClickUncheckedCreateWithoutMessageInput>>
    connectOrCreate?: Enumerable<ClickCreateOrConnectWithoutMessageInput>
    upsert?: Enumerable<ClickUpsertWithWhereUniqueWithoutMessageInput>
    createMany?: ClickCreateManyMessageInputEnvelope
    set?: Enumerable<ClickWhereUniqueInput>
    disconnect?: Enumerable<ClickWhereUniqueInput>
    delete?: Enumerable<ClickWhereUniqueInput>
    connect?: Enumerable<ClickWhereUniqueInput>
    update?: Enumerable<ClickUpdateWithWhereUniqueWithoutMessageInput>
    updateMany?: Enumerable<ClickUpdateManyWithWhereWithoutMessageInput>
    deleteMany?: Enumerable<ClickScalarWhereInput>
  }

  export type MessageContentUncheckedUpdateOneWithoutMessageNestedInput = {
    create?: XOR<MessageContentCreateWithoutMessageInput, MessageContentUncheckedCreateWithoutMessageInput>
    connectOrCreate?: MessageContentCreateOrConnectWithoutMessageInput
    upsert?: MessageContentUpsertWithoutMessageInput
    disconnect?: boolean
    delete?: boolean
    connect?: MessageContentWhereUniqueInput
    update?: XOR<MessageContentUpdateWithoutMessageInput, MessageContentUncheckedUpdateWithoutMessageInput>
  }

  export type MessageCreateNestedOneWithoutMessageContentInput = {
    create?: XOR<MessageCreateWithoutMessageContentInput, MessageUncheckedCreateWithoutMessageContentInput>
    connectOrCreate?: MessageCreateOrConnectWithoutMessageContentInput
    connect?: MessageWhereUniqueInput
  }

  export type MessageUpdateOneRequiredWithoutMessageContentNestedInput = {
    create?: XOR<MessageCreateWithoutMessageContentInput, MessageUncheckedCreateWithoutMessageContentInput>
    connectOrCreate?: MessageCreateOrConnectWithoutMessageContentInput
    upsert?: MessageUpsertWithoutMessageContentInput
    connect?: MessageWhereUniqueInput
    update?: XOR<MessageUpdateWithoutMessageContentInput, MessageUncheckedUpdateWithoutMessageContentInput>
  }

  export type MessageCreateNestedOneWithoutClickInput = {
    create?: XOR<MessageCreateWithoutClickInput, MessageUncheckedCreateWithoutClickInput>
    connectOrCreate?: MessageCreateOrConnectWithoutClickInput
    connect?: MessageWhereUniqueInput
  }

  export type MessageUpdateOneRequiredWithoutClickNestedInput = {
    create?: XOR<MessageCreateWithoutClickInput, MessageUncheckedCreateWithoutClickInput>
    connectOrCreate?: MessageCreateOrConnectWithoutClickInput
    upsert?: MessageUpsertWithoutClickInput
    connect?: MessageWhereUniqueInput
    update?: XOR<MessageUpdateWithoutClickInput, MessageUncheckedUpdateWithoutClickInput>
  }

  export type OrganizationCreateNestedOneWithoutListInput = {
    create?: XOR<OrganizationCreateWithoutListInput, OrganizationUncheckedCreateWithoutListInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutListInput
    connect?: OrganizationWhereUniqueInput
  }

  export type MemberCreateNestedManyWithoutListInput = {
    create?: XOR<Enumerable<MemberCreateWithoutListInput>, Enumerable<MemberUncheckedCreateWithoutListInput>>
    connectOrCreate?: Enumerable<MemberCreateOrConnectWithoutListInput>
    createMany?: MemberCreateManyListInputEnvelope
    connect?: Enumerable<MemberWhereUniqueInput>
  }

  export type MemberUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<Enumerable<MemberCreateWithoutListInput>, Enumerable<MemberUncheckedCreateWithoutListInput>>
    connectOrCreate?: Enumerable<MemberCreateOrConnectWithoutListInput>
    createMany?: MemberCreateManyListInputEnvelope
    connect?: Enumerable<MemberWhereUniqueInput>
  }

  export type OrganizationUpdateOneRequiredWithoutListNestedInput = {
    create?: XOR<OrganizationCreateWithoutListInput, OrganizationUncheckedCreateWithoutListInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutListInput
    upsert?: OrganizationUpsertWithoutListInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<OrganizationUpdateWithoutListInput, OrganizationUncheckedUpdateWithoutListInput>
  }

  export type MemberUpdateManyWithoutListNestedInput = {
    create?: XOR<Enumerable<MemberCreateWithoutListInput>, Enumerable<MemberUncheckedCreateWithoutListInput>>
    connectOrCreate?: Enumerable<MemberCreateOrConnectWithoutListInput>
    upsert?: Enumerable<MemberUpsertWithWhereUniqueWithoutListInput>
    createMany?: MemberCreateManyListInputEnvelope
    set?: Enumerable<MemberWhereUniqueInput>
    disconnect?: Enumerable<MemberWhereUniqueInput>
    delete?: Enumerable<MemberWhereUniqueInput>
    connect?: Enumerable<MemberWhereUniqueInput>
    update?: Enumerable<MemberUpdateWithWhereUniqueWithoutListInput>
    updateMany?: Enumerable<MemberUpdateManyWithWhereWithoutListInput>
    deleteMany?: Enumerable<MemberScalarWhereInput>
  }

  export type MemberUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<Enumerable<MemberCreateWithoutListInput>, Enumerable<MemberUncheckedCreateWithoutListInput>>
    connectOrCreate?: Enumerable<MemberCreateOrConnectWithoutListInput>
    upsert?: Enumerable<MemberUpsertWithWhereUniqueWithoutListInput>
    createMany?: MemberCreateManyListInputEnvelope
    set?: Enumerable<MemberWhereUniqueInput>
    disconnect?: Enumerable<MemberWhereUniqueInput>
    delete?: Enumerable<MemberWhereUniqueInput>
    connect?: Enumerable<MemberWhereUniqueInput>
    update?: Enumerable<MemberUpdateWithWhereUniqueWithoutListInput>
    updateMany?: Enumerable<MemberUpdateManyWithWhereWithoutListInput>
    deleteMany?: Enumerable<MemberScalarWhereInput>
  }

  export type ListCreateNestedOneWithoutMemberInput = {
    create?: XOR<ListCreateWithoutMemberInput, ListUncheckedCreateWithoutMemberInput>
    connectOrCreate?: ListCreateOrConnectWithoutMemberInput
    connect?: ListWhereUniqueInput
  }

  export type ListUpdateOneRequiredWithoutMemberNestedInput = {
    create?: XOR<ListCreateWithoutMemberInput, ListUncheckedCreateWithoutMemberInput>
    connectOrCreate?: ListCreateOrConnectWithoutMemberInput
    upsert?: ListUpsertWithoutMemberInput
    connect?: ListWhereUniqueInput
    update?: XOR<ListUpdateWithoutMemberInput, ListUncheckedUpdateWithoutMemberInput>
  }

  export type EnumMemberStatusFieldUpdateOperationsInput = {
    set?: MemberStatus
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumMemberStatusFilter = {
    equals?: MemberStatus
    in?: Enumerable<MemberStatus>
    notIn?: Enumerable<MemberStatus>
    not?: NestedEnumMemberStatusFilter | MemberStatus
  }

  export type NestedEnumMemberStatusWithAggregatesFilter = {
    equals?: MemberStatus
    in?: Enumerable<MemberStatus>
    notIn?: Enumerable<MemberStatus>
    not?: NestedEnumMemberStatusWithAggregatesFilter | MemberStatus
    _count?: NestedIntFilter
    _min?: NestedEnumMemberStatusFilter
    _max?: NestedEnumMemberStatusFilter
  }

  export type OrganizationCreateWithoutUserInput = {
    id?: string
    name: string
    ApiKey?: ApiKeyCreateNestedManyWithoutOrganizationInput
    List?: ListCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    ApiKey?: ApiKeyUncheckedCreateNestedManyWithoutOrganizationInput
    List?: ListUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutUserInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUserInput, OrganizationUncheckedCreateWithoutUserInput>
  }

  export type OrganizationUpsertWithoutUserInput = {
    update: XOR<OrganizationUpdateWithoutUserInput, OrganizationUncheckedUpdateWithoutUserInput>
    create: XOR<OrganizationCreateWithoutUserInput, OrganizationUncheckedCreateWithoutUserInput>
  }

  export type OrganizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ApiKey?: ApiKeyUpdateManyWithoutOrganizationNestedInput
    List?: ListUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ApiKey?: ApiKeyUncheckedUpdateManyWithoutOrganizationNestedInput
    List?: ListUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserCreateWithoutOrganizationInput = {
    id?: string
    email: string
    createdAt?: Date | string
    password: string
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id?: string
    email: string
    createdAt?: Date | string
    password: string
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserCreateManyOrganizationInputEnvelope = {
    data: Enumerable<UserCreateManyOrganizationInput>
    skipDuplicates?: boolean
  }

  export type ApiKeyCreateWithoutOrganizationInput = {
    id?: string
    createdAt?: Date | string
    active?: boolean
  }

  export type ApiKeyUncheckedCreateWithoutOrganizationInput = {
    id?: string
    createdAt?: Date | string
    active?: boolean
  }

  export type ApiKeyCreateOrConnectWithoutOrganizationInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutOrganizationInput, ApiKeyUncheckedCreateWithoutOrganizationInput>
  }

  export type ApiKeyCreateManyOrganizationInputEnvelope = {
    data: Enumerable<ApiKeyCreateManyOrganizationInput>
    skipDuplicates?: boolean
  }

  export type ListCreateWithoutOrganizationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDefault?: boolean
    name: string
    displayName: string
    Member?: MemberCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateWithoutOrganizationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDefault?: boolean
    name: string
    displayName: string
    Member?: MemberUncheckedCreateNestedManyWithoutListInput
  }

  export type ListCreateOrConnectWithoutOrganizationInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutOrganizationInput, ListUncheckedCreateWithoutOrganizationInput>
  }

  export type ListCreateManyOrganizationInputEnvelope = {
    data: Enumerable<ListCreateManyOrganizationInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    password?: StringFilter | string
    organizationId?: StringFilter | string
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutOrganizationInput, ApiKeyUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ApiKeyCreateWithoutOrganizationInput, ApiKeyUncheckedCreateWithoutOrganizationInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutOrganizationInput, ApiKeyUncheckedUpdateWithoutOrganizationInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutOrganizationInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutApiKeyInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: Enumerable<ApiKeyScalarWhereInput>
    OR?: Enumerable<ApiKeyScalarWhereInput>
    NOT?: Enumerable<ApiKeyScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    active?: BoolFilter | boolean
    organizationId?: StringFilter | string
  }

  export type ListUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ListWhereUniqueInput
    update: XOR<ListUpdateWithoutOrganizationInput, ListUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ListCreateWithoutOrganizationInput, ListUncheckedCreateWithoutOrganizationInput>
  }

  export type ListUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ListWhereUniqueInput
    data: XOR<ListUpdateWithoutOrganizationInput, ListUncheckedUpdateWithoutOrganizationInput>
  }

  export type ListUpdateManyWithWhereWithoutOrganizationInput = {
    where: ListScalarWhereInput
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyWithoutListInput>
  }

  export type ListScalarWhereInput = {
    AND?: Enumerable<ListScalarWhereInput>
    OR?: Enumerable<ListScalarWhereInput>
    NOT?: Enumerable<ListScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDefault?: BoolFilter | boolean
    name?: StringFilter | string
    displayName?: StringFilter | string
    organizationId?: StringFilter | string
  }

  export type OrganizationCreateWithoutApiKeyInput = {
    id?: string
    name: string
    User?: UserCreateNestedManyWithoutOrganizationInput
    List?: ListCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutApiKeyInput = {
    id?: string
    name: string
    User?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    List?: ListUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutApiKeyInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutApiKeyInput, OrganizationUncheckedCreateWithoutApiKeyInput>
  }

  export type OrganizationUpsertWithoutApiKeyInput = {
    update: XOR<OrganizationUpdateWithoutApiKeyInput, OrganizationUncheckedUpdateWithoutApiKeyInput>
    create: XOR<OrganizationCreateWithoutApiKeyInput, OrganizationUncheckedCreateWithoutApiKeyInput>
  }

  export type OrganizationUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateManyWithoutOrganizationNestedInput
    List?: ListUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    List?: ListUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ClickCreateWithoutMessageInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    count?: number
  }

  export type ClickUncheckedCreateWithoutMessageInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    count?: number
  }

  export type ClickCreateOrConnectWithoutMessageInput = {
    where: ClickWhereUniqueInput
    create: XOR<ClickCreateWithoutMessageInput, ClickUncheckedCreateWithoutMessageInput>
  }

  export type ClickCreateManyMessageInputEnvelope = {
    data: Enumerable<ClickCreateManyMessageInput>
    skipDuplicates?: boolean
  }

  export type MessageContentCreateWithoutMessageInput = {
    id?: string
    createdAt?: Date | string
    html?: string | null
  }

  export type MessageContentUncheckedCreateWithoutMessageInput = {
    id?: string
    createdAt?: Date | string
    html?: string | null
  }

  export type MessageContentCreateOrConnectWithoutMessageInput = {
    where: MessageContentWhereUniqueInput
    create: XOR<MessageContentCreateWithoutMessageInput, MessageContentUncheckedCreateWithoutMessageInput>
  }

  export type ClickUpsertWithWhereUniqueWithoutMessageInput = {
    where: ClickWhereUniqueInput
    update: XOR<ClickUpdateWithoutMessageInput, ClickUncheckedUpdateWithoutMessageInput>
    create: XOR<ClickCreateWithoutMessageInput, ClickUncheckedCreateWithoutMessageInput>
  }

  export type ClickUpdateWithWhereUniqueWithoutMessageInput = {
    where: ClickWhereUniqueInput
    data: XOR<ClickUpdateWithoutMessageInput, ClickUncheckedUpdateWithoutMessageInput>
  }

  export type ClickUpdateManyWithWhereWithoutMessageInput = {
    where: ClickScalarWhereInput
    data: XOR<ClickUpdateManyMutationInput, ClickUncheckedUpdateManyWithoutClickInput>
  }

  export type ClickScalarWhereInput = {
    AND?: Enumerable<ClickScalarWhereInput>
    OR?: Enumerable<ClickScalarWhereInput>
    NOT?: Enumerable<ClickScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    count?: IntFilter | number
    messageId?: StringFilter | string
  }

  export type MessageContentUpsertWithoutMessageInput = {
    update: XOR<MessageContentUpdateWithoutMessageInput, MessageContentUncheckedUpdateWithoutMessageInput>
    create: XOR<MessageContentCreateWithoutMessageInput, MessageContentUncheckedCreateWithoutMessageInput>
  }

  export type MessageContentUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    html?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageContentUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    html?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateWithoutMessageContentInput = {
    id?: string
    createdAt?: Date | string
    to?: MessageCreatetoInput | Enumerable<string>
    cc?: MessageCreateccInput | Enumerable<string>
    bcc?: MessageCreatebccInput | Enumerable<string>
    subject?: string | null
    from?: string | null
    openedAt?: Date | string | null
    openCount?: number
    templateName?: string | null
    previewName?: string | null
    Click?: ClickCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutMessageContentInput = {
    id?: string
    createdAt?: Date | string
    to?: MessageCreatetoInput | Enumerable<string>
    cc?: MessageCreateccInput | Enumerable<string>
    bcc?: MessageCreatebccInput | Enumerable<string>
    subject?: string | null
    from?: string | null
    openedAt?: Date | string | null
    openCount?: number
    templateName?: string | null
    previewName?: string | null
    Click?: ClickUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutMessageContentInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutMessageContentInput, MessageUncheckedCreateWithoutMessageContentInput>
  }

  export type MessageUpsertWithoutMessageContentInput = {
    update: XOR<MessageUpdateWithoutMessageContentInput, MessageUncheckedUpdateWithoutMessageContentInput>
    create: XOR<MessageCreateWithoutMessageContentInput, MessageUncheckedCreateWithoutMessageContentInput>
  }

  export type MessageUpdateWithoutMessageContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: MessageUpdatetoInput | Enumerable<string>
    cc?: MessageUpdateccInput | Enumerable<string>
    bcc?: MessageUpdatebccInput | Enumerable<string>
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openCount?: IntFieldUpdateOperationsInput | number
    templateName?: NullableStringFieldUpdateOperationsInput | string | null
    previewName?: NullableStringFieldUpdateOperationsInput | string | null
    Click?: ClickUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutMessageContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: MessageUpdatetoInput | Enumerable<string>
    cc?: MessageUpdateccInput | Enumerable<string>
    bcc?: MessageUpdatebccInput | Enumerable<string>
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openCount?: IntFieldUpdateOperationsInput | number
    templateName?: NullableStringFieldUpdateOperationsInput | string | null
    previewName?: NullableStringFieldUpdateOperationsInput | string | null
    Click?: ClickUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageCreateWithoutClickInput = {
    id?: string
    createdAt?: Date | string
    to?: MessageCreatetoInput | Enumerable<string>
    cc?: MessageCreateccInput | Enumerable<string>
    bcc?: MessageCreatebccInput | Enumerable<string>
    subject?: string | null
    from?: string | null
    openedAt?: Date | string | null
    openCount?: number
    templateName?: string | null
    previewName?: string | null
    MessageContent?: MessageContentCreateNestedOneWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutClickInput = {
    id?: string
    createdAt?: Date | string
    to?: MessageCreatetoInput | Enumerable<string>
    cc?: MessageCreateccInput | Enumerable<string>
    bcc?: MessageCreatebccInput | Enumerable<string>
    subject?: string | null
    from?: string | null
    openedAt?: Date | string | null
    openCount?: number
    templateName?: string | null
    previewName?: string | null
    MessageContent?: MessageContentUncheckedCreateNestedOneWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutClickInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutClickInput, MessageUncheckedCreateWithoutClickInput>
  }

  export type MessageUpsertWithoutClickInput = {
    update: XOR<MessageUpdateWithoutClickInput, MessageUncheckedUpdateWithoutClickInput>
    create: XOR<MessageCreateWithoutClickInput, MessageUncheckedCreateWithoutClickInput>
  }

  export type MessageUpdateWithoutClickInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: MessageUpdatetoInput | Enumerable<string>
    cc?: MessageUpdateccInput | Enumerable<string>
    bcc?: MessageUpdatebccInput | Enumerable<string>
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openCount?: IntFieldUpdateOperationsInput | number
    templateName?: NullableStringFieldUpdateOperationsInput | string | null
    previewName?: NullableStringFieldUpdateOperationsInput | string | null
    MessageContent?: MessageContentUpdateOneWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutClickInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: MessageUpdatetoInput | Enumerable<string>
    cc?: MessageUpdateccInput | Enumerable<string>
    bcc?: MessageUpdatebccInput | Enumerable<string>
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openCount?: IntFieldUpdateOperationsInput | number
    templateName?: NullableStringFieldUpdateOperationsInput | string | null
    previewName?: NullableStringFieldUpdateOperationsInput | string | null
    MessageContent?: MessageContentUncheckedUpdateOneWithoutMessageNestedInput
  }

  export type OrganizationCreateWithoutListInput = {
    id?: string
    name: string
    User?: UserCreateNestedManyWithoutOrganizationInput
    ApiKey?: ApiKeyCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutListInput = {
    id?: string
    name: string
    User?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    ApiKey?: ApiKeyUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutListInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutListInput, OrganizationUncheckedCreateWithoutListInput>
  }

  export type MemberCreateWithoutListInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    status: MemberStatus
  }

  export type MemberUncheckedCreateWithoutListInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    status: MemberStatus
  }

  export type MemberCreateOrConnectWithoutListInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutListInput, MemberUncheckedCreateWithoutListInput>
  }

  export type MemberCreateManyListInputEnvelope = {
    data: Enumerable<MemberCreateManyListInput>
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutListInput = {
    update: XOR<OrganizationUpdateWithoutListInput, OrganizationUncheckedUpdateWithoutListInput>
    create: XOR<OrganizationCreateWithoutListInput, OrganizationUncheckedCreateWithoutListInput>
  }

  export type OrganizationUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateManyWithoutOrganizationNestedInput
    ApiKey?: ApiKeyUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    ApiKey?: ApiKeyUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type MemberUpsertWithWhereUniqueWithoutListInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutListInput, MemberUncheckedUpdateWithoutListInput>
    create: XOR<MemberCreateWithoutListInput, MemberUncheckedCreateWithoutListInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutListInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutListInput, MemberUncheckedUpdateWithoutListInput>
  }

  export type MemberUpdateManyWithWhereWithoutListInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutMemberInput>
  }

  export type MemberScalarWhereInput = {
    AND?: Enumerable<MemberScalarWhereInput>
    OR?: Enumerable<MemberScalarWhereInput>
    NOT?: Enumerable<MemberScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    listId?: StringFilter | string
    status?: EnumMemberStatusFilter | MemberStatus
  }

  export type ListCreateWithoutMemberInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDefault?: boolean
    name: string
    displayName: string
    Organization: OrganizationCreateNestedOneWithoutListInput
  }

  export type ListUncheckedCreateWithoutMemberInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDefault?: boolean
    name: string
    displayName: string
    organizationId: string
  }

  export type ListCreateOrConnectWithoutMemberInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutMemberInput, ListUncheckedCreateWithoutMemberInput>
  }

  export type ListUpsertWithoutMemberInput = {
    update: XOR<ListUpdateWithoutMemberInput, ListUncheckedUpdateWithoutMemberInput>
    create: XOR<ListCreateWithoutMemberInput, ListUncheckedCreateWithoutMemberInput>
  }

  export type ListUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    Organization?: OrganizationUpdateOneRequiredWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyOrganizationInput = {
    id?: string
    email: string
    createdAt?: Date | string
    password: string
  }

  export type ApiKeyCreateManyOrganizationInput = {
    id?: string
    createdAt?: Date | string
    active?: boolean
  }

  export type ListCreateManyOrganizationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDefault?: boolean
    name: string
    displayName: string
  }

  export type UserUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ApiKeyUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApiKeyUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApiKeyUncheckedUpdateManyWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ListUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    Member?: MemberUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    Member?: MemberUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateManyWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
  }

  export type ClickCreateManyMessageInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    count?: number
  }

  export type ClickUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ClickUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ClickUncheckedUpdateManyWithoutClickInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type MemberCreateManyListInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    status: MemberStatus
  }

  export type MemberUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | MemberStatus
  }

  export type MemberUncheckedUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | MemberStatus
  }

  export type MemberUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | MemberStatus
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}