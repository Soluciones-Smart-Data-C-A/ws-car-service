/**
 * Client
 **/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Vehicle
 *
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>;
/**
 * Model ServiceIcon
 *
 */
export type ServiceIcon = $Result.DefaultSelection<Prisma.$ServiceIconPayload>;
/**
 * Model Service
 *
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>;
/**
 * Model ServiceRule
 *
 */
export type ServiceRule = $Result.DefaultSelection<Prisma.$ServiceRulePayload>;
/**
 * Model ServiceRecord
 *
 */
export type ServiceRecord =
  $Result.DefaultSelection<Prisma.$ServiceRecordPayload>;
/**
 * Model MileageHistory
 *
 */
export type MileageHistory =
  $Result.DefaultSelection<Prisma.$MileageHistoryPayload>;

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
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

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
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Vehicles
   * const vehicles = await prisma.vehicle.findMany()
   * ```
   */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceIcon`: Exposes CRUD operations for the **ServiceIcon** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ServiceIcons
   * const serviceIcons = await prisma.serviceIcon.findMany()
   * ```
   */
  get serviceIcon(): Prisma.ServiceIconDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Services
   * const services = await prisma.service.findMany()
   * ```
   */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceRule`: Exposes CRUD operations for the **ServiceRule** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ServiceRules
   * const serviceRules = await prisma.serviceRule.findMany()
   * ```
   */
  get serviceRule(): Prisma.ServiceRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceRecord`: Exposes CRUD operations for the **ServiceRecord** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ServiceRecords
   * const serviceRecords = await prisma.serviceRecord.findMany()
   * ```
   */
  get serviceRecord(): Prisma.ServiceRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mileageHistory`: Exposes CRUD operations for the **MileageHistory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more MileageHistories
   * const mileageHistories = await prisma.mileageHistory.findMany()
   * ```
   */
  get mileageHistory(): Prisma.MileageHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends bigint
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Vehicle: 'Vehicle';
    ServiceIcon: 'ServiceIcon';
    Service: 'Service';
    ServiceRule: 'ServiceRule';
    ServiceRecord: 'ServiceRecord';
    MileageHistory: 'MileageHistory';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'user'
        | 'vehicle'
        | 'serviceIcon'
        | 'service'
        | 'serviceRule'
        | 'serviceRecord'
        | 'mileageHistory';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>;
        fields: Prisma.VehicleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>;
          };
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>;
          };
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[];
          };
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>;
          };
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>;
          };
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>;
          };
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>;
          };
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVehicle>;
          };
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<VehicleGroupByOutputType>[];
          };
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>;
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number;
          };
        };
      };
      ServiceIcon: {
        payload: Prisma.$ServiceIconPayload<ExtArgs>;
        fields: Prisma.ServiceIconFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ServiceIconFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceIconPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ServiceIconFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceIconPayload>;
          };
          findFirst: {
            args: Prisma.ServiceIconFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceIconPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ServiceIconFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceIconPayload>;
          };
          findMany: {
            args: Prisma.ServiceIconFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceIconPayload>[];
          };
          create: {
            args: Prisma.ServiceIconCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceIconPayload>;
          };
          createMany: {
            args: Prisma.ServiceIconCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.ServiceIconDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceIconPayload>;
          };
          update: {
            args: Prisma.ServiceIconUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceIconPayload>;
          };
          deleteMany: {
            args: Prisma.ServiceIconDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ServiceIconUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ServiceIconUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceIconPayload>;
          };
          aggregate: {
            args: Prisma.ServiceIconAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateServiceIcon>;
          };
          groupBy: {
            args: Prisma.ServiceIconGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ServiceIconGroupByOutputType>[];
          };
          count: {
            args: Prisma.ServiceIconCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ServiceIconCountAggregateOutputType>
              | number;
          };
        };
      };
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>;
        fields: Prisma.ServiceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>;
          };
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>;
          };
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[];
          };
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>;
          };
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>;
          };
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>;
          };
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>;
          };
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateService>;
          };
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ServiceGroupByOutputType>[];
          };
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>;
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number;
          };
        };
      };
      ServiceRule: {
        payload: Prisma.$ServiceRulePayload<ExtArgs>;
        fields: Prisma.ServiceRuleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ServiceRuleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceRulePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ServiceRuleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceRulePayload>;
          };
          findFirst: {
            args: Prisma.ServiceRuleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceRulePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ServiceRuleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceRulePayload>;
          };
          findMany: {
            args: Prisma.ServiceRuleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceRulePayload>[];
          };
          create: {
            args: Prisma.ServiceRuleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceRulePayload>;
          };
          createMany: {
            args: Prisma.ServiceRuleCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.ServiceRuleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceRulePayload>;
          };
          update: {
            args: Prisma.ServiceRuleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceRulePayload>;
          };
          deleteMany: {
            args: Prisma.ServiceRuleDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ServiceRuleUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ServiceRuleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceRulePayload>;
          };
          aggregate: {
            args: Prisma.ServiceRuleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateServiceRule>;
          };
          groupBy: {
            args: Prisma.ServiceRuleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ServiceRuleGroupByOutputType>[];
          };
          count: {
            args: Prisma.ServiceRuleCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ServiceRuleCountAggregateOutputType>
              | number;
          };
        };
      };
      ServiceRecord: {
        payload: Prisma.$ServiceRecordPayload<ExtArgs>;
        fields: Prisma.ServiceRecordFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ServiceRecordFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceRecordPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ServiceRecordFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceRecordPayload>;
          };
          findFirst: {
            args: Prisma.ServiceRecordFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceRecordPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ServiceRecordFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceRecordPayload>;
          };
          findMany: {
            args: Prisma.ServiceRecordFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceRecordPayload>[];
          };
          create: {
            args: Prisma.ServiceRecordCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceRecordPayload>;
          };
          createMany: {
            args: Prisma.ServiceRecordCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.ServiceRecordDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceRecordPayload>;
          };
          update: {
            args: Prisma.ServiceRecordUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceRecordPayload>;
          };
          deleteMany: {
            args: Prisma.ServiceRecordDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ServiceRecordUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ServiceRecordUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceRecordPayload>;
          };
          aggregate: {
            args: Prisma.ServiceRecordAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateServiceRecord>;
          };
          groupBy: {
            args: Prisma.ServiceRecordGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ServiceRecordGroupByOutputType>[];
          };
          count: {
            args: Prisma.ServiceRecordCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ServiceRecordCountAggregateOutputType>
              | number;
          };
        };
      };
      MileageHistory: {
        payload: Prisma.$MileageHistoryPayload<ExtArgs>;
        fields: Prisma.MileageHistoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MileageHistoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MileageHistoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MileageHistoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MileageHistoryPayload>;
          };
          findFirst: {
            args: Prisma.MileageHistoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MileageHistoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MileageHistoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MileageHistoryPayload>;
          };
          findMany: {
            args: Prisma.MileageHistoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MileageHistoryPayload>[];
          };
          create: {
            args: Prisma.MileageHistoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MileageHistoryPayload>;
          };
          createMany: {
            args: Prisma.MileageHistoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.MileageHistoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MileageHistoryPayload>;
          };
          update: {
            args: Prisma.MileageHistoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MileageHistoryPayload>;
          };
          deleteMany: {
            args: Prisma.MileageHistoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MileageHistoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.MileageHistoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MileageHistoryPayload>;
          };
          aggregate: {
            args: Prisma.MileageHistoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMileageHistory>;
          };
          groupBy: {
            args: Prisma.MileageHistoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MileageHistoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.MileageHistoryCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<MileageHistoryCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    vehicle?: VehicleOmit;
    serviceIcon?: ServiceIconOmit;
    service?: ServiceOmit;
    serviceRule?: ServiceRuleOmit;
    serviceRecord?: ServiceRecordOmit;
    mileageHistory?: MileageHistoryOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    vehicles: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    vehicles?: boolean | UserCountOutputTypeCountVehiclesArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVehiclesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: VehicleWhereInput;
  };

  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    serviceRecords: number;
    mileageHistory: number;
  };

  export type VehicleCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    serviceRecords?: boolean | VehicleCountOutputTypeCountServiceRecordsArgs;
    mileageHistory?: boolean | VehicleCountOutputTypeCountMileageHistoryArgs;
  };

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountServiceRecordsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ServiceRecordWhereInput;
  };

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountMileageHistoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MileageHistoryWhereInput;
  };

  /**
   * Count Type ServiceIconCountOutputType
   */

  export type ServiceIconCountOutputType = {
    services: number;
    rules: number;
  };

  export type ServiceIconCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    services?: boolean | ServiceIconCountOutputTypeCountServicesArgs;
    rules?: boolean | ServiceIconCountOutputTypeCountRulesArgs;
  };

  // Custom InputTypes
  /**
   * ServiceIconCountOutputType without action
   */
  export type ServiceIconCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceIconCountOutputType
     */
    select?: ServiceIconCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ServiceIconCountOutputType without action
   */
  export type ServiceIconCountOutputTypeCountServicesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ServiceWhereInput;
  };

  /**
   * ServiceIconCountOutputType without action
   */
  export type ServiceIconCountOutputTypeCountRulesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ServiceRuleWhereInput;
  };

  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    records: number;
  };

  export type ServiceCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    records?: boolean | ServiceCountOutputTypeCountRecordsArgs;
  };

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountRecordsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ServiceRecordWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    username: string | null;
    phone: string | null;
    email: string | null;
    password: string | null;
    otpCode: string | null;
    otpExpires: Date | null;
    isVerified: boolean | null;
    createdAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    username: string | null;
    phone: string | null;
    email: string | null;
    password: string | null;
    otpCode: string | null;
    otpExpires: Date | null;
    isVerified: boolean | null;
    createdAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    username: number;
    phone: number;
    email: number;
    password: number;
    otpCode: number;
    otpExpires: number;
    isVerified: number;
    createdAt: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    username?: true;
    phone?: true;
    email?: true;
    password?: true;
    otpCode?: true;
    otpExpires?: true;
    isVerified?: true;
    createdAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    username?: true;
    phone?: true;
    email?: true;
    password?: true;
    otpCode?: true;
    otpExpires?: true;
    isVerified?: true;
    createdAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    username?: true;
    phone?: true;
    email?: true;
    password?: true;
    otpCode?: true;
    otpExpires?: true;
    isVerified?: true;
    createdAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: number;
    username: string;
    phone: string;
    email: string;
    password: string;
    otpCode: string | null;
    otpExpires: Date | null;
    isVerified: boolean;
    createdAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      phone?: boolean;
      email?: boolean;
      password?: boolean;
      otpCode?: boolean;
      otpExpires?: boolean;
      isVerified?: boolean;
      createdAt?: boolean;
      vehicles?: boolean | User$vehiclesArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    username?: boolean;
    phone?: boolean;
    email?: boolean;
    password?: boolean;
    otpCode?: boolean;
    otpExpires?: boolean;
    isVerified?: boolean;
    createdAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'username'
    | 'phone'
    | 'email'
    | 'password'
    | 'otpCode'
    | 'otpExpires'
    | 'isVerified'
    | 'createdAt',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      vehicles: Prisma.$VehiclePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        username: string;
        phone: string;
        email: string;
        password: string;
        otpCode: string | null;
        otpExpires: Date | null;
        isVerified: boolean;
        createdAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
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
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

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
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    vehicles<T extends User$vehiclesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$vehiclesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$VehiclePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'Int'>;
    readonly username: FieldRef<'User', 'String'>;
    readonly phone: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly otpCode: FieldRef<'User', 'String'>;
    readonly otpExpires: FieldRef<'User', 'DateTime'>;
    readonly isVerified: FieldRef<'User', 'Boolean'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.vehicles
   */
  export type User$vehiclesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null;
    where?: VehicleWhereInput;
    orderBy?:
      | VehicleOrderByWithRelationInput
      | VehicleOrderByWithRelationInput[];
    cursor?: VehicleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null;
    _avg: VehicleAvgAggregateOutputType | null;
    _sum: VehicleSumAggregateOutputType | null;
    _min: VehicleMinAggregateOutputType | null;
    _max: VehicleMaxAggregateOutputType | null;
  };

  export type VehicleAvgAggregateOutputType = {
    id: number | null;
    initialMileage: number | null;
    currentMileage: number | null;
    lastServiceMileage: number | null;
    userId: number | null;
  };

  export type VehicleSumAggregateOutputType = {
    id: number | null;
    initialMileage: number | null;
    currentMileage: number | null;
    lastServiceMileage: number | null;
    userId: number | null;
  };

  export type VehicleMinAggregateOutputType = {
    id: number | null;
    make: string | null;
    model: string | null;
    plate: string | null;
    initialMileage: number | null;
    currentMileage: number | null;
    lastServiceDate: Date | null;
    lastServiceMileage: number | null;
    imageUrl: string | null;
    userId: number | null;
  };

  export type VehicleMaxAggregateOutputType = {
    id: number | null;
    make: string | null;
    model: string | null;
    plate: string | null;
    initialMileage: number | null;
    currentMileage: number | null;
    lastServiceDate: Date | null;
    lastServiceMileage: number | null;
    imageUrl: string | null;
    userId: number | null;
  };

  export type VehicleCountAggregateOutputType = {
    id: number;
    make: number;
    model: number;
    plate: number;
    initialMileage: number;
    currentMileage: number;
    lastServiceDate: number;
    lastServiceMileage: number;
    imageUrl: number;
    userId: number;
    _all: number;
  };

  export type VehicleAvgAggregateInputType = {
    id?: true;
    initialMileage?: true;
    currentMileage?: true;
    lastServiceMileage?: true;
    userId?: true;
  };

  export type VehicleSumAggregateInputType = {
    id?: true;
    initialMileage?: true;
    currentMileage?: true;
    lastServiceMileage?: true;
    userId?: true;
  };

  export type VehicleMinAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    plate?: true;
    initialMileage?: true;
    currentMileage?: true;
    lastServiceDate?: true;
    lastServiceMileage?: true;
    imageUrl?: true;
    userId?: true;
  };

  export type VehicleMaxAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    plate?: true;
    initialMileage?: true;
    currentMileage?: true;
    lastServiceDate?: true;
    lastServiceMileage?: true;
    imageUrl?: true;
    userId?: true;
  };

  export type VehicleCountAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    plate?: true;
    initialMileage?: true;
    currentMileage?: true;
    lastServiceDate?: true;
    lastServiceMileage?: true;
    imageUrl?: true;
    userId?: true;
    _all?: true;
  };

  export type VehicleAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Vehicles to fetch.
     */
    orderBy?:
      | VehicleOrderByWithRelationInput
      | VehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Vehicles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Vehicles
     **/
    _count?: true | VehicleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: VehicleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: VehicleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VehicleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VehicleMaxAggregateInputType;
  };

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
    [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>;
  };

  export type VehicleGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: VehicleWhereInput;
    orderBy?:
      | VehicleOrderByWithAggregationInput
      | VehicleOrderByWithAggregationInput[];
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum;
    having?: VehicleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VehicleCountAggregateInputType | true;
    _avg?: VehicleAvgAggregateInputType;
    _sum?: VehicleSumAggregateInputType;
    _min?: VehicleMinAggregateInputType;
    _max?: VehicleMaxAggregateInputType;
  };

  export type VehicleGroupByOutputType = {
    id: number;
    make: string;
    model: string;
    plate: string;
    initialMileage: number;
    currentMileage: number;
    lastServiceDate: Date;
    lastServiceMileage: number;
    imageUrl: string | null;
    userId: number;
    _count: VehicleCountAggregateOutputType | null;
    _avg: VehicleAvgAggregateOutputType | null;
    _sum: VehicleSumAggregateOutputType | null;
    _min: VehicleMinAggregateOutputType | null;
    _max: VehicleMaxAggregateOutputType | null;
  };

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<VehicleGroupByOutputType, T['by']> & {
          [P in keyof T & keyof VehicleGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>;
        }
      >
    >;

  export type VehicleSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      make?: boolean;
      model?: boolean;
      plate?: boolean;
      initialMileage?: boolean;
      currentMileage?: boolean;
      lastServiceDate?: boolean;
      lastServiceMileage?: boolean;
      imageUrl?: boolean;
      userId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      serviceRecords?: boolean | Vehicle$serviceRecordsArgs<ExtArgs>;
      mileageHistory?: boolean | Vehicle$mileageHistoryArgs<ExtArgs>;
      _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['vehicle']
  >;

  export type VehicleSelectScalar = {
    id?: boolean;
    make?: boolean;
    model?: boolean;
    plate?: boolean;
    initialMileage?: boolean;
    currentMileage?: boolean;
    lastServiceDate?: boolean;
    lastServiceMileage?: boolean;
    imageUrl?: boolean;
    userId?: boolean;
  };

  export type VehicleOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'make'
    | 'model'
    | 'plate'
    | 'initialMileage'
    | 'currentMileage'
    | 'lastServiceDate'
    | 'lastServiceMileage'
    | 'imageUrl'
    | 'userId',
    ExtArgs['result']['vehicle']
  >;
  export type VehicleInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    serviceRecords?: boolean | Vehicle$serviceRecordsArgs<ExtArgs>;
    mileageHistory?: boolean | Vehicle$mileageHistoryArgs<ExtArgs>;
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $VehiclePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Vehicle';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      serviceRecords: Prisma.$ServiceRecordPayload<ExtArgs>[];
      mileageHistory: Prisma.$MileageHistoryPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        make: string;
        model: string;
        plate: string;
        initialMileage: number;
        currentMileage: number;
        lastServiceDate: Date;
        lastServiceMileage: number;
        imageUrl: string | null;
        userId: number;
      },
      ExtArgs['result']['vehicle']
    >;
    composites: {};
  };

  type VehicleGetPayload<
    S extends boolean | null | undefined | VehicleDefaultArgs,
  > = $Result.GetResult<Prisma.$VehiclePayload, S>;

  type VehicleCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VehicleCountAggregateInputType | true;
  };

  export interface VehicleDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'];
      meta: { name: 'Vehicle' };
    };
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(
      args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>,
    ): Prisma__VehicleClient<
      $Result.GetResult<
        Prisma.$VehiclePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(
      args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__VehicleClient<
      $Result.GetResult<
        Prisma.$VehiclePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(
      args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>,
    ): Prisma__VehicleClient<
      $Result.GetResult<
        Prisma.$VehiclePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__VehicleClient<
      $Result.GetResult<
        Prisma.$VehiclePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     *
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     *
     */
    findMany<T extends VehicleFindManyArgs>(
      args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VehiclePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     *
     */
    create<T extends VehicleCreateArgs>(
      args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>,
    ): Prisma__VehicleClient<
      $Result.GetResult<
        Prisma.$VehiclePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VehicleCreateManyArgs>(
      args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     *
     */
    delete<T extends VehicleDeleteArgs>(
      args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>,
    ): Prisma__VehicleClient<
      $Result.GetResult<
        Prisma.$VehiclePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VehicleUpdateArgs>(
      args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>,
    ): Prisma__VehicleClient<
      $Result.GetResult<
        Prisma.$VehiclePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VehicleDeleteManyArgs>(
      args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VehicleUpdateManyArgs>(
      args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(
      args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>,
    ): Prisma__VehicleClient<
      $Result.GetResult<
        Prisma.$VehiclePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
     **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(
      args: Subset<T, VehicleAggregateArgs>,
    ): Prisma.PrismaPromise<GetVehicleAggregateType<T>>;

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetVehicleGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Vehicle model
     */
    readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    serviceRecords<T extends Vehicle$serviceRecordsArgs<ExtArgs> = {}>(
      args?: Subset<T, Vehicle$serviceRecordsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ServiceRecordPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    mileageHistory<T extends Vehicle$mileageHistoryArgs<ExtArgs> = {}>(
      args?: Subset<T, Vehicle$mileageHistoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MileageHistoryPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<'Vehicle', 'Int'>;
    readonly make: FieldRef<'Vehicle', 'String'>;
    readonly model: FieldRef<'Vehicle', 'String'>;
    readonly plate: FieldRef<'Vehicle', 'String'>;
    readonly initialMileage: FieldRef<'Vehicle', 'Int'>;
    readonly currentMileage: FieldRef<'Vehicle', 'Int'>;
    readonly lastServiceDate: FieldRef<'Vehicle', 'DateTime'>;
    readonly lastServiceMileage: FieldRef<'Vehicle', 'Int'>;
    readonly imageUrl: FieldRef<'Vehicle', 'String'>;
    readonly userId: FieldRef<'Vehicle', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null;
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput;
  };

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null;
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput;
  };

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null;
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Vehicles to fetch.
     */
    orderBy?:
      | VehicleOrderByWithRelationInput
      | VehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Vehicles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null;
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Vehicles to fetch.
     */
    orderBy?:
      | VehicleOrderByWithRelationInput
      | VehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Vehicles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null;
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Vehicles to fetch.
     */
    orderBy?:
      | VehicleOrderByWithRelationInput
      | VehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Vehicles.
     */
    skip?: number;
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null;
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>;
  };

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null;
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>;
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput;
  };

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>;
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput;
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number;
  };

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null;
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput;
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>;
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>;
  };

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null;
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput;
  };

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput;
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number;
  };

  /**
   * Vehicle.serviceRecords
   */
  export type Vehicle$serviceRecordsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRecord
     */
    select?: ServiceRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRecord
     */
    omit?: ServiceRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRecordInclude<ExtArgs> | null;
    where?: ServiceRecordWhereInput;
    orderBy?:
      | ServiceRecordOrderByWithRelationInput
      | ServiceRecordOrderByWithRelationInput[];
    cursor?: ServiceRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ServiceRecordScalarFieldEnum | ServiceRecordScalarFieldEnum[];
  };

  /**
   * Vehicle.mileageHistory
   */
  export type Vehicle$mileageHistoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MileageHistory
     */
    select?: MileageHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MileageHistory
     */
    omit?: MileageHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MileageHistoryInclude<ExtArgs> | null;
    where?: MileageHistoryWhereInput;
    orderBy?:
      | MileageHistoryOrderByWithRelationInput
      | MileageHistoryOrderByWithRelationInput[];
    cursor?: MileageHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MileageHistoryScalarFieldEnum | MileageHistoryScalarFieldEnum[];
  };

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null;
  };

  /**
   * Model ServiceIcon
   */

  export type AggregateServiceIcon = {
    _count: ServiceIconCountAggregateOutputType | null;
    _avg: ServiceIconAvgAggregateOutputType | null;
    _sum: ServiceIconSumAggregateOutputType | null;
    _min: ServiceIconMinAggregateOutputType | null;
    _max: ServiceIconMaxAggregateOutputType | null;
  };

  export type ServiceIconAvgAggregateOutputType = {
    id: number | null;
  };

  export type ServiceIconSumAggregateOutputType = {
    id: number | null;
  };

  export type ServiceIconMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    icon: string | null;
  };

  export type ServiceIconMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    icon: string | null;
  };

  export type ServiceIconCountAggregateOutputType = {
    id: number;
    name: number;
    icon: number;
    _all: number;
  };

  export type ServiceIconAvgAggregateInputType = {
    id?: true;
  };

  export type ServiceIconSumAggregateInputType = {
    id?: true;
  };

  export type ServiceIconMinAggregateInputType = {
    id?: true;
    name?: true;
    icon?: true;
  };

  export type ServiceIconMaxAggregateInputType = {
    id?: true;
    name?: true;
    icon?: true;
  };

  export type ServiceIconCountAggregateInputType = {
    id?: true;
    name?: true;
    icon?: true;
    _all?: true;
  };

  export type ServiceIconAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ServiceIcon to aggregate.
     */
    where?: ServiceIconWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceIcons to fetch.
     */
    orderBy?:
      | ServiceIconOrderByWithRelationInput
      | ServiceIconOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ServiceIconWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceIcons from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceIcons.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ServiceIcons
     **/
    _count?: true | ServiceIconCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ServiceIconAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ServiceIconSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ServiceIconMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ServiceIconMaxAggregateInputType;
  };

  export type GetServiceIconAggregateType<T extends ServiceIconAggregateArgs> =
    {
      [P in keyof T & keyof AggregateServiceIcon]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateServiceIcon[P]>
        : GetScalarType<T[P], AggregateServiceIcon[P]>;
    };

  export type ServiceIconGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ServiceIconWhereInput;
    orderBy?:
      | ServiceIconOrderByWithAggregationInput
      | ServiceIconOrderByWithAggregationInput[];
    by: ServiceIconScalarFieldEnum[] | ServiceIconScalarFieldEnum;
    having?: ServiceIconScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServiceIconCountAggregateInputType | true;
    _avg?: ServiceIconAvgAggregateInputType;
    _sum?: ServiceIconSumAggregateInputType;
    _min?: ServiceIconMinAggregateInputType;
    _max?: ServiceIconMaxAggregateInputType;
  };

  export type ServiceIconGroupByOutputType = {
    id: number;
    name: string;
    icon: string;
    _count: ServiceIconCountAggregateOutputType | null;
    _avg: ServiceIconAvgAggregateOutputType | null;
    _sum: ServiceIconSumAggregateOutputType | null;
    _min: ServiceIconMinAggregateOutputType | null;
    _max: ServiceIconMaxAggregateOutputType | null;
  };

  type GetServiceIconGroupByPayload<T extends ServiceIconGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ServiceIconGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof ServiceIconGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceIconGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceIconGroupByOutputType[P]>;
        }
      >
    >;

  export type ServiceIconSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      icon?: boolean;
      services?: boolean | ServiceIcon$servicesArgs<ExtArgs>;
      rules?: boolean | ServiceIcon$rulesArgs<ExtArgs>;
      _count?: boolean | ServiceIconCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['serviceIcon']
  >;

  export type ServiceIconSelectScalar = {
    id?: boolean;
    name?: boolean;
    icon?: boolean;
  };

  export type ServiceIconOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'icon',
    ExtArgs['result']['serviceIcon']
  >;
  export type ServiceIconInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    services?: boolean | ServiceIcon$servicesArgs<ExtArgs>;
    rules?: boolean | ServiceIcon$rulesArgs<ExtArgs>;
    _count?: boolean | ServiceIconCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $ServiceIconPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ServiceIcon';
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[];
      rules: Prisma.$ServiceRulePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        icon: string;
      },
      ExtArgs['result']['serviceIcon']
    >;
    composites: {};
  };

  type ServiceIconGetPayload<
    S extends boolean | null | undefined | ServiceIconDefaultArgs,
  > = $Result.GetResult<Prisma.$ServiceIconPayload, S>;

  type ServiceIconCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ServiceIconFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ServiceIconCountAggregateInputType | true;
  };

  export interface ServiceIconDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ServiceIcon'];
      meta: { name: 'ServiceIcon' };
    };
    /**
     * Find zero or one ServiceIcon that matches the filter.
     * @param {ServiceIconFindUniqueArgs} args - Arguments to find a ServiceIcon
     * @example
     * // Get one ServiceIcon
     * const serviceIcon = await prisma.serviceIcon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceIconFindUniqueArgs>(
      args: SelectSubset<T, ServiceIconFindUniqueArgs<ExtArgs>>,
    ): Prisma__ServiceIconClient<
      $Result.GetResult<
        Prisma.$ServiceIconPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ServiceIcon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceIconFindUniqueOrThrowArgs} args - Arguments to find a ServiceIcon
     * @example
     * // Get one ServiceIcon
     * const serviceIcon = await prisma.serviceIcon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceIconFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ServiceIconFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ServiceIconClient<
      $Result.GetResult<
        Prisma.$ServiceIconPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ServiceIcon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceIconFindFirstArgs} args - Arguments to find a ServiceIcon
     * @example
     * // Get one ServiceIcon
     * const serviceIcon = await prisma.serviceIcon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceIconFindFirstArgs>(
      args?: SelectSubset<T, ServiceIconFindFirstArgs<ExtArgs>>,
    ): Prisma__ServiceIconClient<
      $Result.GetResult<
        Prisma.$ServiceIconPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ServiceIcon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceIconFindFirstOrThrowArgs} args - Arguments to find a ServiceIcon
     * @example
     * // Get one ServiceIcon
     * const serviceIcon = await prisma.serviceIcon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceIconFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ServiceIconFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ServiceIconClient<
      $Result.GetResult<
        Prisma.$ServiceIconPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ServiceIcons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceIconFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceIcons
     * const serviceIcons = await prisma.serviceIcon.findMany()
     *
     * // Get first 10 ServiceIcons
     * const serviceIcons = await prisma.serviceIcon.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const serviceIconWithIdOnly = await prisma.serviceIcon.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ServiceIconFindManyArgs>(
      args?: SelectSubset<T, ServiceIconFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ServiceIconPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ServiceIcon.
     * @param {ServiceIconCreateArgs} args - Arguments to create a ServiceIcon.
     * @example
     * // Create one ServiceIcon
     * const ServiceIcon = await prisma.serviceIcon.create({
     *   data: {
     *     // ... data to create a ServiceIcon
     *   }
     * })
     *
     */
    create<T extends ServiceIconCreateArgs>(
      args: SelectSubset<T, ServiceIconCreateArgs<ExtArgs>>,
    ): Prisma__ServiceIconClient<
      $Result.GetResult<
        Prisma.$ServiceIconPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ServiceIcons.
     * @param {ServiceIconCreateManyArgs} args - Arguments to create many ServiceIcons.
     * @example
     * // Create many ServiceIcons
     * const serviceIcon = await prisma.serviceIcon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ServiceIconCreateManyArgs>(
      args?: SelectSubset<T, ServiceIconCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a ServiceIcon.
     * @param {ServiceIconDeleteArgs} args - Arguments to delete one ServiceIcon.
     * @example
     * // Delete one ServiceIcon
     * const ServiceIcon = await prisma.serviceIcon.delete({
     *   where: {
     *     // ... filter to delete one ServiceIcon
     *   }
     * })
     *
     */
    delete<T extends ServiceIconDeleteArgs>(
      args: SelectSubset<T, ServiceIconDeleteArgs<ExtArgs>>,
    ): Prisma__ServiceIconClient<
      $Result.GetResult<
        Prisma.$ServiceIconPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ServiceIcon.
     * @param {ServiceIconUpdateArgs} args - Arguments to update one ServiceIcon.
     * @example
     * // Update one ServiceIcon
     * const serviceIcon = await prisma.serviceIcon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ServiceIconUpdateArgs>(
      args: SelectSubset<T, ServiceIconUpdateArgs<ExtArgs>>,
    ): Prisma__ServiceIconClient<
      $Result.GetResult<
        Prisma.$ServiceIconPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ServiceIcons.
     * @param {ServiceIconDeleteManyArgs} args - Arguments to filter ServiceIcons to delete.
     * @example
     * // Delete a few ServiceIcons
     * const { count } = await prisma.serviceIcon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ServiceIconDeleteManyArgs>(
      args?: SelectSubset<T, ServiceIconDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ServiceIcons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceIconUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceIcons
     * const serviceIcon = await prisma.serviceIcon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ServiceIconUpdateManyArgs>(
      args: SelectSubset<T, ServiceIconUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one ServiceIcon.
     * @param {ServiceIconUpsertArgs} args - Arguments to update or create a ServiceIcon.
     * @example
     * // Update or create a ServiceIcon
     * const serviceIcon = await prisma.serviceIcon.upsert({
     *   create: {
     *     // ... data to create a ServiceIcon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceIcon we want to update
     *   }
     * })
     */
    upsert<T extends ServiceIconUpsertArgs>(
      args: SelectSubset<T, ServiceIconUpsertArgs<ExtArgs>>,
    ): Prisma__ServiceIconClient<
      $Result.GetResult<
        Prisma.$ServiceIconPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ServiceIcons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceIconCountArgs} args - Arguments to filter ServiceIcons to count.
     * @example
     * // Count the number of ServiceIcons
     * const count = await prisma.serviceIcon.count({
     *   where: {
     *     // ... the filter for the ServiceIcons we want to count
     *   }
     * })
     **/
    count<T extends ServiceIconCountArgs>(
      args?: Subset<T, ServiceIconCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceIconCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ServiceIcon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceIconAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceIconAggregateArgs>(
      args: Subset<T, ServiceIconAggregateArgs>,
    ): Prisma.PrismaPromise<GetServiceIconAggregateType<T>>;

    /**
     * Group by ServiceIcon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceIconGroupByArgs} args - Group by arguments.
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
      T extends ServiceIconGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceIconGroupByArgs['orderBy'] }
        : { orderBy?: ServiceIconGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ServiceIconGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetServiceIconGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ServiceIcon model
     */
    readonly fields: ServiceIconFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceIcon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceIconClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    services<T extends ServiceIcon$servicesArgs<ExtArgs> = {}>(
      args?: Subset<T, ServiceIcon$servicesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ServicePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    rules<T extends ServiceIcon$rulesArgs<ExtArgs> = {}>(
      args?: Subset<T, ServiceIcon$rulesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ServiceRulePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ServiceIcon model
   */
  interface ServiceIconFieldRefs {
    readonly id: FieldRef<'ServiceIcon', 'Int'>;
    readonly name: FieldRef<'ServiceIcon', 'String'>;
    readonly icon: FieldRef<'ServiceIcon', 'String'>;
  }

  // Custom InputTypes
  /**
   * ServiceIcon findUnique
   */
  export type ServiceIconFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceIcon
     */
    select?: ServiceIconSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceIcon
     */
    omit?: ServiceIconOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIconInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceIcon to fetch.
     */
    where: ServiceIconWhereUniqueInput;
  };

  /**
   * ServiceIcon findUniqueOrThrow
   */
  export type ServiceIconFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceIcon
     */
    select?: ServiceIconSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceIcon
     */
    omit?: ServiceIconOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIconInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceIcon to fetch.
     */
    where: ServiceIconWhereUniqueInput;
  };

  /**
   * ServiceIcon findFirst
   */
  export type ServiceIconFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceIcon
     */
    select?: ServiceIconSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceIcon
     */
    omit?: ServiceIconOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIconInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceIcon to fetch.
     */
    where?: ServiceIconWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceIcons to fetch.
     */
    orderBy?:
      | ServiceIconOrderByWithRelationInput
      | ServiceIconOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ServiceIcons.
     */
    cursor?: ServiceIconWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceIcons from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceIcons.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ServiceIcons.
     */
    distinct?: ServiceIconScalarFieldEnum | ServiceIconScalarFieldEnum[];
  };

  /**
   * ServiceIcon findFirstOrThrow
   */
  export type ServiceIconFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceIcon
     */
    select?: ServiceIconSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceIcon
     */
    omit?: ServiceIconOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIconInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceIcon to fetch.
     */
    where?: ServiceIconWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceIcons to fetch.
     */
    orderBy?:
      | ServiceIconOrderByWithRelationInput
      | ServiceIconOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ServiceIcons.
     */
    cursor?: ServiceIconWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceIcons from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceIcons.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ServiceIcons.
     */
    distinct?: ServiceIconScalarFieldEnum | ServiceIconScalarFieldEnum[];
  };

  /**
   * ServiceIcon findMany
   */
  export type ServiceIconFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceIcon
     */
    select?: ServiceIconSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceIcon
     */
    omit?: ServiceIconOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIconInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceIcons to fetch.
     */
    where?: ServiceIconWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceIcons to fetch.
     */
    orderBy?:
      | ServiceIconOrderByWithRelationInput
      | ServiceIconOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ServiceIcons.
     */
    cursor?: ServiceIconWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceIcons from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceIcons.
     */
    skip?: number;
    distinct?: ServiceIconScalarFieldEnum | ServiceIconScalarFieldEnum[];
  };

  /**
   * ServiceIcon create
   */
  export type ServiceIconCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceIcon
     */
    select?: ServiceIconSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceIcon
     */
    omit?: ServiceIconOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIconInclude<ExtArgs> | null;
    /**
     * The data needed to create a ServiceIcon.
     */
    data: XOR<ServiceIconCreateInput, ServiceIconUncheckedCreateInput>;
  };

  /**
   * ServiceIcon createMany
   */
  export type ServiceIconCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ServiceIcons.
     */
    data: ServiceIconCreateManyInput | ServiceIconCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ServiceIcon update
   */
  export type ServiceIconUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceIcon
     */
    select?: ServiceIconSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceIcon
     */
    omit?: ServiceIconOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIconInclude<ExtArgs> | null;
    /**
     * The data needed to update a ServiceIcon.
     */
    data: XOR<ServiceIconUpdateInput, ServiceIconUncheckedUpdateInput>;
    /**
     * Choose, which ServiceIcon to update.
     */
    where: ServiceIconWhereUniqueInput;
  };

  /**
   * ServiceIcon updateMany
   */
  export type ServiceIconUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ServiceIcons.
     */
    data: XOR<
      ServiceIconUpdateManyMutationInput,
      ServiceIconUncheckedUpdateManyInput
    >;
    /**
     * Filter which ServiceIcons to update
     */
    where?: ServiceIconWhereInput;
    /**
     * Limit how many ServiceIcons to update.
     */
    limit?: number;
  };

  /**
   * ServiceIcon upsert
   */
  export type ServiceIconUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceIcon
     */
    select?: ServiceIconSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceIcon
     */
    omit?: ServiceIconOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIconInclude<ExtArgs> | null;
    /**
     * The filter to search for the ServiceIcon to update in case it exists.
     */
    where: ServiceIconWhereUniqueInput;
    /**
     * In case the ServiceIcon found by the `where` argument doesn't exist, create a new ServiceIcon with this data.
     */
    create: XOR<ServiceIconCreateInput, ServiceIconUncheckedCreateInput>;
    /**
     * In case the ServiceIcon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceIconUpdateInput, ServiceIconUncheckedUpdateInput>;
  };

  /**
   * ServiceIcon delete
   */
  export type ServiceIconDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceIcon
     */
    select?: ServiceIconSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceIcon
     */
    omit?: ServiceIconOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIconInclude<ExtArgs> | null;
    /**
     * Filter which ServiceIcon to delete.
     */
    where: ServiceIconWhereUniqueInput;
  };

  /**
   * ServiceIcon deleteMany
   */
  export type ServiceIconDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ServiceIcons to delete
     */
    where?: ServiceIconWhereInput;
    /**
     * Limit how many ServiceIcons to delete.
     */
    limit?: number;
  };

  /**
   * ServiceIcon.services
   */
  export type ServiceIcon$servicesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    where?: ServiceWhereInput;
    orderBy?:
      | ServiceOrderByWithRelationInput
      | ServiceOrderByWithRelationInput[];
    cursor?: ServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * ServiceIcon.rules
   */
  export type ServiceIcon$rulesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRule
     */
    select?: ServiceRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRule
     */
    omit?: ServiceRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRuleInclude<ExtArgs> | null;
    where?: ServiceRuleWhereInput;
    orderBy?:
      | ServiceRuleOrderByWithRelationInput
      | ServiceRuleOrderByWithRelationInput[];
    cursor?: ServiceRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ServiceRuleScalarFieldEnum | ServiceRuleScalarFieldEnum[];
  };

  /**
   * ServiceIcon without action
   */
  export type ServiceIconDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceIcon
     */
    select?: ServiceIconSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceIcon
     */
    omit?: ServiceIconOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIconInclude<ExtArgs> | null;
  };

  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null;
    _avg: ServiceAvgAggregateOutputType | null;
    _sum: ServiceSumAggregateOutputType | null;
    _min: ServiceMinAggregateOutputType | null;
    _max: ServiceMaxAggregateOutputType | null;
  };

  export type ServiceAvgAggregateOutputType = {
    id: number | null;
    iconId: number | null;
  };

  export type ServiceSumAggregateOutputType = {
    id: number | null;
    iconId: number | null;
  };

  export type ServiceMinAggregateOutputType = {
    id: number | null;
    serviceName: string | null;
    iconId: number | null;
  };

  export type ServiceMaxAggregateOutputType = {
    id: number | null;
    serviceName: string | null;
    iconId: number | null;
  };

  export type ServiceCountAggregateOutputType = {
    id: number;
    serviceName: number;
    iconId: number;
    _all: number;
  };

  export type ServiceAvgAggregateInputType = {
    id?: true;
    iconId?: true;
  };

  export type ServiceSumAggregateInputType = {
    id?: true;
    iconId?: true;
  };

  export type ServiceMinAggregateInputType = {
    id?: true;
    serviceName?: true;
    iconId?: true;
  };

  export type ServiceMaxAggregateInputType = {
    id?: true;
    serviceName?: true;
    iconId?: true;
  };

  export type ServiceCountAggregateInputType = {
    id?: true;
    serviceName?: true;
    iconId?: true;
    _all?: true;
  };

  export type ServiceAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Services to fetch.
     */
    orderBy?:
      | ServiceOrderByWithRelationInput
      | ServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Services
     **/
    _count?: true | ServiceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ServiceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ServiceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ServiceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ServiceMaxAggregateInputType;
  };

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
    [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>;
  };

  export type ServiceGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ServiceWhereInput;
    orderBy?:
      | ServiceOrderByWithAggregationInput
      | ServiceOrderByWithAggregationInput[];
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum;
    having?: ServiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServiceCountAggregateInputType | true;
    _avg?: ServiceAvgAggregateInputType;
    _sum?: ServiceSumAggregateInputType;
    _min?: ServiceMinAggregateInputType;
    _max?: ServiceMaxAggregateInputType;
  };

  export type ServiceGroupByOutputType = {
    id: number;
    serviceName: string;
    iconId: number;
    _count: ServiceCountAggregateOutputType | null;
    _avg: ServiceAvgAggregateOutputType | null;
    _sum: ServiceSumAggregateOutputType | null;
    _min: ServiceMinAggregateOutputType | null;
    _max: ServiceMaxAggregateOutputType | null;
  };

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ServiceGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ServiceGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>;
        }
      >
    >;

  export type ServiceSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      serviceName?: boolean;
      iconId?: boolean;
      icon?: boolean | ServiceIconDefaultArgs<ExtArgs>;
      records?: boolean | Service$recordsArgs<ExtArgs>;
      _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['service']
  >;

  export type ServiceSelectScalar = {
    id?: boolean;
    serviceName?: boolean;
    iconId?: boolean;
  };

  export type ServiceOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'serviceName' | 'iconId',
    ExtArgs['result']['service']
  >;
  export type ServiceInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    icon?: boolean | ServiceIconDefaultArgs<ExtArgs>;
    records?: boolean | Service$recordsArgs<ExtArgs>;
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $ServicePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Service';
    objects: {
      icon: Prisma.$ServiceIconPayload<ExtArgs>;
      records: Prisma.$ServiceRecordPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        serviceName: string;
        iconId: number;
      },
      ExtArgs['result']['service']
    >;
    composites: {};
  };

  type ServiceGetPayload<
    S extends boolean | null | undefined | ServiceDefaultArgs,
  > = $Result.GetResult<Prisma.$ServicePayload, S>;

  type ServiceCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ServiceCountAggregateInputType | true;
  };

  export interface ServiceDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Service'];
      meta: { name: 'Service' };
    };
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(
      args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>,
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(
      args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>,
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     *
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ServiceFindManyArgs>(
      args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     *
     */
    create<T extends ServiceCreateArgs>(
      args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>,
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ServiceCreateManyArgs>(
      args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     *
     */
    delete<T extends ServiceDeleteArgs>(
      args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>,
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ServiceUpdateArgs>(
      args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>,
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ServiceDeleteManyArgs>(
      args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ServiceUpdateManyArgs>(
      args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(
      args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>,
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
     **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(
      args: Subset<T, ServiceAggregateArgs>,
    ): Prisma.PrismaPromise<GetServiceAggregateType<T>>;

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetServiceGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Service model
     */
    readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    icon<T extends ServiceIconDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ServiceIconDefaultArgs<ExtArgs>>,
    ): Prisma__ServiceIconClient<
      | $Result.GetResult<
          Prisma.$ServiceIconPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    records<T extends Service$recordsArgs<ExtArgs> = {}>(
      args?: Subset<T, Service$recordsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ServiceRecordPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<'Service', 'Int'>;
    readonly serviceName: FieldRef<'Service', 'String'>;
    readonly iconId: FieldRef<'Service', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput;
  };

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput;
  };

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Services to fetch.
     */
    orderBy?:
      | ServiceOrderByWithRelationInput
      | ServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Services to fetch.
     */
    orderBy?:
      | ServiceOrderByWithRelationInput
      | ServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Services to fetch.
     */
    orderBy?:
      | ServiceOrderByWithRelationInput
      | ServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Services.
     */
    skip?: number;
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * Service create
   */
  export type ServiceCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>;
  };

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Service update
   */
  export type ServiceUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>;
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput;
  };

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>;
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput;
    /**
     * Limit how many Services to update.
     */
    limit?: number;
  };

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput;
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>;
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>;
  };

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput;
  };

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput;
    /**
     * Limit how many Services to delete.
     */
    limit?: number;
  };

  /**
   * Service.records
   */
  export type Service$recordsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRecord
     */
    select?: ServiceRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRecord
     */
    omit?: ServiceRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRecordInclude<ExtArgs> | null;
    where?: ServiceRecordWhereInput;
    orderBy?:
      | ServiceRecordOrderByWithRelationInput
      | ServiceRecordOrderByWithRelationInput[];
    cursor?: ServiceRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ServiceRecordScalarFieldEnum | ServiceRecordScalarFieldEnum[];
  };

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
  };

  /**
   * Model ServiceRule
   */

  export type AggregateServiceRule = {
    _count: ServiceRuleCountAggregateOutputType | null;
    _avg: ServiceRuleAvgAggregateOutputType | null;
    _sum: ServiceRuleSumAggregateOutputType | null;
    _min: ServiceRuleMinAggregateOutputType | null;
    _max: ServiceRuleMaxAggregateOutputType | null;
  };

  export type ServiceRuleAvgAggregateOutputType = {
    id: number | null;
    frequencyKm: number | null;
    iconId: number | null;
  };

  export type ServiceRuleSumAggregateOutputType = {
    id: number | null;
    frequencyKm: number | null;
    iconId: number | null;
  };

  export type ServiceRuleMinAggregateOutputType = {
    id: number | null;
    serviceName: string | null;
    frequencyKm: number | null;
    iconId: number | null;
  };

  export type ServiceRuleMaxAggregateOutputType = {
    id: number | null;
    serviceName: string | null;
    frequencyKm: number | null;
    iconId: number | null;
  };

  export type ServiceRuleCountAggregateOutputType = {
    id: number;
    serviceName: number;
    frequencyKm: number;
    iconId: number;
    _all: number;
  };

  export type ServiceRuleAvgAggregateInputType = {
    id?: true;
    frequencyKm?: true;
    iconId?: true;
  };

  export type ServiceRuleSumAggregateInputType = {
    id?: true;
    frequencyKm?: true;
    iconId?: true;
  };

  export type ServiceRuleMinAggregateInputType = {
    id?: true;
    serviceName?: true;
    frequencyKm?: true;
    iconId?: true;
  };

  export type ServiceRuleMaxAggregateInputType = {
    id?: true;
    serviceName?: true;
    frequencyKm?: true;
    iconId?: true;
  };

  export type ServiceRuleCountAggregateInputType = {
    id?: true;
    serviceName?: true;
    frequencyKm?: true;
    iconId?: true;
    _all?: true;
  };

  export type ServiceRuleAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ServiceRule to aggregate.
     */
    where?: ServiceRuleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceRules to fetch.
     */
    orderBy?:
      | ServiceRuleOrderByWithRelationInput
      | ServiceRuleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ServiceRuleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceRules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceRules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ServiceRules
     **/
    _count?: true | ServiceRuleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ServiceRuleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ServiceRuleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ServiceRuleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ServiceRuleMaxAggregateInputType;
  };

  export type GetServiceRuleAggregateType<T extends ServiceRuleAggregateArgs> =
    {
      [P in keyof T & keyof AggregateServiceRule]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateServiceRule[P]>
        : GetScalarType<T[P], AggregateServiceRule[P]>;
    };

  export type ServiceRuleGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ServiceRuleWhereInput;
    orderBy?:
      | ServiceRuleOrderByWithAggregationInput
      | ServiceRuleOrderByWithAggregationInput[];
    by: ServiceRuleScalarFieldEnum[] | ServiceRuleScalarFieldEnum;
    having?: ServiceRuleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServiceRuleCountAggregateInputType | true;
    _avg?: ServiceRuleAvgAggregateInputType;
    _sum?: ServiceRuleSumAggregateInputType;
    _min?: ServiceRuleMinAggregateInputType;
    _max?: ServiceRuleMaxAggregateInputType;
  };

  export type ServiceRuleGroupByOutputType = {
    id: number;
    serviceName: string;
    frequencyKm: number;
    iconId: number;
    _count: ServiceRuleCountAggregateOutputType | null;
    _avg: ServiceRuleAvgAggregateOutputType | null;
    _sum: ServiceRuleSumAggregateOutputType | null;
    _min: ServiceRuleMinAggregateOutputType | null;
    _max: ServiceRuleMaxAggregateOutputType | null;
  };

  type GetServiceRuleGroupByPayload<T extends ServiceRuleGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ServiceRuleGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof ServiceRuleGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceRuleGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceRuleGroupByOutputType[P]>;
        }
      >
    >;

  export type ServiceRuleSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      serviceName?: boolean;
      frequencyKm?: boolean;
      iconId?: boolean;
      icon?: boolean | ServiceIconDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['serviceRule']
  >;

  export type ServiceRuleSelectScalar = {
    id?: boolean;
    serviceName?: boolean;
    frequencyKm?: boolean;
    iconId?: boolean;
  };

  export type ServiceRuleOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'serviceName' | 'frequencyKm' | 'iconId',
    ExtArgs['result']['serviceRule']
  >;
  export type ServiceRuleInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    icon?: boolean | ServiceIconDefaultArgs<ExtArgs>;
  };

  export type $ServiceRulePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ServiceRule';
    objects: {
      icon: Prisma.$ServiceIconPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        serviceName: string;
        frequencyKm: number;
        iconId: number;
      },
      ExtArgs['result']['serviceRule']
    >;
    composites: {};
  };

  type ServiceRuleGetPayload<
    S extends boolean | null | undefined | ServiceRuleDefaultArgs,
  > = $Result.GetResult<Prisma.$ServiceRulePayload, S>;

  type ServiceRuleCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ServiceRuleFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ServiceRuleCountAggregateInputType | true;
  };

  export interface ServiceRuleDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ServiceRule'];
      meta: { name: 'ServiceRule' };
    };
    /**
     * Find zero or one ServiceRule that matches the filter.
     * @param {ServiceRuleFindUniqueArgs} args - Arguments to find a ServiceRule
     * @example
     * // Get one ServiceRule
     * const serviceRule = await prisma.serviceRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceRuleFindUniqueArgs>(
      args: SelectSubset<T, ServiceRuleFindUniqueArgs<ExtArgs>>,
    ): Prisma__ServiceRuleClient<
      $Result.GetResult<
        Prisma.$ServiceRulePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ServiceRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceRuleFindUniqueOrThrowArgs} args - Arguments to find a ServiceRule
     * @example
     * // Get one ServiceRule
     * const serviceRule = await prisma.serviceRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceRuleFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ServiceRuleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ServiceRuleClient<
      $Result.GetResult<
        Prisma.$ServiceRulePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ServiceRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRuleFindFirstArgs} args - Arguments to find a ServiceRule
     * @example
     * // Get one ServiceRule
     * const serviceRule = await prisma.serviceRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceRuleFindFirstArgs>(
      args?: SelectSubset<T, ServiceRuleFindFirstArgs<ExtArgs>>,
    ): Prisma__ServiceRuleClient<
      $Result.GetResult<
        Prisma.$ServiceRulePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ServiceRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRuleFindFirstOrThrowArgs} args - Arguments to find a ServiceRule
     * @example
     * // Get one ServiceRule
     * const serviceRule = await prisma.serviceRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceRuleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ServiceRuleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ServiceRuleClient<
      $Result.GetResult<
        Prisma.$ServiceRulePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ServiceRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceRules
     * const serviceRules = await prisma.serviceRule.findMany()
     *
     * // Get first 10 ServiceRules
     * const serviceRules = await prisma.serviceRule.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const serviceRuleWithIdOnly = await prisma.serviceRule.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ServiceRuleFindManyArgs>(
      args?: SelectSubset<T, ServiceRuleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ServiceRulePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ServiceRule.
     * @param {ServiceRuleCreateArgs} args - Arguments to create a ServiceRule.
     * @example
     * // Create one ServiceRule
     * const ServiceRule = await prisma.serviceRule.create({
     *   data: {
     *     // ... data to create a ServiceRule
     *   }
     * })
     *
     */
    create<T extends ServiceRuleCreateArgs>(
      args: SelectSubset<T, ServiceRuleCreateArgs<ExtArgs>>,
    ): Prisma__ServiceRuleClient<
      $Result.GetResult<
        Prisma.$ServiceRulePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ServiceRules.
     * @param {ServiceRuleCreateManyArgs} args - Arguments to create many ServiceRules.
     * @example
     * // Create many ServiceRules
     * const serviceRule = await prisma.serviceRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ServiceRuleCreateManyArgs>(
      args?: SelectSubset<T, ServiceRuleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a ServiceRule.
     * @param {ServiceRuleDeleteArgs} args - Arguments to delete one ServiceRule.
     * @example
     * // Delete one ServiceRule
     * const ServiceRule = await prisma.serviceRule.delete({
     *   where: {
     *     // ... filter to delete one ServiceRule
     *   }
     * })
     *
     */
    delete<T extends ServiceRuleDeleteArgs>(
      args: SelectSubset<T, ServiceRuleDeleteArgs<ExtArgs>>,
    ): Prisma__ServiceRuleClient<
      $Result.GetResult<
        Prisma.$ServiceRulePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ServiceRule.
     * @param {ServiceRuleUpdateArgs} args - Arguments to update one ServiceRule.
     * @example
     * // Update one ServiceRule
     * const serviceRule = await prisma.serviceRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ServiceRuleUpdateArgs>(
      args: SelectSubset<T, ServiceRuleUpdateArgs<ExtArgs>>,
    ): Prisma__ServiceRuleClient<
      $Result.GetResult<
        Prisma.$ServiceRulePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ServiceRules.
     * @param {ServiceRuleDeleteManyArgs} args - Arguments to filter ServiceRules to delete.
     * @example
     * // Delete a few ServiceRules
     * const { count } = await prisma.serviceRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ServiceRuleDeleteManyArgs>(
      args?: SelectSubset<T, ServiceRuleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ServiceRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceRules
     * const serviceRule = await prisma.serviceRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ServiceRuleUpdateManyArgs>(
      args: SelectSubset<T, ServiceRuleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one ServiceRule.
     * @param {ServiceRuleUpsertArgs} args - Arguments to update or create a ServiceRule.
     * @example
     * // Update or create a ServiceRule
     * const serviceRule = await prisma.serviceRule.upsert({
     *   create: {
     *     // ... data to create a ServiceRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceRule we want to update
     *   }
     * })
     */
    upsert<T extends ServiceRuleUpsertArgs>(
      args: SelectSubset<T, ServiceRuleUpsertArgs<ExtArgs>>,
    ): Prisma__ServiceRuleClient<
      $Result.GetResult<
        Prisma.$ServiceRulePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ServiceRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRuleCountArgs} args - Arguments to filter ServiceRules to count.
     * @example
     * // Count the number of ServiceRules
     * const count = await prisma.serviceRule.count({
     *   where: {
     *     // ... the filter for the ServiceRules we want to count
     *   }
     * })
     **/
    count<T extends ServiceRuleCountArgs>(
      args?: Subset<T, ServiceRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceRuleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ServiceRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceRuleAggregateArgs>(
      args: Subset<T, ServiceRuleAggregateArgs>,
    ): Prisma.PrismaPromise<GetServiceRuleAggregateType<T>>;

    /**
     * Group by ServiceRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRuleGroupByArgs} args - Group by arguments.
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
      T extends ServiceRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceRuleGroupByArgs['orderBy'] }
        : { orderBy?: ServiceRuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ServiceRuleGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetServiceRuleGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ServiceRule model
     */
    readonly fields: ServiceRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceRuleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    icon<T extends ServiceIconDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ServiceIconDefaultArgs<ExtArgs>>,
    ): Prisma__ServiceIconClient<
      | $Result.GetResult<
          Prisma.$ServiceIconPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ServiceRule model
   */
  interface ServiceRuleFieldRefs {
    readonly id: FieldRef<'ServiceRule', 'Int'>;
    readonly serviceName: FieldRef<'ServiceRule', 'String'>;
    readonly frequencyKm: FieldRef<'ServiceRule', 'Int'>;
    readonly iconId: FieldRef<'ServiceRule', 'Int'>;
  }

  // Custom InputTypes
  /**
   * ServiceRule findUnique
   */
  export type ServiceRuleFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRule
     */
    select?: ServiceRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRule
     */
    omit?: ServiceRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRuleInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceRule to fetch.
     */
    where: ServiceRuleWhereUniqueInput;
  };

  /**
   * ServiceRule findUniqueOrThrow
   */
  export type ServiceRuleFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRule
     */
    select?: ServiceRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRule
     */
    omit?: ServiceRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRuleInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceRule to fetch.
     */
    where: ServiceRuleWhereUniqueInput;
  };

  /**
   * ServiceRule findFirst
   */
  export type ServiceRuleFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRule
     */
    select?: ServiceRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRule
     */
    omit?: ServiceRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRuleInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceRule to fetch.
     */
    where?: ServiceRuleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceRules to fetch.
     */
    orderBy?:
      | ServiceRuleOrderByWithRelationInput
      | ServiceRuleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ServiceRules.
     */
    cursor?: ServiceRuleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceRules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceRules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ServiceRules.
     */
    distinct?: ServiceRuleScalarFieldEnum | ServiceRuleScalarFieldEnum[];
  };

  /**
   * ServiceRule findFirstOrThrow
   */
  export type ServiceRuleFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRule
     */
    select?: ServiceRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRule
     */
    omit?: ServiceRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRuleInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceRule to fetch.
     */
    where?: ServiceRuleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceRules to fetch.
     */
    orderBy?:
      | ServiceRuleOrderByWithRelationInput
      | ServiceRuleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ServiceRules.
     */
    cursor?: ServiceRuleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceRules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceRules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ServiceRules.
     */
    distinct?: ServiceRuleScalarFieldEnum | ServiceRuleScalarFieldEnum[];
  };

  /**
   * ServiceRule findMany
   */
  export type ServiceRuleFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRule
     */
    select?: ServiceRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRule
     */
    omit?: ServiceRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRuleInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceRules to fetch.
     */
    where?: ServiceRuleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceRules to fetch.
     */
    orderBy?:
      | ServiceRuleOrderByWithRelationInput
      | ServiceRuleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ServiceRules.
     */
    cursor?: ServiceRuleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceRules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceRules.
     */
    skip?: number;
    distinct?: ServiceRuleScalarFieldEnum | ServiceRuleScalarFieldEnum[];
  };

  /**
   * ServiceRule create
   */
  export type ServiceRuleCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRule
     */
    select?: ServiceRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRule
     */
    omit?: ServiceRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRuleInclude<ExtArgs> | null;
    /**
     * The data needed to create a ServiceRule.
     */
    data: XOR<ServiceRuleCreateInput, ServiceRuleUncheckedCreateInput>;
  };

  /**
   * ServiceRule createMany
   */
  export type ServiceRuleCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ServiceRules.
     */
    data: ServiceRuleCreateManyInput | ServiceRuleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ServiceRule update
   */
  export type ServiceRuleUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRule
     */
    select?: ServiceRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRule
     */
    omit?: ServiceRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRuleInclude<ExtArgs> | null;
    /**
     * The data needed to update a ServiceRule.
     */
    data: XOR<ServiceRuleUpdateInput, ServiceRuleUncheckedUpdateInput>;
    /**
     * Choose, which ServiceRule to update.
     */
    where: ServiceRuleWhereUniqueInput;
  };

  /**
   * ServiceRule updateMany
   */
  export type ServiceRuleUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ServiceRules.
     */
    data: XOR<
      ServiceRuleUpdateManyMutationInput,
      ServiceRuleUncheckedUpdateManyInput
    >;
    /**
     * Filter which ServiceRules to update
     */
    where?: ServiceRuleWhereInput;
    /**
     * Limit how many ServiceRules to update.
     */
    limit?: number;
  };

  /**
   * ServiceRule upsert
   */
  export type ServiceRuleUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRule
     */
    select?: ServiceRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRule
     */
    omit?: ServiceRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRuleInclude<ExtArgs> | null;
    /**
     * The filter to search for the ServiceRule to update in case it exists.
     */
    where: ServiceRuleWhereUniqueInput;
    /**
     * In case the ServiceRule found by the `where` argument doesn't exist, create a new ServiceRule with this data.
     */
    create: XOR<ServiceRuleCreateInput, ServiceRuleUncheckedCreateInput>;
    /**
     * In case the ServiceRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceRuleUpdateInput, ServiceRuleUncheckedUpdateInput>;
  };

  /**
   * ServiceRule delete
   */
  export type ServiceRuleDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRule
     */
    select?: ServiceRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRule
     */
    omit?: ServiceRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRuleInclude<ExtArgs> | null;
    /**
     * Filter which ServiceRule to delete.
     */
    where: ServiceRuleWhereUniqueInput;
  };

  /**
   * ServiceRule deleteMany
   */
  export type ServiceRuleDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ServiceRules to delete
     */
    where?: ServiceRuleWhereInput;
    /**
     * Limit how many ServiceRules to delete.
     */
    limit?: number;
  };

  /**
   * ServiceRule without action
   */
  export type ServiceRuleDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRule
     */
    select?: ServiceRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRule
     */
    omit?: ServiceRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRuleInclude<ExtArgs> | null;
  };

  /**
   * Model ServiceRecord
   */

  export type AggregateServiceRecord = {
    _count: ServiceRecordCountAggregateOutputType | null;
    _avg: ServiceRecordAvgAggregateOutputType | null;
    _sum: ServiceRecordSumAggregateOutputType | null;
    _min: ServiceRecordMinAggregateOutputType | null;
    _max: ServiceRecordMaxAggregateOutputType | null;
  };

  export type ServiceRecordAvgAggregateOutputType = {
    id: number | null;
    vehicleId: number | null;
    serviceId: number | null;
    mileage: number | null;
  };

  export type ServiceRecordSumAggregateOutputType = {
    id: number | null;
    vehicleId: number | null;
    serviceId: number | null;
    mileage: number | null;
  };

  export type ServiceRecordMinAggregateOutputType = {
    id: number | null;
    vehicleId: number | null;
    serviceId: number | null;
    mileage: number | null;
    date: Date | null;
    notes: string | null;
  };

  export type ServiceRecordMaxAggregateOutputType = {
    id: number | null;
    vehicleId: number | null;
    serviceId: number | null;
    mileage: number | null;
    date: Date | null;
    notes: string | null;
  };

  export type ServiceRecordCountAggregateOutputType = {
    id: number;
    vehicleId: number;
    serviceId: number;
    mileage: number;
    date: number;
    notes: number;
    _all: number;
  };

  export type ServiceRecordAvgAggregateInputType = {
    id?: true;
    vehicleId?: true;
    serviceId?: true;
    mileage?: true;
  };

  export type ServiceRecordSumAggregateInputType = {
    id?: true;
    vehicleId?: true;
    serviceId?: true;
    mileage?: true;
  };

  export type ServiceRecordMinAggregateInputType = {
    id?: true;
    vehicleId?: true;
    serviceId?: true;
    mileage?: true;
    date?: true;
    notes?: true;
  };

  export type ServiceRecordMaxAggregateInputType = {
    id?: true;
    vehicleId?: true;
    serviceId?: true;
    mileage?: true;
    date?: true;
    notes?: true;
  };

  export type ServiceRecordCountAggregateInputType = {
    id?: true;
    vehicleId?: true;
    serviceId?: true;
    mileage?: true;
    date?: true;
    notes?: true;
    _all?: true;
  };

  export type ServiceRecordAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ServiceRecord to aggregate.
     */
    where?: ServiceRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceRecords to fetch.
     */
    orderBy?:
      | ServiceRecordOrderByWithRelationInput
      | ServiceRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ServiceRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ServiceRecords
     **/
    _count?: true | ServiceRecordCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ServiceRecordAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ServiceRecordSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ServiceRecordMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ServiceRecordMaxAggregateInputType;
  };

  export type GetServiceRecordAggregateType<
    T extends ServiceRecordAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateServiceRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceRecord[P]>
      : GetScalarType<T[P], AggregateServiceRecord[P]>;
  };

  export type ServiceRecordGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ServiceRecordWhereInput;
    orderBy?:
      | ServiceRecordOrderByWithAggregationInput
      | ServiceRecordOrderByWithAggregationInput[];
    by: ServiceRecordScalarFieldEnum[] | ServiceRecordScalarFieldEnum;
    having?: ServiceRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServiceRecordCountAggregateInputType | true;
    _avg?: ServiceRecordAvgAggregateInputType;
    _sum?: ServiceRecordSumAggregateInputType;
    _min?: ServiceRecordMinAggregateInputType;
    _max?: ServiceRecordMaxAggregateInputType;
  };

  export type ServiceRecordGroupByOutputType = {
    id: number;
    vehicleId: number;
    serviceId: number;
    mileage: number;
    date: Date;
    notes: string | null;
    _count: ServiceRecordCountAggregateOutputType | null;
    _avg: ServiceRecordAvgAggregateOutputType | null;
    _sum: ServiceRecordSumAggregateOutputType | null;
    _min: ServiceRecordMinAggregateOutputType | null;
    _max: ServiceRecordMaxAggregateOutputType | null;
  };

  type GetServiceRecordGroupByPayload<T extends ServiceRecordGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ServiceRecordGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof ServiceRecordGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceRecordGroupByOutputType[P]>;
        }
      >
    >;

  export type ServiceRecordSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      vehicleId?: boolean;
      serviceId?: boolean;
      mileage?: boolean;
      date?: boolean;
      notes?: boolean;
      vehicle?: boolean | VehicleDefaultArgs<ExtArgs>;
      service?: boolean | ServiceDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['serviceRecord']
  >;

  export type ServiceRecordSelectScalar = {
    id?: boolean;
    vehicleId?: boolean;
    serviceId?: boolean;
    mileage?: boolean;
    date?: boolean;
    notes?: boolean;
  };

  export type ServiceRecordOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'vehicleId' | 'serviceId' | 'mileage' | 'date' | 'notes',
    ExtArgs['result']['serviceRecord']
  >;
  export type ServiceRecordInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>;
    service?: boolean | ServiceDefaultArgs<ExtArgs>;
  };

  export type $ServiceRecordPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ServiceRecord';
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>;
      service: Prisma.$ServicePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        vehicleId: number;
        serviceId: number;
        mileage: number;
        date: Date;
        notes: string | null;
      },
      ExtArgs['result']['serviceRecord']
    >;
    composites: {};
  };

  type ServiceRecordGetPayload<
    S extends boolean | null | undefined | ServiceRecordDefaultArgs,
  > = $Result.GetResult<Prisma.$ServiceRecordPayload, S>;

  type ServiceRecordCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ServiceRecordFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ServiceRecordCountAggregateInputType | true;
  };

  export interface ServiceRecordDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ServiceRecord'];
      meta: { name: 'ServiceRecord' };
    };
    /**
     * Find zero or one ServiceRecord that matches the filter.
     * @param {ServiceRecordFindUniqueArgs} args - Arguments to find a ServiceRecord
     * @example
     * // Get one ServiceRecord
     * const serviceRecord = await prisma.serviceRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceRecordFindUniqueArgs>(
      args: SelectSubset<T, ServiceRecordFindUniqueArgs<ExtArgs>>,
    ): Prisma__ServiceRecordClient<
      $Result.GetResult<
        Prisma.$ServiceRecordPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ServiceRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceRecordFindUniqueOrThrowArgs} args - Arguments to find a ServiceRecord
     * @example
     * // Get one ServiceRecord
     * const serviceRecord = await prisma.serviceRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceRecordFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ServiceRecordFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ServiceRecordClient<
      $Result.GetResult<
        Prisma.$ServiceRecordPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ServiceRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRecordFindFirstArgs} args - Arguments to find a ServiceRecord
     * @example
     * // Get one ServiceRecord
     * const serviceRecord = await prisma.serviceRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceRecordFindFirstArgs>(
      args?: SelectSubset<T, ServiceRecordFindFirstArgs<ExtArgs>>,
    ): Prisma__ServiceRecordClient<
      $Result.GetResult<
        Prisma.$ServiceRecordPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ServiceRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRecordFindFirstOrThrowArgs} args - Arguments to find a ServiceRecord
     * @example
     * // Get one ServiceRecord
     * const serviceRecord = await prisma.serviceRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceRecordFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ServiceRecordFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ServiceRecordClient<
      $Result.GetResult<
        Prisma.$ServiceRecordPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ServiceRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceRecords
     * const serviceRecords = await prisma.serviceRecord.findMany()
     *
     * // Get first 10 ServiceRecords
     * const serviceRecords = await prisma.serviceRecord.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const serviceRecordWithIdOnly = await prisma.serviceRecord.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ServiceRecordFindManyArgs>(
      args?: SelectSubset<T, ServiceRecordFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ServiceRecordPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ServiceRecord.
     * @param {ServiceRecordCreateArgs} args - Arguments to create a ServiceRecord.
     * @example
     * // Create one ServiceRecord
     * const ServiceRecord = await prisma.serviceRecord.create({
     *   data: {
     *     // ... data to create a ServiceRecord
     *   }
     * })
     *
     */
    create<T extends ServiceRecordCreateArgs>(
      args: SelectSubset<T, ServiceRecordCreateArgs<ExtArgs>>,
    ): Prisma__ServiceRecordClient<
      $Result.GetResult<
        Prisma.$ServiceRecordPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ServiceRecords.
     * @param {ServiceRecordCreateManyArgs} args - Arguments to create many ServiceRecords.
     * @example
     * // Create many ServiceRecords
     * const serviceRecord = await prisma.serviceRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ServiceRecordCreateManyArgs>(
      args?: SelectSubset<T, ServiceRecordCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a ServiceRecord.
     * @param {ServiceRecordDeleteArgs} args - Arguments to delete one ServiceRecord.
     * @example
     * // Delete one ServiceRecord
     * const ServiceRecord = await prisma.serviceRecord.delete({
     *   where: {
     *     // ... filter to delete one ServiceRecord
     *   }
     * })
     *
     */
    delete<T extends ServiceRecordDeleteArgs>(
      args: SelectSubset<T, ServiceRecordDeleteArgs<ExtArgs>>,
    ): Prisma__ServiceRecordClient<
      $Result.GetResult<
        Prisma.$ServiceRecordPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ServiceRecord.
     * @param {ServiceRecordUpdateArgs} args - Arguments to update one ServiceRecord.
     * @example
     * // Update one ServiceRecord
     * const serviceRecord = await prisma.serviceRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ServiceRecordUpdateArgs>(
      args: SelectSubset<T, ServiceRecordUpdateArgs<ExtArgs>>,
    ): Prisma__ServiceRecordClient<
      $Result.GetResult<
        Prisma.$ServiceRecordPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ServiceRecords.
     * @param {ServiceRecordDeleteManyArgs} args - Arguments to filter ServiceRecords to delete.
     * @example
     * // Delete a few ServiceRecords
     * const { count } = await prisma.serviceRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ServiceRecordDeleteManyArgs>(
      args?: SelectSubset<T, ServiceRecordDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ServiceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceRecords
     * const serviceRecord = await prisma.serviceRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ServiceRecordUpdateManyArgs>(
      args: SelectSubset<T, ServiceRecordUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one ServiceRecord.
     * @param {ServiceRecordUpsertArgs} args - Arguments to update or create a ServiceRecord.
     * @example
     * // Update or create a ServiceRecord
     * const serviceRecord = await prisma.serviceRecord.upsert({
     *   create: {
     *     // ... data to create a ServiceRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceRecord we want to update
     *   }
     * })
     */
    upsert<T extends ServiceRecordUpsertArgs>(
      args: SelectSubset<T, ServiceRecordUpsertArgs<ExtArgs>>,
    ): Prisma__ServiceRecordClient<
      $Result.GetResult<
        Prisma.$ServiceRecordPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ServiceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRecordCountArgs} args - Arguments to filter ServiceRecords to count.
     * @example
     * // Count the number of ServiceRecords
     * const count = await prisma.serviceRecord.count({
     *   where: {
     *     // ... the filter for the ServiceRecords we want to count
     *   }
     * })
     **/
    count<T extends ServiceRecordCountArgs>(
      args?: Subset<T, ServiceRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceRecordCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ServiceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceRecordAggregateArgs>(
      args: Subset<T, ServiceRecordAggregateArgs>,
    ): Prisma.PrismaPromise<GetServiceRecordAggregateType<T>>;

    /**
     * Group by ServiceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRecordGroupByArgs} args - Group by arguments.
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
      T extends ServiceRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceRecordGroupByArgs['orderBy'] }
        : { orderBy?: ServiceRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ServiceRecordGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetServiceRecordGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ServiceRecord model
     */
    readonly fields: ServiceRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceRecordClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, VehicleDefaultArgs<ExtArgs>>,
    ): Prisma__VehicleClient<
      | $Result.GetResult<
          Prisma.$VehiclePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ServiceDefaultArgs<ExtArgs>>,
    ): Prisma__ServiceClient<
      | $Result.GetResult<
          Prisma.$ServicePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ServiceRecord model
   */
  interface ServiceRecordFieldRefs {
    readonly id: FieldRef<'ServiceRecord', 'Int'>;
    readonly vehicleId: FieldRef<'ServiceRecord', 'Int'>;
    readonly serviceId: FieldRef<'ServiceRecord', 'Int'>;
    readonly mileage: FieldRef<'ServiceRecord', 'Int'>;
    readonly date: FieldRef<'ServiceRecord', 'DateTime'>;
    readonly notes: FieldRef<'ServiceRecord', 'String'>;
  }

  // Custom InputTypes
  /**
   * ServiceRecord findUnique
   */
  export type ServiceRecordFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRecord
     */
    select?: ServiceRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRecord
     */
    omit?: ServiceRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRecordInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceRecord to fetch.
     */
    where: ServiceRecordWhereUniqueInput;
  };

  /**
   * ServiceRecord findUniqueOrThrow
   */
  export type ServiceRecordFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRecord
     */
    select?: ServiceRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRecord
     */
    omit?: ServiceRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRecordInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceRecord to fetch.
     */
    where: ServiceRecordWhereUniqueInput;
  };

  /**
   * ServiceRecord findFirst
   */
  export type ServiceRecordFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRecord
     */
    select?: ServiceRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRecord
     */
    omit?: ServiceRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRecordInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceRecord to fetch.
     */
    where?: ServiceRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceRecords to fetch.
     */
    orderBy?:
      | ServiceRecordOrderByWithRelationInput
      | ServiceRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ServiceRecords.
     */
    cursor?: ServiceRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ServiceRecords.
     */
    distinct?: ServiceRecordScalarFieldEnum | ServiceRecordScalarFieldEnum[];
  };

  /**
   * ServiceRecord findFirstOrThrow
   */
  export type ServiceRecordFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRecord
     */
    select?: ServiceRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRecord
     */
    omit?: ServiceRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRecordInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceRecord to fetch.
     */
    where?: ServiceRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceRecords to fetch.
     */
    orderBy?:
      | ServiceRecordOrderByWithRelationInput
      | ServiceRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ServiceRecords.
     */
    cursor?: ServiceRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ServiceRecords.
     */
    distinct?: ServiceRecordScalarFieldEnum | ServiceRecordScalarFieldEnum[];
  };

  /**
   * ServiceRecord findMany
   */
  export type ServiceRecordFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRecord
     */
    select?: ServiceRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRecord
     */
    omit?: ServiceRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRecordInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceRecords to fetch.
     */
    where?: ServiceRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceRecords to fetch.
     */
    orderBy?:
      | ServiceRecordOrderByWithRelationInput
      | ServiceRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ServiceRecords.
     */
    cursor?: ServiceRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceRecords.
     */
    skip?: number;
    distinct?: ServiceRecordScalarFieldEnum | ServiceRecordScalarFieldEnum[];
  };

  /**
   * ServiceRecord create
   */
  export type ServiceRecordCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRecord
     */
    select?: ServiceRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRecord
     */
    omit?: ServiceRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRecordInclude<ExtArgs> | null;
    /**
     * The data needed to create a ServiceRecord.
     */
    data: XOR<ServiceRecordCreateInput, ServiceRecordUncheckedCreateInput>;
  };

  /**
   * ServiceRecord createMany
   */
  export type ServiceRecordCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ServiceRecords.
     */
    data: ServiceRecordCreateManyInput | ServiceRecordCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ServiceRecord update
   */
  export type ServiceRecordUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRecord
     */
    select?: ServiceRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRecord
     */
    omit?: ServiceRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRecordInclude<ExtArgs> | null;
    /**
     * The data needed to update a ServiceRecord.
     */
    data: XOR<ServiceRecordUpdateInput, ServiceRecordUncheckedUpdateInput>;
    /**
     * Choose, which ServiceRecord to update.
     */
    where: ServiceRecordWhereUniqueInput;
  };

  /**
   * ServiceRecord updateMany
   */
  export type ServiceRecordUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ServiceRecords.
     */
    data: XOR<
      ServiceRecordUpdateManyMutationInput,
      ServiceRecordUncheckedUpdateManyInput
    >;
    /**
     * Filter which ServiceRecords to update
     */
    where?: ServiceRecordWhereInput;
    /**
     * Limit how many ServiceRecords to update.
     */
    limit?: number;
  };

  /**
   * ServiceRecord upsert
   */
  export type ServiceRecordUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRecord
     */
    select?: ServiceRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRecord
     */
    omit?: ServiceRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRecordInclude<ExtArgs> | null;
    /**
     * The filter to search for the ServiceRecord to update in case it exists.
     */
    where: ServiceRecordWhereUniqueInput;
    /**
     * In case the ServiceRecord found by the `where` argument doesn't exist, create a new ServiceRecord with this data.
     */
    create: XOR<ServiceRecordCreateInput, ServiceRecordUncheckedCreateInput>;
    /**
     * In case the ServiceRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceRecordUpdateInput, ServiceRecordUncheckedUpdateInput>;
  };

  /**
   * ServiceRecord delete
   */
  export type ServiceRecordDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRecord
     */
    select?: ServiceRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRecord
     */
    omit?: ServiceRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRecordInclude<ExtArgs> | null;
    /**
     * Filter which ServiceRecord to delete.
     */
    where: ServiceRecordWhereUniqueInput;
  };

  /**
   * ServiceRecord deleteMany
   */
  export type ServiceRecordDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ServiceRecords to delete
     */
    where?: ServiceRecordWhereInput;
    /**
     * Limit how many ServiceRecords to delete.
     */
    limit?: number;
  };

  /**
   * ServiceRecord without action
   */
  export type ServiceRecordDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceRecord
     */
    select?: ServiceRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceRecord
     */
    omit?: ServiceRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRecordInclude<ExtArgs> | null;
  };

  /**
   * Model MileageHistory
   */

  export type AggregateMileageHistory = {
    _count: MileageHistoryCountAggregateOutputType | null;
    _avg: MileageHistoryAvgAggregateOutputType | null;
    _sum: MileageHistorySumAggregateOutputType | null;
    _min: MileageHistoryMinAggregateOutputType | null;
    _max: MileageHistoryMaxAggregateOutputType | null;
  };

  export type MileageHistoryAvgAggregateOutputType = {
    id: number | null;
    vehicleId: number | null;
    mileage: number | null;
  };

  export type MileageHistorySumAggregateOutputType = {
    id: number | null;
    vehicleId: number | null;
    mileage: number | null;
  };

  export type MileageHistoryMinAggregateOutputType = {
    id: number | null;
    vehicleId: number | null;
    mileage: number | null;
    date: Date | null;
  };

  export type MileageHistoryMaxAggregateOutputType = {
    id: number | null;
    vehicleId: number | null;
    mileage: number | null;
    date: Date | null;
  };

  export type MileageHistoryCountAggregateOutputType = {
    id: number;
    vehicleId: number;
    mileage: number;
    date: number;
    _all: number;
  };

  export type MileageHistoryAvgAggregateInputType = {
    id?: true;
    vehicleId?: true;
    mileage?: true;
  };

  export type MileageHistorySumAggregateInputType = {
    id?: true;
    vehicleId?: true;
    mileage?: true;
  };

  export type MileageHistoryMinAggregateInputType = {
    id?: true;
    vehicleId?: true;
    mileage?: true;
    date?: true;
  };

  export type MileageHistoryMaxAggregateInputType = {
    id?: true;
    vehicleId?: true;
    mileage?: true;
    date?: true;
  };

  export type MileageHistoryCountAggregateInputType = {
    id?: true;
    vehicleId?: true;
    mileage?: true;
    date?: true;
    _all?: true;
  };

  export type MileageHistoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MileageHistory to aggregate.
     */
    where?: MileageHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MileageHistories to fetch.
     */
    orderBy?:
      | MileageHistoryOrderByWithRelationInput
      | MileageHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MileageHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MileageHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MileageHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MileageHistories
     **/
    _count?: true | MileageHistoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MileageHistoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MileageHistorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MileageHistoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MileageHistoryMaxAggregateInputType;
  };

  export type GetMileageHistoryAggregateType<
    T extends MileageHistoryAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateMileageHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMileageHistory[P]>
      : GetScalarType<T[P], AggregateMileageHistory[P]>;
  };

  export type MileageHistoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MileageHistoryWhereInput;
    orderBy?:
      | MileageHistoryOrderByWithAggregationInput
      | MileageHistoryOrderByWithAggregationInput[];
    by: MileageHistoryScalarFieldEnum[] | MileageHistoryScalarFieldEnum;
    having?: MileageHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MileageHistoryCountAggregateInputType | true;
    _avg?: MileageHistoryAvgAggregateInputType;
    _sum?: MileageHistorySumAggregateInputType;
    _min?: MileageHistoryMinAggregateInputType;
    _max?: MileageHistoryMaxAggregateInputType;
  };

  export type MileageHistoryGroupByOutputType = {
    id: number;
    vehicleId: number;
    mileage: number;
    date: Date;
    _count: MileageHistoryCountAggregateOutputType | null;
    _avg: MileageHistoryAvgAggregateOutputType | null;
    _sum: MileageHistorySumAggregateOutputType | null;
    _min: MileageHistoryMinAggregateOutputType | null;
    _max: MileageHistoryMaxAggregateOutputType | null;
  };

  type GetMileageHistoryGroupByPayload<T extends MileageHistoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MileageHistoryGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof MileageHistoryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MileageHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], MileageHistoryGroupByOutputType[P]>;
        }
      >
    >;

  export type MileageHistorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      vehicleId?: boolean;
      mileage?: boolean;
      date?: boolean;
      vehicle?: boolean | VehicleDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['mileageHistory']
  >;

  export type MileageHistorySelectScalar = {
    id?: boolean;
    vehicleId?: boolean;
    mileage?: boolean;
    date?: boolean;
  };

  export type MileageHistoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'vehicleId' | 'mileage' | 'date',
    ExtArgs['result']['mileageHistory']
  >;
  export type MileageHistoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>;
  };

  export type $MileageHistoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'MileageHistory';
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        vehicleId: number;
        mileage: number;
        date: Date;
      },
      ExtArgs['result']['mileageHistory']
    >;
    composites: {};
  };

  type MileageHistoryGetPayload<
    S extends boolean | null | undefined | MileageHistoryDefaultArgs,
  > = $Result.GetResult<Prisma.$MileageHistoryPayload, S>;

  type MileageHistoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    MileageHistoryFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: MileageHistoryCountAggregateInputType | true;
  };

  export interface MileageHistoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['MileageHistory'];
      meta: { name: 'MileageHistory' };
    };
    /**
     * Find zero or one MileageHistory that matches the filter.
     * @param {MileageHistoryFindUniqueArgs} args - Arguments to find a MileageHistory
     * @example
     * // Get one MileageHistory
     * const mileageHistory = await prisma.mileageHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MileageHistoryFindUniqueArgs>(
      args: SelectSubset<T, MileageHistoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__MileageHistoryClient<
      $Result.GetResult<
        Prisma.$MileageHistoryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one MileageHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MileageHistoryFindUniqueOrThrowArgs} args - Arguments to find a MileageHistory
     * @example
     * // Get one MileageHistory
     * const mileageHistory = await prisma.mileageHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MileageHistoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MileageHistoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MileageHistoryClient<
      $Result.GetResult<
        Prisma.$MileageHistoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first MileageHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MileageHistoryFindFirstArgs} args - Arguments to find a MileageHistory
     * @example
     * // Get one MileageHistory
     * const mileageHistory = await prisma.mileageHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MileageHistoryFindFirstArgs>(
      args?: SelectSubset<T, MileageHistoryFindFirstArgs<ExtArgs>>,
    ): Prisma__MileageHistoryClient<
      $Result.GetResult<
        Prisma.$MileageHistoryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first MileageHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MileageHistoryFindFirstOrThrowArgs} args - Arguments to find a MileageHistory
     * @example
     * // Get one MileageHistory
     * const mileageHistory = await prisma.mileageHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MileageHistoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MileageHistoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MileageHistoryClient<
      $Result.GetResult<
        Prisma.$MileageHistoryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more MileageHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MileageHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MileageHistories
     * const mileageHistories = await prisma.mileageHistory.findMany()
     *
     * // Get first 10 MileageHistories
     * const mileageHistories = await prisma.mileageHistory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mileageHistoryWithIdOnly = await prisma.mileageHistory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MileageHistoryFindManyArgs>(
      args?: SelectSubset<T, MileageHistoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MileageHistoryPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a MileageHistory.
     * @param {MileageHistoryCreateArgs} args - Arguments to create a MileageHistory.
     * @example
     * // Create one MileageHistory
     * const MileageHistory = await prisma.mileageHistory.create({
     *   data: {
     *     // ... data to create a MileageHistory
     *   }
     * })
     *
     */
    create<T extends MileageHistoryCreateArgs>(
      args: SelectSubset<T, MileageHistoryCreateArgs<ExtArgs>>,
    ): Prisma__MileageHistoryClient<
      $Result.GetResult<
        Prisma.$MileageHistoryPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many MileageHistories.
     * @param {MileageHistoryCreateManyArgs} args - Arguments to create many MileageHistories.
     * @example
     * // Create many MileageHistories
     * const mileageHistory = await prisma.mileageHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MileageHistoryCreateManyArgs>(
      args?: SelectSubset<T, MileageHistoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a MileageHistory.
     * @param {MileageHistoryDeleteArgs} args - Arguments to delete one MileageHistory.
     * @example
     * // Delete one MileageHistory
     * const MileageHistory = await prisma.mileageHistory.delete({
     *   where: {
     *     // ... filter to delete one MileageHistory
     *   }
     * })
     *
     */
    delete<T extends MileageHistoryDeleteArgs>(
      args: SelectSubset<T, MileageHistoryDeleteArgs<ExtArgs>>,
    ): Prisma__MileageHistoryClient<
      $Result.GetResult<
        Prisma.$MileageHistoryPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one MileageHistory.
     * @param {MileageHistoryUpdateArgs} args - Arguments to update one MileageHistory.
     * @example
     * // Update one MileageHistory
     * const mileageHistory = await prisma.mileageHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MileageHistoryUpdateArgs>(
      args: SelectSubset<T, MileageHistoryUpdateArgs<ExtArgs>>,
    ): Prisma__MileageHistoryClient<
      $Result.GetResult<
        Prisma.$MileageHistoryPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more MileageHistories.
     * @param {MileageHistoryDeleteManyArgs} args - Arguments to filter MileageHistories to delete.
     * @example
     * // Delete a few MileageHistories
     * const { count } = await prisma.mileageHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MileageHistoryDeleteManyArgs>(
      args?: SelectSubset<T, MileageHistoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MileageHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MileageHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MileageHistories
     * const mileageHistory = await prisma.mileageHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MileageHistoryUpdateManyArgs>(
      args: SelectSubset<T, MileageHistoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one MileageHistory.
     * @param {MileageHistoryUpsertArgs} args - Arguments to update or create a MileageHistory.
     * @example
     * // Update or create a MileageHistory
     * const mileageHistory = await prisma.mileageHistory.upsert({
     *   create: {
     *     // ... data to create a MileageHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MileageHistory we want to update
     *   }
     * })
     */
    upsert<T extends MileageHistoryUpsertArgs>(
      args: SelectSubset<T, MileageHistoryUpsertArgs<ExtArgs>>,
    ): Prisma__MileageHistoryClient<
      $Result.GetResult<
        Prisma.$MileageHistoryPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of MileageHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MileageHistoryCountArgs} args - Arguments to filter MileageHistories to count.
     * @example
     * // Count the number of MileageHistories
     * const count = await prisma.mileageHistory.count({
     *   where: {
     *     // ... the filter for the MileageHistories we want to count
     *   }
     * })
     **/
    count<T extends MileageHistoryCountArgs>(
      args?: Subset<T, MileageHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MileageHistoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a MileageHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MileageHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MileageHistoryAggregateArgs>(
      args: Subset<T, MileageHistoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetMileageHistoryAggregateType<T>>;

    /**
     * Group by MileageHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MileageHistoryGroupByArgs} args - Group by arguments.
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
      T extends MileageHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MileageHistoryGroupByArgs['orderBy'] }
        : { orderBy?: MileageHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MileageHistoryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetMileageHistoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MileageHistory model
     */
    readonly fields: MileageHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MileageHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MileageHistoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, VehicleDefaultArgs<ExtArgs>>,
    ): Prisma__VehicleClient<
      | $Result.GetResult<
          Prisma.$VehiclePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the MileageHistory model
   */
  interface MileageHistoryFieldRefs {
    readonly id: FieldRef<'MileageHistory', 'Int'>;
    readonly vehicleId: FieldRef<'MileageHistory', 'Int'>;
    readonly mileage: FieldRef<'MileageHistory', 'Int'>;
    readonly date: FieldRef<'MileageHistory', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * MileageHistory findUnique
   */
  export type MileageHistoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MileageHistory
     */
    select?: MileageHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MileageHistory
     */
    omit?: MileageHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MileageHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which MileageHistory to fetch.
     */
    where: MileageHistoryWhereUniqueInput;
  };

  /**
   * MileageHistory findUniqueOrThrow
   */
  export type MileageHistoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MileageHistory
     */
    select?: MileageHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MileageHistory
     */
    omit?: MileageHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MileageHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which MileageHistory to fetch.
     */
    where: MileageHistoryWhereUniqueInput;
  };

  /**
   * MileageHistory findFirst
   */
  export type MileageHistoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MileageHistory
     */
    select?: MileageHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MileageHistory
     */
    omit?: MileageHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MileageHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which MileageHistory to fetch.
     */
    where?: MileageHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MileageHistories to fetch.
     */
    orderBy?:
      | MileageHistoryOrderByWithRelationInput
      | MileageHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MileageHistories.
     */
    cursor?: MileageHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MileageHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MileageHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MileageHistories.
     */
    distinct?: MileageHistoryScalarFieldEnum | MileageHistoryScalarFieldEnum[];
  };

  /**
   * MileageHistory findFirstOrThrow
   */
  export type MileageHistoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MileageHistory
     */
    select?: MileageHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MileageHistory
     */
    omit?: MileageHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MileageHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which MileageHistory to fetch.
     */
    where?: MileageHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MileageHistories to fetch.
     */
    orderBy?:
      | MileageHistoryOrderByWithRelationInput
      | MileageHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MileageHistories.
     */
    cursor?: MileageHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MileageHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MileageHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MileageHistories.
     */
    distinct?: MileageHistoryScalarFieldEnum | MileageHistoryScalarFieldEnum[];
  };

  /**
   * MileageHistory findMany
   */
  export type MileageHistoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MileageHistory
     */
    select?: MileageHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MileageHistory
     */
    omit?: MileageHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MileageHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which MileageHistories to fetch.
     */
    where?: MileageHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MileageHistories to fetch.
     */
    orderBy?:
      | MileageHistoryOrderByWithRelationInput
      | MileageHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MileageHistories.
     */
    cursor?: MileageHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MileageHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MileageHistories.
     */
    skip?: number;
    distinct?: MileageHistoryScalarFieldEnum | MileageHistoryScalarFieldEnum[];
  };

  /**
   * MileageHistory create
   */
  export type MileageHistoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MileageHistory
     */
    select?: MileageHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MileageHistory
     */
    omit?: MileageHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MileageHistoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a MileageHistory.
     */
    data: XOR<MileageHistoryCreateInput, MileageHistoryUncheckedCreateInput>;
  };

  /**
   * MileageHistory createMany
   */
  export type MileageHistoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many MileageHistories.
     */
    data: MileageHistoryCreateManyInput | MileageHistoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * MileageHistory update
   */
  export type MileageHistoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MileageHistory
     */
    select?: MileageHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MileageHistory
     */
    omit?: MileageHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MileageHistoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a MileageHistory.
     */
    data: XOR<MileageHistoryUpdateInput, MileageHistoryUncheckedUpdateInput>;
    /**
     * Choose, which MileageHistory to update.
     */
    where: MileageHistoryWhereUniqueInput;
  };

  /**
   * MileageHistory updateMany
   */
  export type MileageHistoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update MileageHistories.
     */
    data: XOR<
      MileageHistoryUpdateManyMutationInput,
      MileageHistoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which MileageHistories to update
     */
    where?: MileageHistoryWhereInput;
    /**
     * Limit how many MileageHistories to update.
     */
    limit?: number;
  };

  /**
   * MileageHistory upsert
   */
  export type MileageHistoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MileageHistory
     */
    select?: MileageHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MileageHistory
     */
    omit?: MileageHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MileageHistoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the MileageHistory to update in case it exists.
     */
    where: MileageHistoryWhereUniqueInput;
    /**
     * In case the MileageHistory found by the `where` argument doesn't exist, create a new MileageHistory with this data.
     */
    create: XOR<MileageHistoryCreateInput, MileageHistoryUncheckedCreateInput>;
    /**
     * In case the MileageHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MileageHistoryUpdateInput, MileageHistoryUncheckedUpdateInput>;
  };

  /**
   * MileageHistory delete
   */
  export type MileageHistoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MileageHistory
     */
    select?: MileageHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MileageHistory
     */
    omit?: MileageHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MileageHistoryInclude<ExtArgs> | null;
    /**
     * Filter which MileageHistory to delete.
     */
    where: MileageHistoryWhereUniqueInput;
  };

  /**
   * MileageHistory deleteMany
   */
  export type MileageHistoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MileageHistories to delete
     */
    where?: MileageHistoryWhereInput;
    /**
     * Limit how many MileageHistories to delete.
     */
    limit?: number;
  };

  /**
   * MileageHistory without action
   */
  export type MileageHistoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MileageHistory
     */
    select?: MileageHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MileageHistory
     */
    omit?: MileageHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MileageHistoryInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    username: 'username';
    phone: 'phone';
    email: 'email';
    password: 'password';
    otpCode: 'otpCode';
    otpExpires: 'otpExpires';
    isVerified: 'isVerified';
    createdAt: 'createdAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const VehicleScalarFieldEnum: {
    id: 'id';
    make: 'make';
    model: 'model';
    plate: 'plate';
    initialMileage: 'initialMileage';
    currentMileage: 'currentMileage';
    lastServiceDate: 'lastServiceDate';
    lastServiceMileage: 'lastServiceMileage';
    imageUrl: 'imageUrl';
    userId: 'userId';
  };

  export type VehicleScalarFieldEnum =
    (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum];

  export const ServiceIconScalarFieldEnum: {
    id: 'id';
    name: 'name';
    icon: 'icon';
  };

  export type ServiceIconScalarFieldEnum =
    (typeof ServiceIconScalarFieldEnum)[keyof typeof ServiceIconScalarFieldEnum];

  export const ServiceScalarFieldEnum: {
    id: 'id';
    serviceName: 'serviceName';
    iconId: 'iconId';
  };

  export type ServiceScalarFieldEnum =
    (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum];

  export const ServiceRuleScalarFieldEnum: {
    id: 'id';
    serviceName: 'serviceName';
    frequencyKm: 'frequencyKm';
    iconId: 'iconId';
  };

  export type ServiceRuleScalarFieldEnum =
    (typeof ServiceRuleScalarFieldEnum)[keyof typeof ServiceRuleScalarFieldEnum];

  export const ServiceRecordScalarFieldEnum: {
    id: 'id';
    vehicleId: 'vehicleId';
    serviceId: 'serviceId';
    mileage: 'mileage';
    date: 'date';
    notes: 'notes';
  };

  export type ServiceRecordScalarFieldEnum =
    (typeof ServiceRecordScalarFieldEnum)[keyof typeof ServiceRecordScalarFieldEnum];

  export const MileageHistoryScalarFieldEnum: {
    id: 'id';
    vehicleId: 'vehicleId';
    mileage: 'mileage';
    date: 'date';
  };

  export type MileageHistoryScalarFieldEnum =
    (typeof MileageHistoryScalarFieldEnum)[keyof typeof MileageHistoryScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const UserOrderByRelevanceFieldEnum: {
    username: 'username';
    phone: 'phone';
    email: 'email';
    password: 'password';
    otpCode: 'otpCode';
  };

  export type UserOrderByRelevanceFieldEnum =
    (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];

  export const VehicleOrderByRelevanceFieldEnum: {
    make: 'make';
    model: 'model';
    plate: 'plate';
    imageUrl: 'imageUrl';
  };

  export type VehicleOrderByRelevanceFieldEnum =
    (typeof VehicleOrderByRelevanceFieldEnum)[keyof typeof VehicleOrderByRelevanceFieldEnum];

  export const ServiceIconOrderByRelevanceFieldEnum: {
    name: 'name';
    icon: 'icon';
  };

  export type ServiceIconOrderByRelevanceFieldEnum =
    (typeof ServiceIconOrderByRelevanceFieldEnum)[keyof typeof ServiceIconOrderByRelevanceFieldEnum];

  export const ServiceOrderByRelevanceFieldEnum: {
    serviceName: 'serviceName';
  };

  export type ServiceOrderByRelevanceFieldEnum =
    (typeof ServiceOrderByRelevanceFieldEnum)[keyof typeof ServiceOrderByRelevanceFieldEnum];

  export const ServiceRuleOrderByRelevanceFieldEnum: {
    serviceName: 'serviceName';
  };

  export type ServiceRuleOrderByRelevanceFieldEnum =
    (typeof ServiceRuleOrderByRelevanceFieldEnum)[keyof typeof ServiceRuleOrderByRelevanceFieldEnum];

  export const ServiceRecordOrderByRelevanceFieldEnum: {
    notes: 'notes';
  };

  export type ServiceRecordOrderByRelevanceFieldEnum =
    (typeof ServiceRecordOrderByRelevanceFieldEnum)[keyof typeof ServiceRecordOrderByRelevanceFieldEnum];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<'User'> | number;
    username?: StringFilter<'User'> | string;
    phone?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    otpCode?: StringNullableFilter<'User'> | string | null;
    otpExpires?: DateTimeNullableFilter<'User'> | Date | string | null;
    isVerified?: BoolFilter<'User'> | boolean;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    vehicles?: VehicleListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    username?: SortOrder;
    phone?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    otpCode?: SortOrderInput | SortOrder;
    otpExpires?: SortOrderInput | SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
    vehicles?: VehicleOrderByRelationAggregateInput;
    _relevance?: UserOrderByRelevanceInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      username?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      phone?: StringFilter<'User'> | string;
      password?: StringFilter<'User'> | string;
      otpCode?: StringNullableFilter<'User'> | string | null;
      otpExpires?: DateTimeNullableFilter<'User'> | Date | string | null;
      isVerified?: BoolFilter<'User'> | boolean;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      vehicles?: VehicleListRelationFilter;
    },
    'id' | 'username' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    username?: SortOrder;
    phone?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    otpCode?: SortOrderInput | SortOrder;
    otpExpires?: SortOrderInput | SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'User'> | number;
    username?: StringWithAggregatesFilter<'User'> | string;
    phone?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    password?: StringWithAggregatesFilter<'User'> | string;
    otpCode?: StringNullableWithAggregatesFilter<'User'> | string | null;
    otpExpires?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
    isVerified?: BoolWithAggregatesFilter<'User'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[];
    OR?: VehicleWhereInput[];
    NOT?: VehicleWhereInput | VehicleWhereInput[];
    id?: IntFilter<'Vehicle'> | number;
    make?: StringFilter<'Vehicle'> | string;
    model?: StringFilter<'Vehicle'> | string;
    plate?: StringFilter<'Vehicle'> | string;
    initialMileage?: IntFilter<'Vehicle'> | number;
    currentMileage?: IntFilter<'Vehicle'> | number;
    lastServiceDate?: DateTimeFilter<'Vehicle'> | Date | string;
    lastServiceMileage?: IntFilter<'Vehicle'> | number;
    imageUrl?: StringNullableFilter<'Vehicle'> | string | null;
    userId?: IntFilter<'Vehicle'> | number;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    serviceRecords?: ServiceRecordListRelationFilter;
    mileageHistory?: MileageHistoryListRelationFilter;
  };

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    plate?: SortOrder;
    initialMileage?: SortOrder;
    currentMileage?: SortOrder;
    lastServiceDate?: SortOrder;
    lastServiceMileage?: SortOrder;
    imageUrl?: SortOrderInput | SortOrder;
    userId?: SortOrder;
    user?: UserOrderByWithRelationInput;
    serviceRecords?: ServiceRecordOrderByRelationAggregateInput;
    mileageHistory?: MileageHistoryOrderByRelationAggregateInput;
    _relevance?: VehicleOrderByRelevanceInput;
  };

  export type VehicleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      plate?: string;
      AND?: VehicleWhereInput | VehicleWhereInput[];
      OR?: VehicleWhereInput[];
      NOT?: VehicleWhereInput | VehicleWhereInput[];
      make?: StringFilter<'Vehicle'> | string;
      model?: StringFilter<'Vehicle'> | string;
      initialMileage?: IntFilter<'Vehicle'> | number;
      currentMileage?: IntFilter<'Vehicle'> | number;
      lastServiceDate?: DateTimeFilter<'Vehicle'> | Date | string;
      lastServiceMileage?: IntFilter<'Vehicle'> | number;
      imageUrl?: StringNullableFilter<'Vehicle'> | string | null;
      userId?: IntFilter<'Vehicle'> | number;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      serviceRecords?: ServiceRecordListRelationFilter;
      mileageHistory?: MileageHistoryListRelationFilter;
    },
    'id' | 'plate'
  >;

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    plate?: SortOrder;
    initialMileage?: SortOrder;
    currentMileage?: SortOrder;
    lastServiceDate?: SortOrder;
    lastServiceMileage?: SortOrder;
    imageUrl?: SortOrderInput | SortOrder;
    userId?: SortOrder;
    _count?: VehicleCountOrderByAggregateInput;
    _avg?: VehicleAvgOrderByAggregateInput;
    _max?: VehicleMaxOrderByAggregateInput;
    _min?: VehicleMinOrderByAggregateInput;
    _sum?: VehicleSumOrderByAggregateInput;
  };

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?:
      | VehicleScalarWhereWithAggregatesInput
      | VehicleScalarWhereWithAggregatesInput[];
    OR?: VehicleScalarWhereWithAggregatesInput[];
    NOT?:
      | VehicleScalarWhereWithAggregatesInput
      | VehicleScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Vehicle'> | number;
    make?: StringWithAggregatesFilter<'Vehicle'> | string;
    model?: StringWithAggregatesFilter<'Vehicle'> | string;
    plate?: StringWithAggregatesFilter<'Vehicle'> | string;
    initialMileage?: IntWithAggregatesFilter<'Vehicle'> | number;
    currentMileage?: IntWithAggregatesFilter<'Vehicle'> | number;
    lastServiceDate?: DateTimeWithAggregatesFilter<'Vehicle'> | Date | string;
    lastServiceMileage?: IntWithAggregatesFilter<'Vehicle'> | number;
    imageUrl?: StringNullableWithAggregatesFilter<'Vehicle'> | string | null;
    userId?: IntWithAggregatesFilter<'Vehicle'> | number;
  };

  export type ServiceIconWhereInput = {
    AND?: ServiceIconWhereInput | ServiceIconWhereInput[];
    OR?: ServiceIconWhereInput[];
    NOT?: ServiceIconWhereInput | ServiceIconWhereInput[];
    id?: IntFilter<'ServiceIcon'> | number;
    name?: StringFilter<'ServiceIcon'> | string;
    icon?: StringFilter<'ServiceIcon'> | string;
    services?: ServiceListRelationFilter;
    rules?: ServiceRuleListRelationFilter;
  };

  export type ServiceIconOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    icon?: SortOrder;
    services?: ServiceOrderByRelationAggregateInput;
    rules?: ServiceRuleOrderByRelationAggregateInput;
    _relevance?: ServiceIconOrderByRelevanceInput;
  };

  export type ServiceIconWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: ServiceIconWhereInput | ServiceIconWhereInput[];
      OR?: ServiceIconWhereInput[];
      NOT?: ServiceIconWhereInput | ServiceIconWhereInput[];
      name?: StringFilter<'ServiceIcon'> | string;
      icon?: StringFilter<'ServiceIcon'> | string;
      services?: ServiceListRelationFilter;
      rules?: ServiceRuleListRelationFilter;
    },
    'id'
  >;

  export type ServiceIconOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    icon?: SortOrder;
    _count?: ServiceIconCountOrderByAggregateInput;
    _avg?: ServiceIconAvgOrderByAggregateInput;
    _max?: ServiceIconMaxOrderByAggregateInput;
    _min?: ServiceIconMinOrderByAggregateInput;
    _sum?: ServiceIconSumOrderByAggregateInput;
  };

  export type ServiceIconScalarWhereWithAggregatesInput = {
    AND?:
      | ServiceIconScalarWhereWithAggregatesInput
      | ServiceIconScalarWhereWithAggregatesInput[];
    OR?: ServiceIconScalarWhereWithAggregatesInput[];
    NOT?:
      | ServiceIconScalarWhereWithAggregatesInput
      | ServiceIconScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'ServiceIcon'> | number;
    name?: StringWithAggregatesFilter<'ServiceIcon'> | string;
    icon?: StringWithAggregatesFilter<'ServiceIcon'> | string;
  };

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[];
    OR?: ServiceWhereInput[];
    NOT?: ServiceWhereInput | ServiceWhereInput[];
    id?: IntFilter<'Service'> | number;
    serviceName?: StringFilter<'Service'> | string;
    iconId?: IntFilter<'Service'> | number;
    icon?: XOR<ServiceIconScalarRelationFilter, ServiceIconWhereInput>;
    records?: ServiceRecordListRelationFilter;
  };

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder;
    serviceName?: SortOrder;
    iconId?: SortOrder;
    icon?: ServiceIconOrderByWithRelationInput;
    records?: ServiceRecordOrderByRelationAggregateInput;
    _relevance?: ServiceOrderByRelevanceInput;
  };

  export type ServiceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: ServiceWhereInput | ServiceWhereInput[];
      OR?: ServiceWhereInput[];
      NOT?: ServiceWhereInput | ServiceWhereInput[];
      serviceName?: StringFilter<'Service'> | string;
      iconId?: IntFilter<'Service'> | number;
      icon?: XOR<ServiceIconScalarRelationFilter, ServiceIconWhereInput>;
      records?: ServiceRecordListRelationFilter;
    },
    'id'
  >;

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder;
    serviceName?: SortOrder;
    iconId?: SortOrder;
    _count?: ServiceCountOrderByAggregateInput;
    _avg?: ServiceAvgOrderByAggregateInput;
    _max?: ServiceMaxOrderByAggregateInput;
    _min?: ServiceMinOrderByAggregateInput;
    _sum?: ServiceSumOrderByAggregateInput;
  };

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?:
      | ServiceScalarWhereWithAggregatesInput
      | ServiceScalarWhereWithAggregatesInput[];
    OR?: ServiceScalarWhereWithAggregatesInput[];
    NOT?:
      | ServiceScalarWhereWithAggregatesInput
      | ServiceScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Service'> | number;
    serviceName?: StringWithAggregatesFilter<'Service'> | string;
    iconId?: IntWithAggregatesFilter<'Service'> | number;
  };

  export type ServiceRuleWhereInput = {
    AND?: ServiceRuleWhereInput | ServiceRuleWhereInput[];
    OR?: ServiceRuleWhereInput[];
    NOT?: ServiceRuleWhereInput | ServiceRuleWhereInput[];
    id?: IntFilter<'ServiceRule'> | number;
    serviceName?: StringFilter<'ServiceRule'> | string;
    frequencyKm?: IntFilter<'ServiceRule'> | number;
    iconId?: IntFilter<'ServiceRule'> | number;
    icon?: XOR<ServiceIconScalarRelationFilter, ServiceIconWhereInput>;
  };

  export type ServiceRuleOrderByWithRelationInput = {
    id?: SortOrder;
    serviceName?: SortOrder;
    frequencyKm?: SortOrder;
    iconId?: SortOrder;
    icon?: ServiceIconOrderByWithRelationInput;
    _relevance?: ServiceRuleOrderByRelevanceInput;
  };

  export type ServiceRuleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: ServiceRuleWhereInput | ServiceRuleWhereInput[];
      OR?: ServiceRuleWhereInput[];
      NOT?: ServiceRuleWhereInput | ServiceRuleWhereInput[];
      serviceName?: StringFilter<'ServiceRule'> | string;
      frequencyKm?: IntFilter<'ServiceRule'> | number;
      iconId?: IntFilter<'ServiceRule'> | number;
      icon?: XOR<ServiceIconScalarRelationFilter, ServiceIconWhereInput>;
    },
    'id'
  >;

  export type ServiceRuleOrderByWithAggregationInput = {
    id?: SortOrder;
    serviceName?: SortOrder;
    frequencyKm?: SortOrder;
    iconId?: SortOrder;
    _count?: ServiceRuleCountOrderByAggregateInput;
    _avg?: ServiceRuleAvgOrderByAggregateInput;
    _max?: ServiceRuleMaxOrderByAggregateInput;
    _min?: ServiceRuleMinOrderByAggregateInput;
    _sum?: ServiceRuleSumOrderByAggregateInput;
  };

  export type ServiceRuleScalarWhereWithAggregatesInput = {
    AND?:
      | ServiceRuleScalarWhereWithAggregatesInput
      | ServiceRuleScalarWhereWithAggregatesInput[];
    OR?: ServiceRuleScalarWhereWithAggregatesInput[];
    NOT?:
      | ServiceRuleScalarWhereWithAggregatesInput
      | ServiceRuleScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'ServiceRule'> | number;
    serviceName?: StringWithAggregatesFilter<'ServiceRule'> | string;
    frequencyKm?: IntWithAggregatesFilter<'ServiceRule'> | number;
    iconId?: IntWithAggregatesFilter<'ServiceRule'> | number;
  };

  export type ServiceRecordWhereInput = {
    AND?: ServiceRecordWhereInput | ServiceRecordWhereInput[];
    OR?: ServiceRecordWhereInput[];
    NOT?: ServiceRecordWhereInput | ServiceRecordWhereInput[];
    id?: IntFilter<'ServiceRecord'> | number;
    vehicleId?: IntFilter<'ServiceRecord'> | number;
    serviceId?: IntFilter<'ServiceRecord'> | number;
    mileage?: IntFilter<'ServiceRecord'> | number;
    date?: DateTimeFilter<'ServiceRecord'> | Date | string;
    notes?: StringNullableFilter<'ServiceRecord'> | string | null;
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>;
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>;
  };

  export type ServiceRecordOrderByWithRelationInput = {
    id?: SortOrder;
    vehicleId?: SortOrder;
    serviceId?: SortOrder;
    mileage?: SortOrder;
    date?: SortOrder;
    notes?: SortOrderInput | SortOrder;
    vehicle?: VehicleOrderByWithRelationInput;
    service?: ServiceOrderByWithRelationInput;
    _relevance?: ServiceRecordOrderByRelevanceInput;
  };

  export type ServiceRecordWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: ServiceRecordWhereInput | ServiceRecordWhereInput[];
      OR?: ServiceRecordWhereInput[];
      NOT?: ServiceRecordWhereInput | ServiceRecordWhereInput[];
      vehicleId?: IntFilter<'ServiceRecord'> | number;
      serviceId?: IntFilter<'ServiceRecord'> | number;
      mileage?: IntFilter<'ServiceRecord'> | number;
      date?: DateTimeFilter<'ServiceRecord'> | Date | string;
      notes?: StringNullableFilter<'ServiceRecord'> | string | null;
      vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>;
      service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>;
    },
    'id'
  >;

  export type ServiceRecordOrderByWithAggregationInput = {
    id?: SortOrder;
    vehicleId?: SortOrder;
    serviceId?: SortOrder;
    mileage?: SortOrder;
    date?: SortOrder;
    notes?: SortOrderInput | SortOrder;
    _count?: ServiceRecordCountOrderByAggregateInput;
    _avg?: ServiceRecordAvgOrderByAggregateInput;
    _max?: ServiceRecordMaxOrderByAggregateInput;
    _min?: ServiceRecordMinOrderByAggregateInput;
    _sum?: ServiceRecordSumOrderByAggregateInput;
  };

  export type ServiceRecordScalarWhereWithAggregatesInput = {
    AND?:
      | ServiceRecordScalarWhereWithAggregatesInput
      | ServiceRecordScalarWhereWithAggregatesInput[];
    OR?: ServiceRecordScalarWhereWithAggregatesInput[];
    NOT?:
      | ServiceRecordScalarWhereWithAggregatesInput
      | ServiceRecordScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'ServiceRecord'> | number;
    vehicleId?: IntWithAggregatesFilter<'ServiceRecord'> | number;
    serviceId?: IntWithAggregatesFilter<'ServiceRecord'> | number;
    mileage?: IntWithAggregatesFilter<'ServiceRecord'> | number;
    date?: DateTimeWithAggregatesFilter<'ServiceRecord'> | Date | string;
    notes?: StringNullableWithAggregatesFilter<'ServiceRecord'> | string | null;
  };

  export type MileageHistoryWhereInput = {
    AND?: MileageHistoryWhereInput | MileageHistoryWhereInput[];
    OR?: MileageHistoryWhereInput[];
    NOT?: MileageHistoryWhereInput | MileageHistoryWhereInput[];
    id?: IntFilter<'MileageHistory'> | number;
    vehicleId?: IntFilter<'MileageHistory'> | number;
    mileage?: IntFilter<'MileageHistory'> | number;
    date?: DateTimeFilter<'MileageHistory'> | Date | string;
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>;
  };

  export type MileageHistoryOrderByWithRelationInput = {
    id?: SortOrder;
    vehicleId?: SortOrder;
    mileage?: SortOrder;
    date?: SortOrder;
    vehicle?: VehicleOrderByWithRelationInput;
  };

  export type MileageHistoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: MileageHistoryWhereInput | MileageHistoryWhereInput[];
      OR?: MileageHistoryWhereInput[];
      NOT?: MileageHistoryWhereInput | MileageHistoryWhereInput[];
      vehicleId?: IntFilter<'MileageHistory'> | number;
      mileage?: IntFilter<'MileageHistory'> | number;
      date?: DateTimeFilter<'MileageHistory'> | Date | string;
      vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>;
    },
    'id'
  >;

  export type MileageHistoryOrderByWithAggregationInput = {
    id?: SortOrder;
    vehicleId?: SortOrder;
    mileage?: SortOrder;
    date?: SortOrder;
    _count?: MileageHistoryCountOrderByAggregateInput;
    _avg?: MileageHistoryAvgOrderByAggregateInput;
    _max?: MileageHistoryMaxOrderByAggregateInput;
    _min?: MileageHistoryMinOrderByAggregateInput;
    _sum?: MileageHistorySumOrderByAggregateInput;
  };

  export type MileageHistoryScalarWhereWithAggregatesInput = {
    AND?:
      | MileageHistoryScalarWhereWithAggregatesInput
      | MileageHistoryScalarWhereWithAggregatesInput[];
    OR?: MileageHistoryScalarWhereWithAggregatesInput[];
    NOT?:
      | MileageHistoryScalarWhereWithAggregatesInput
      | MileageHistoryScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'MileageHistory'> | number;
    vehicleId?: IntWithAggregatesFilter<'MileageHistory'> | number;
    mileage?: IntWithAggregatesFilter<'MileageHistory'> | number;
    date?: DateTimeWithAggregatesFilter<'MileageHistory'> | Date | string;
  };

  export type UserCreateInput = {
    username: string;
    phone: string;
    email: string;
    password: string;
    otpCode?: string | null;
    otpExpires?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    vehicles?: VehicleCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    username: string;
    phone: string;
    email: string;
    password: string;
    otpCode?: string | null;
    otpExpires?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    vehicles?: VehicleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null;
    otpExpires?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    vehicles?: VehicleUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null;
    otpExpires?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    vehicles?: VehicleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: number;
    username: string;
    phone: string;
    email: string;
    password: string;
    otpCode?: string | null;
    otpExpires?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null;
    otpExpires?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null;
    otpExpires?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VehicleCreateInput = {
    make: string;
    model: string;
    plate: string;
    initialMileage?: number;
    currentMileage: number;
    lastServiceDate: Date | string;
    lastServiceMileage: number;
    imageUrl?: string | null;
    user: UserCreateNestedOneWithoutVehiclesInput;
    serviceRecords?: ServiceRecordCreateNestedManyWithoutVehicleInput;
    mileageHistory?: MileageHistoryCreateNestedManyWithoutVehicleInput;
  };

  export type VehicleUncheckedCreateInput = {
    id?: number;
    make: string;
    model: string;
    plate: string;
    initialMileage?: number;
    currentMileage: number;
    lastServiceDate: Date | string;
    lastServiceMileage: number;
    imageUrl?: string | null;
    userId: number;
    serviceRecords?: ServiceRecordUncheckedCreateNestedManyWithoutVehicleInput;
    mileageHistory?: MileageHistoryUncheckedCreateNestedManyWithoutVehicleInput;
  };

  export type VehicleUpdateInput = {
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    plate?: StringFieldUpdateOperationsInput | string;
    initialMileage?: IntFieldUpdateOperationsInput | number;
    currentMileage?: IntFieldUpdateOperationsInput | number;
    lastServiceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastServiceMileage?: IntFieldUpdateOperationsInput | number;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput;
    serviceRecords?: ServiceRecordUpdateManyWithoutVehicleNestedInput;
    mileageHistory?: MileageHistoryUpdateManyWithoutVehicleNestedInput;
  };

  export type VehicleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    plate?: StringFieldUpdateOperationsInput | string;
    initialMileage?: IntFieldUpdateOperationsInput | number;
    currentMileage?: IntFieldUpdateOperationsInput | number;
    lastServiceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastServiceMileage?: IntFieldUpdateOperationsInput | number;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: IntFieldUpdateOperationsInput | number;
    serviceRecords?: ServiceRecordUncheckedUpdateManyWithoutVehicleNestedInput;
    mileageHistory?: MileageHistoryUncheckedUpdateManyWithoutVehicleNestedInput;
  };

  export type VehicleCreateManyInput = {
    id?: number;
    make: string;
    model: string;
    plate: string;
    initialMileage?: number;
    currentMileage: number;
    lastServiceDate: Date | string;
    lastServiceMileage: number;
    imageUrl?: string | null;
    userId: number;
  };

  export type VehicleUpdateManyMutationInput = {
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    plate?: StringFieldUpdateOperationsInput | string;
    initialMileage?: IntFieldUpdateOperationsInput | number;
    currentMileage?: IntFieldUpdateOperationsInput | number;
    lastServiceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastServiceMileage?: IntFieldUpdateOperationsInput | number;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type VehicleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    plate?: StringFieldUpdateOperationsInput | string;
    initialMileage?: IntFieldUpdateOperationsInput | number;
    currentMileage?: IntFieldUpdateOperationsInput | number;
    lastServiceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastServiceMileage?: IntFieldUpdateOperationsInput | number;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: IntFieldUpdateOperationsInput | number;
  };

  export type ServiceIconCreateInput = {
    name: string;
    icon: string;
    services?: ServiceCreateNestedManyWithoutIconInput;
    rules?: ServiceRuleCreateNestedManyWithoutIconInput;
  };

  export type ServiceIconUncheckedCreateInput = {
    id?: number;
    name: string;
    icon: string;
    services?: ServiceUncheckedCreateNestedManyWithoutIconInput;
    rules?: ServiceRuleUncheckedCreateNestedManyWithoutIconInput;
  };

  export type ServiceIconUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    services?: ServiceUpdateManyWithoutIconNestedInput;
    rules?: ServiceRuleUpdateManyWithoutIconNestedInput;
  };

  export type ServiceIconUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    services?: ServiceUncheckedUpdateManyWithoutIconNestedInput;
    rules?: ServiceRuleUncheckedUpdateManyWithoutIconNestedInput;
  };

  export type ServiceIconCreateManyInput = {
    id?: number;
    name: string;
    icon: string;
  };

  export type ServiceIconUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
  };

  export type ServiceIconUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
  };

  export type ServiceCreateInput = {
    serviceName: string;
    icon: ServiceIconCreateNestedOneWithoutServicesInput;
    records?: ServiceRecordCreateNestedManyWithoutServiceInput;
  };

  export type ServiceUncheckedCreateInput = {
    id?: number;
    serviceName: string;
    iconId: number;
    records?: ServiceRecordUncheckedCreateNestedManyWithoutServiceInput;
  };

  export type ServiceUpdateInput = {
    serviceName?: StringFieldUpdateOperationsInput | string;
    icon?: ServiceIconUpdateOneRequiredWithoutServicesNestedInput;
    records?: ServiceRecordUpdateManyWithoutServiceNestedInput;
  };

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    serviceName?: StringFieldUpdateOperationsInput | string;
    iconId?: IntFieldUpdateOperationsInput | number;
    records?: ServiceRecordUncheckedUpdateManyWithoutServiceNestedInput;
  };

  export type ServiceCreateManyInput = {
    id?: number;
    serviceName: string;
    iconId: number;
  };

  export type ServiceUpdateManyMutationInput = {
    serviceName?: StringFieldUpdateOperationsInput | string;
  };

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    serviceName?: StringFieldUpdateOperationsInput | string;
    iconId?: IntFieldUpdateOperationsInput | number;
  };

  export type ServiceRuleCreateInput = {
    serviceName: string;
    frequencyKm: number;
    icon: ServiceIconCreateNestedOneWithoutRulesInput;
  };

  export type ServiceRuleUncheckedCreateInput = {
    id?: number;
    serviceName: string;
    frequencyKm: number;
    iconId: number;
  };

  export type ServiceRuleUpdateInput = {
    serviceName?: StringFieldUpdateOperationsInput | string;
    frequencyKm?: IntFieldUpdateOperationsInput | number;
    icon?: ServiceIconUpdateOneRequiredWithoutRulesNestedInput;
  };

  export type ServiceRuleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    serviceName?: StringFieldUpdateOperationsInput | string;
    frequencyKm?: IntFieldUpdateOperationsInput | number;
    iconId?: IntFieldUpdateOperationsInput | number;
  };

  export type ServiceRuleCreateManyInput = {
    id?: number;
    serviceName: string;
    frequencyKm: number;
    iconId: number;
  };

  export type ServiceRuleUpdateManyMutationInput = {
    serviceName?: StringFieldUpdateOperationsInput | string;
    frequencyKm?: IntFieldUpdateOperationsInput | number;
  };

  export type ServiceRuleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    serviceName?: StringFieldUpdateOperationsInput | string;
    frequencyKm?: IntFieldUpdateOperationsInput | number;
    iconId?: IntFieldUpdateOperationsInput | number;
  };

  export type ServiceRecordCreateInput = {
    mileage: number;
    date?: Date | string;
    notes?: string | null;
    vehicle: VehicleCreateNestedOneWithoutServiceRecordsInput;
    service: ServiceCreateNestedOneWithoutRecordsInput;
  };

  export type ServiceRecordUncheckedCreateInput = {
    id?: number;
    vehicleId: number;
    serviceId: number;
    mileage: number;
    date?: Date | string;
    notes?: string | null;
  };

  export type ServiceRecordUpdateInput = {
    mileage?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    vehicle?: VehicleUpdateOneRequiredWithoutServiceRecordsNestedInput;
    service?: ServiceUpdateOneRequiredWithoutRecordsNestedInput;
  };

  export type ServiceRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    vehicleId?: IntFieldUpdateOperationsInput | number;
    serviceId?: IntFieldUpdateOperationsInput | number;
    mileage?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ServiceRecordCreateManyInput = {
    id?: number;
    vehicleId: number;
    serviceId: number;
    mileage: number;
    date?: Date | string;
    notes?: string | null;
  };

  export type ServiceRecordUpdateManyMutationInput = {
    mileage?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ServiceRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    vehicleId?: IntFieldUpdateOperationsInput | number;
    serviceId?: IntFieldUpdateOperationsInput | number;
    mileage?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type MileageHistoryCreateInput = {
    mileage: number;
    date?: Date | string;
    vehicle: VehicleCreateNestedOneWithoutMileageHistoryInput;
  };

  export type MileageHistoryUncheckedCreateInput = {
    id?: number;
    vehicleId: number;
    mileage: number;
    date?: Date | string;
  };

  export type MileageHistoryUpdateInput = {
    mileage?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    vehicle?: VehicleUpdateOneRequiredWithoutMileageHistoryNestedInput;
  };

  export type MileageHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    vehicleId?: IntFieldUpdateOperationsInput | number;
    mileage?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MileageHistoryCreateManyInput = {
    id?: number;
    vehicleId: number;
    mileage: number;
    date?: Date | string;
  };

  export type MileageHistoryUpdateManyMutationInput = {
    mileage?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MileageHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    vehicleId?: IntFieldUpdateOperationsInput | number;
    mileage?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput;
    some?: VehicleWhereInput;
    none?: VehicleWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    phone?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    otpCode?: SortOrder;
    otpExpires?: SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    phone?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    otpCode?: SortOrder;
    otpExpires?: SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    phone?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    otpCode?: SortOrder;
    otpExpires?: SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type ServiceRecordListRelationFilter = {
    every?: ServiceRecordWhereInput;
    some?: ServiceRecordWhereInput;
    none?: ServiceRecordWhereInput;
  };

  export type MileageHistoryListRelationFilter = {
    every?: MileageHistoryWhereInput;
    some?: MileageHistoryWhereInput;
    none?: MileageHistoryWhereInput;
  };

  export type ServiceRecordOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type MileageHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type VehicleOrderByRelevanceInput = {
    fields:
      | VehicleOrderByRelevanceFieldEnum
      | VehicleOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    plate?: SortOrder;
    initialMileage?: SortOrder;
    currentMileage?: SortOrder;
    lastServiceDate?: SortOrder;
    lastServiceMileage?: SortOrder;
    imageUrl?: SortOrder;
    userId?: SortOrder;
  };

  export type VehicleAvgOrderByAggregateInput = {
    id?: SortOrder;
    initialMileage?: SortOrder;
    currentMileage?: SortOrder;
    lastServiceMileage?: SortOrder;
    userId?: SortOrder;
  };

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    plate?: SortOrder;
    initialMileage?: SortOrder;
    currentMileage?: SortOrder;
    lastServiceDate?: SortOrder;
    lastServiceMileage?: SortOrder;
    imageUrl?: SortOrder;
    userId?: SortOrder;
  };

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    plate?: SortOrder;
    initialMileage?: SortOrder;
    currentMileage?: SortOrder;
    lastServiceDate?: SortOrder;
    lastServiceMileage?: SortOrder;
    imageUrl?: SortOrder;
    userId?: SortOrder;
  };

  export type VehicleSumOrderByAggregateInput = {
    id?: SortOrder;
    initialMileage?: SortOrder;
    currentMileage?: SortOrder;
    lastServiceMileage?: SortOrder;
    userId?: SortOrder;
  };

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput;
    some?: ServiceWhereInput;
    none?: ServiceWhereInput;
  };

  export type ServiceRuleListRelationFilter = {
    every?: ServiceRuleWhereInput;
    some?: ServiceRuleWhereInput;
    none?: ServiceRuleWhereInput;
  };

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ServiceRuleOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ServiceIconOrderByRelevanceInput = {
    fields:
      | ServiceIconOrderByRelevanceFieldEnum
      | ServiceIconOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type ServiceIconCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    icon?: SortOrder;
  };

  export type ServiceIconAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type ServiceIconMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    icon?: SortOrder;
  };

  export type ServiceIconMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    icon?: SortOrder;
  };

  export type ServiceIconSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type ServiceIconScalarRelationFilter = {
    is?: ServiceIconWhereInput;
    isNot?: ServiceIconWhereInput;
  };

  export type ServiceOrderByRelevanceInput = {
    fields:
      | ServiceOrderByRelevanceFieldEnum
      | ServiceOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder;
    serviceName?: SortOrder;
    iconId?: SortOrder;
  };

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder;
    iconId?: SortOrder;
  };

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder;
    serviceName?: SortOrder;
    iconId?: SortOrder;
  };

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder;
    serviceName?: SortOrder;
    iconId?: SortOrder;
  };

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder;
    iconId?: SortOrder;
  };

  export type ServiceRuleOrderByRelevanceInput = {
    fields:
      | ServiceRuleOrderByRelevanceFieldEnum
      | ServiceRuleOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type ServiceRuleCountOrderByAggregateInput = {
    id?: SortOrder;
    serviceName?: SortOrder;
    frequencyKm?: SortOrder;
    iconId?: SortOrder;
  };

  export type ServiceRuleAvgOrderByAggregateInput = {
    id?: SortOrder;
    frequencyKm?: SortOrder;
    iconId?: SortOrder;
  };

  export type ServiceRuleMaxOrderByAggregateInput = {
    id?: SortOrder;
    serviceName?: SortOrder;
    frequencyKm?: SortOrder;
    iconId?: SortOrder;
  };

  export type ServiceRuleMinOrderByAggregateInput = {
    id?: SortOrder;
    serviceName?: SortOrder;
    frequencyKm?: SortOrder;
    iconId?: SortOrder;
  };

  export type ServiceRuleSumOrderByAggregateInput = {
    id?: SortOrder;
    frequencyKm?: SortOrder;
    iconId?: SortOrder;
  };

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput;
    isNot?: VehicleWhereInput;
  };

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput;
    isNot?: ServiceWhereInput;
  };

  export type ServiceRecordOrderByRelevanceInput = {
    fields:
      | ServiceRecordOrderByRelevanceFieldEnum
      | ServiceRecordOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type ServiceRecordCountOrderByAggregateInput = {
    id?: SortOrder;
    vehicleId?: SortOrder;
    serviceId?: SortOrder;
    mileage?: SortOrder;
    date?: SortOrder;
    notes?: SortOrder;
  };

  export type ServiceRecordAvgOrderByAggregateInput = {
    id?: SortOrder;
    vehicleId?: SortOrder;
    serviceId?: SortOrder;
    mileage?: SortOrder;
  };

  export type ServiceRecordMaxOrderByAggregateInput = {
    id?: SortOrder;
    vehicleId?: SortOrder;
    serviceId?: SortOrder;
    mileage?: SortOrder;
    date?: SortOrder;
    notes?: SortOrder;
  };

  export type ServiceRecordMinOrderByAggregateInput = {
    id?: SortOrder;
    vehicleId?: SortOrder;
    serviceId?: SortOrder;
    mileage?: SortOrder;
    date?: SortOrder;
    notes?: SortOrder;
  };

  export type ServiceRecordSumOrderByAggregateInput = {
    id?: SortOrder;
    vehicleId?: SortOrder;
    serviceId?: SortOrder;
    mileage?: SortOrder;
  };

  export type MileageHistoryCountOrderByAggregateInput = {
    id?: SortOrder;
    vehicleId?: SortOrder;
    mileage?: SortOrder;
    date?: SortOrder;
  };

  export type MileageHistoryAvgOrderByAggregateInput = {
    id?: SortOrder;
    vehicleId?: SortOrder;
    mileage?: SortOrder;
  };

  export type MileageHistoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    vehicleId?: SortOrder;
    mileage?: SortOrder;
    date?: SortOrder;
  };

  export type MileageHistoryMinOrderByAggregateInput = {
    id?: SortOrder;
    vehicleId?: SortOrder;
    mileage?: SortOrder;
    date?: SortOrder;
  };

  export type MileageHistorySumOrderByAggregateInput = {
    id?: SortOrder;
    vehicleId?: SortOrder;
    mileage?: SortOrder;
  };

  export type VehicleCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          VehicleCreateWithoutUserInput,
          VehicleUncheckedCreateWithoutUserInput
        >
      | VehicleCreateWithoutUserInput[]
      | VehicleUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | VehicleCreateOrConnectWithoutUserInput
      | VehicleCreateOrConnectWithoutUserInput[];
    createMany?: VehicleCreateManyUserInputEnvelope;
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[];
  };

  export type VehicleUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          VehicleCreateWithoutUserInput,
          VehicleUncheckedCreateWithoutUserInput
        >
      | VehicleCreateWithoutUserInput[]
      | VehicleUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | VehicleCreateOrConnectWithoutUserInput
      | VehicleCreateOrConnectWithoutUserInput[];
    createMany?: VehicleCreateManyUserInputEnvelope;
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type VehicleUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          VehicleCreateWithoutUserInput,
          VehicleUncheckedCreateWithoutUserInput
        >
      | VehicleCreateWithoutUserInput[]
      | VehicleUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | VehicleCreateOrConnectWithoutUserInput
      | VehicleCreateOrConnectWithoutUserInput[];
    upsert?:
      | VehicleUpsertWithWhereUniqueWithoutUserInput
      | VehicleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: VehicleCreateManyUserInputEnvelope;
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[];
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[];
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[];
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[];
    update?:
      | VehicleUpdateWithWhereUniqueWithoutUserInput
      | VehicleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | VehicleUpdateManyWithWhereWithoutUserInput
      | VehicleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type VehicleUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          VehicleCreateWithoutUserInput,
          VehicleUncheckedCreateWithoutUserInput
        >
      | VehicleCreateWithoutUserInput[]
      | VehicleUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | VehicleCreateOrConnectWithoutUserInput
      | VehicleCreateOrConnectWithoutUserInput[];
    upsert?:
      | VehicleUpsertWithWhereUniqueWithoutUserInput
      | VehicleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: VehicleCreateManyUserInputEnvelope;
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[];
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[];
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[];
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[];
    update?:
      | VehicleUpdateWithWhereUniqueWithoutUserInput
      | VehicleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | VehicleUpdateManyWithWhereWithoutUserInput
      | VehicleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<
      UserCreateWithoutVehiclesInput,
      UserUncheckedCreateWithoutVehiclesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput;
    connect?: UserWhereUniqueInput;
  };

  export type ServiceRecordCreateNestedManyWithoutVehicleInput = {
    create?:
      | XOR<
          ServiceRecordCreateWithoutVehicleInput,
          ServiceRecordUncheckedCreateWithoutVehicleInput
        >
      | ServiceRecordCreateWithoutVehicleInput[]
      | ServiceRecordUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?:
      | ServiceRecordCreateOrConnectWithoutVehicleInput
      | ServiceRecordCreateOrConnectWithoutVehicleInput[];
    createMany?: ServiceRecordCreateManyVehicleInputEnvelope;
    connect?: ServiceRecordWhereUniqueInput | ServiceRecordWhereUniqueInput[];
  };

  export type MileageHistoryCreateNestedManyWithoutVehicleInput = {
    create?:
      | XOR<
          MileageHistoryCreateWithoutVehicleInput,
          MileageHistoryUncheckedCreateWithoutVehicleInput
        >
      | MileageHistoryCreateWithoutVehicleInput[]
      | MileageHistoryUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?:
      | MileageHistoryCreateOrConnectWithoutVehicleInput
      | MileageHistoryCreateOrConnectWithoutVehicleInput[];
    createMany?: MileageHistoryCreateManyVehicleInputEnvelope;
    connect?: MileageHistoryWhereUniqueInput | MileageHistoryWhereUniqueInput[];
  };

  export type ServiceRecordUncheckedCreateNestedManyWithoutVehicleInput = {
    create?:
      | XOR<
          ServiceRecordCreateWithoutVehicleInput,
          ServiceRecordUncheckedCreateWithoutVehicleInput
        >
      | ServiceRecordCreateWithoutVehicleInput[]
      | ServiceRecordUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?:
      | ServiceRecordCreateOrConnectWithoutVehicleInput
      | ServiceRecordCreateOrConnectWithoutVehicleInput[];
    createMany?: ServiceRecordCreateManyVehicleInputEnvelope;
    connect?: ServiceRecordWhereUniqueInput | ServiceRecordWhereUniqueInput[];
  };

  export type MileageHistoryUncheckedCreateNestedManyWithoutVehicleInput = {
    create?:
      | XOR<
          MileageHistoryCreateWithoutVehicleInput,
          MileageHistoryUncheckedCreateWithoutVehicleInput
        >
      | MileageHistoryCreateWithoutVehicleInput[]
      | MileageHistoryUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?:
      | MileageHistoryCreateOrConnectWithoutVehicleInput
      | MileageHistoryCreateOrConnectWithoutVehicleInput[];
    createMany?: MileageHistoryCreateManyVehicleInputEnvelope;
    connect?: MileageHistoryWhereUniqueInput | MileageHistoryWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<
      UserCreateWithoutVehiclesInput,
      UserUncheckedCreateWithoutVehiclesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput;
    upsert?: UserUpsertWithoutVehiclesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutVehiclesInput,
        UserUpdateWithoutVehiclesInput
      >,
      UserUncheckedUpdateWithoutVehiclesInput
    >;
  };

  export type ServiceRecordUpdateManyWithoutVehicleNestedInput = {
    create?:
      | XOR<
          ServiceRecordCreateWithoutVehicleInput,
          ServiceRecordUncheckedCreateWithoutVehicleInput
        >
      | ServiceRecordCreateWithoutVehicleInput[]
      | ServiceRecordUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?:
      | ServiceRecordCreateOrConnectWithoutVehicleInput
      | ServiceRecordCreateOrConnectWithoutVehicleInput[];
    upsert?:
      | ServiceRecordUpsertWithWhereUniqueWithoutVehicleInput
      | ServiceRecordUpsertWithWhereUniqueWithoutVehicleInput[];
    createMany?: ServiceRecordCreateManyVehicleInputEnvelope;
    set?: ServiceRecordWhereUniqueInput | ServiceRecordWhereUniqueInput[];
    disconnect?:
      | ServiceRecordWhereUniqueInput
      | ServiceRecordWhereUniqueInput[];
    delete?: ServiceRecordWhereUniqueInput | ServiceRecordWhereUniqueInput[];
    connect?: ServiceRecordWhereUniqueInput | ServiceRecordWhereUniqueInput[];
    update?:
      | ServiceRecordUpdateWithWhereUniqueWithoutVehicleInput
      | ServiceRecordUpdateWithWhereUniqueWithoutVehicleInput[];
    updateMany?:
      | ServiceRecordUpdateManyWithWhereWithoutVehicleInput
      | ServiceRecordUpdateManyWithWhereWithoutVehicleInput[];
    deleteMany?:
      | ServiceRecordScalarWhereInput
      | ServiceRecordScalarWhereInput[];
  };

  export type MileageHistoryUpdateManyWithoutVehicleNestedInput = {
    create?:
      | XOR<
          MileageHistoryCreateWithoutVehicleInput,
          MileageHistoryUncheckedCreateWithoutVehicleInput
        >
      | MileageHistoryCreateWithoutVehicleInput[]
      | MileageHistoryUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?:
      | MileageHistoryCreateOrConnectWithoutVehicleInput
      | MileageHistoryCreateOrConnectWithoutVehicleInput[];
    upsert?:
      | MileageHistoryUpsertWithWhereUniqueWithoutVehicleInput
      | MileageHistoryUpsertWithWhereUniqueWithoutVehicleInput[];
    createMany?: MileageHistoryCreateManyVehicleInputEnvelope;
    set?: MileageHistoryWhereUniqueInput | MileageHistoryWhereUniqueInput[];
    disconnect?:
      | MileageHistoryWhereUniqueInput
      | MileageHistoryWhereUniqueInput[];
    delete?: MileageHistoryWhereUniqueInput | MileageHistoryWhereUniqueInput[];
    connect?: MileageHistoryWhereUniqueInput | MileageHistoryWhereUniqueInput[];
    update?:
      | MileageHistoryUpdateWithWhereUniqueWithoutVehicleInput
      | MileageHistoryUpdateWithWhereUniqueWithoutVehicleInput[];
    updateMany?:
      | MileageHistoryUpdateManyWithWhereWithoutVehicleInput
      | MileageHistoryUpdateManyWithWhereWithoutVehicleInput[];
    deleteMany?:
      | MileageHistoryScalarWhereInput
      | MileageHistoryScalarWhereInput[];
  };

  export type ServiceRecordUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?:
      | XOR<
          ServiceRecordCreateWithoutVehicleInput,
          ServiceRecordUncheckedCreateWithoutVehicleInput
        >
      | ServiceRecordCreateWithoutVehicleInput[]
      | ServiceRecordUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?:
      | ServiceRecordCreateOrConnectWithoutVehicleInput
      | ServiceRecordCreateOrConnectWithoutVehicleInput[];
    upsert?:
      | ServiceRecordUpsertWithWhereUniqueWithoutVehicleInput
      | ServiceRecordUpsertWithWhereUniqueWithoutVehicleInput[];
    createMany?: ServiceRecordCreateManyVehicleInputEnvelope;
    set?: ServiceRecordWhereUniqueInput | ServiceRecordWhereUniqueInput[];
    disconnect?:
      | ServiceRecordWhereUniqueInput
      | ServiceRecordWhereUniqueInput[];
    delete?: ServiceRecordWhereUniqueInput | ServiceRecordWhereUniqueInput[];
    connect?: ServiceRecordWhereUniqueInput | ServiceRecordWhereUniqueInput[];
    update?:
      | ServiceRecordUpdateWithWhereUniqueWithoutVehicleInput
      | ServiceRecordUpdateWithWhereUniqueWithoutVehicleInput[];
    updateMany?:
      | ServiceRecordUpdateManyWithWhereWithoutVehicleInput
      | ServiceRecordUpdateManyWithWhereWithoutVehicleInput[];
    deleteMany?:
      | ServiceRecordScalarWhereInput
      | ServiceRecordScalarWhereInput[];
  };

  export type MileageHistoryUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?:
      | XOR<
          MileageHistoryCreateWithoutVehicleInput,
          MileageHistoryUncheckedCreateWithoutVehicleInput
        >
      | MileageHistoryCreateWithoutVehicleInput[]
      | MileageHistoryUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?:
      | MileageHistoryCreateOrConnectWithoutVehicleInput
      | MileageHistoryCreateOrConnectWithoutVehicleInput[];
    upsert?:
      | MileageHistoryUpsertWithWhereUniqueWithoutVehicleInput
      | MileageHistoryUpsertWithWhereUniqueWithoutVehicleInput[];
    createMany?: MileageHistoryCreateManyVehicleInputEnvelope;
    set?: MileageHistoryWhereUniqueInput | MileageHistoryWhereUniqueInput[];
    disconnect?:
      | MileageHistoryWhereUniqueInput
      | MileageHistoryWhereUniqueInput[];
    delete?: MileageHistoryWhereUniqueInput | MileageHistoryWhereUniqueInput[];
    connect?: MileageHistoryWhereUniqueInput | MileageHistoryWhereUniqueInput[];
    update?:
      | MileageHistoryUpdateWithWhereUniqueWithoutVehicleInput
      | MileageHistoryUpdateWithWhereUniqueWithoutVehicleInput[];
    updateMany?:
      | MileageHistoryUpdateManyWithWhereWithoutVehicleInput
      | MileageHistoryUpdateManyWithWhereWithoutVehicleInput[];
    deleteMany?:
      | MileageHistoryScalarWhereInput
      | MileageHistoryScalarWhereInput[];
  };

  export type ServiceCreateNestedManyWithoutIconInput = {
    create?:
      | XOR<
          ServiceCreateWithoutIconInput,
          ServiceUncheckedCreateWithoutIconInput
        >
      | ServiceCreateWithoutIconInput[]
      | ServiceUncheckedCreateWithoutIconInput[];
    connectOrCreate?:
      | ServiceCreateOrConnectWithoutIconInput
      | ServiceCreateOrConnectWithoutIconInput[];
    createMany?: ServiceCreateManyIconInputEnvelope;
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
  };

  export type ServiceRuleCreateNestedManyWithoutIconInput = {
    create?:
      | XOR<
          ServiceRuleCreateWithoutIconInput,
          ServiceRuleUncheckedCreateWithoutIconInput
        >
      | ServiceRuleCreateWithoutIconInput[]
      | ServiceRuleUncheckedCreateWithoutIconInput[];
    connectOrCreate?:
      | ServiceRuleCreateOrConnectWithoutIconInput
      | ServiceRuleCreateOrConnectWithoutIconInput[];
    createMany?: ServiceRuleCreateManyIconInputEnvelope;
    connect?: ServiceRuleWhereUniqueInput | ServiceRuleWhereUniqueInput[];
  };

  export type ServiceUncheckedCreateNestedManyWithoutIconInput = {
    create?:
      | XOR<
          ServiceCreateWithoutIconInput,
          ServiceUncheckedCreateWithoutIconInput
        >
      | ServiceCreateWithoutIconInput[]
      | ServiceUncheckedCreateWithoutIconInput[];
    connectOrCreate?:
      | ServiceCreateOrConnectWithoutIconInput
      | ServiceCreateOrConnectWithoutIconInput[];
    createMany?: ServiceCreateManyIconInputEnvelope;
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
  };

  export type ServiceRuleUncheckedCreateNestedManyWithoutIconInput = {
    create?:
      | XOR<
          ServiceRuleCreateWithoutIconInput,
          ServiceRuleUncheckedCreateWithoutIconInput
        >
      | ServiceRuleCreateWithoutIconInput[]
      | ServiceRuleUncheckedCreateWithoutIconInput[];
    connectOrCreate?:
      | ServiceRuleCreateOrConnectWithoutIconInput
      | ServiceRuleCreateOrConnectWithoutIconInput[];
    createMany?: ServiceRuleCreateManyIconInputEnvelope;
    connect?: ServiceRuleWhereUniqueInput | ServiceRuleWhereUniqueInput[];
  };

  export type ServiceUpdateManyWithoutIconNestedInput = {
    create?:
      | XOR<
          ServiceCreateWithoutIconInput,
          ServiceUncheckedCreateWithoutIconInput
        >
      | ServiceCreateWithoutIconInput[]
      | ServiceUncheckedCreateWithoutIconInput[];
    connectOrCreate?:
      | ServiceCreateOrConnectWithoutIconInput
      | ServiceCreateOrConnectWithoutIconInput[];
    upsert?:
      | ServiceUpsertWithWhereUniqueWithoutIconInput
      | ServiceUpsertWithWhereUniqueWithoutIconInput[];
    createMany?: ServiceCreateManyIconInputEnvelope;
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    update?:
      | ServiceUpdateWithWhereUniqueWithoutIconInput
      | ServiceUpdateWithWhereUniqueWithoutIconInput[];
    updateMany?:
      | ServiceUpdateManyWithWhereWithoutIconInput
      | ServiceUpdateManyWithWhereWithoutIconInput[];
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[];
  };

  export type ServiceRuleUpdateManyWithoutIconNestedInput = {
    create?:
      | XOR<
          ServiceRuleCreateWithoutIconInput,
          ServiceRuleUncheckedCreateWithoutIconInput
        >
      | ServiceRuleCreateWithoutIconInput[]
      | ServiceRuleUncheckedCreateWithoutIconInput[];
    connectOrCreate?:
      | ServiceRuleCreateOrConnectWithoutIconInput
      | ServiceRuleCreateOrConnectWithoutIconInput[];
    upsert?:
      | ServiceRuleUpsertWithWhereUniqueWithoutIconInput
      | ServiceRuleUpsertWithWhereUniqueWithoutIconInput[];
    createMany?: ServiceRuleCreateManyIconInputEnvelope;
    set?: ServiceRuleWhereUniqueInput | ServiceRuleWhereUniqueInput[];
    disconnect?: ServiceRuleWhereUniqueInput | ServiceRuleWhereUniqueInput[];
    delete?: ServiceRuleWhereUniqueInput | ServiceRuleWhereUniqueInput[];
    connect?: ServiceRuleWhereUniqueInput | ServiceRuleWhereUniqueInput[];
    update?:
      | ServiceRuleUpdateWithWhereUniqueWithoutIconInput
      | ServiceRuleUpdateWithWhereUniqueWithoutIconInput[];
    updateMany?:
      | ServiceRuleUpdateManyWithWhereWithoutIconInput
      | ServiceRuleUpdateManyWithWhereWithoutIconInput[];
    deleteMany?: ServiceRuleScalarWhereInput | ServiceRuleScalarWhereInput[];
  };

  export type ServiceUncheckedUpdateManyWithoutIconNestedInput = {
    create?:
      | XOR<
          ServiceCreateWithoutIconInput,
          ServiceUncheckedCreateWithoutIconInput
        >
      | ServiceCreateWithoutIconInput[]
      | ServiceUncheckedCreateWithoutIconInput[];
    connectOrCreate?:
      | ServiceCreateOrConnectWithoutIconInput
      | ServiceCreateOrConnectWithoutIconInput[];
    upsert?:
      | ServiceUpsertWithWhereUniqueWithoutIconInput
      | ServiceUpsertWithWhereUniqueWithoutIconInput[];
    createMany?: ServiceCreateManyIconInputEnvelope;
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    update?:
      | ServiceUpdateWithWhereUniqueWithoutIconInput
      | ServiceUpdateWithWhereUniqueWithoutIconInput[];
    updateMany?:
      | ServiceUpdateManyWithWhereWithoutIconInput
      | ServiceUpdateManyWithWhereWithoutIconInput[];
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[];
  };

  export type ServiceRuleUncheckedUpdateManyWithoutIconNestedInput = {
    create?:
      | XOR<
          ServiceRuleCreateWithoutIconInput,
          ServiceRuleUncheckedCreateWithoutIconInput
        >
      | ServiceRuleCreateWithoutIconInput[]
      | ServiceRuleUncheckedCreateWithoutIconInput[];
    connectOrCreate?:
      | ServiceRuleCreateOrConnectWithoutIconInput
      | ServiceRuleCreateOrConnectWithoutIconInput[];
    upsert?:
      | ServiceRuleUpsertWithWhereUniqueWithoutIconInput
      | ServiceRuleUpsertWithWhereUniqueWithoutIconInput[];
    createMany?: ServiceRuleCreateManyIconInputEnvelope;
    set?: ServiceRuleWhereUniqueInput | ServiceRuleWhereUniqueInput[];
    disconnect?: ServiceRuleWhereUniqueInput | ServiceRuleWhereUniqueInput[];
    delete?: ServiceRuleWhereUniqueInput | ServiceRuleWhereUniqueInput[];
    connect?: ServiceRuleWhereUniqueInput | ServiceRuleWhereUniqueInput[];
    update?:
      | ServiceRuleUpdateWithWhereUniqueWithoutIconInput
      | ServiceRuleUpdateWithWhereUniqueWithoutIconInput[];
    updateMany?:
      | ServiceRuleUpdateManyWithWhereWithoutIconInput
      | ServiceRuleUpdateManyWithWhereWithoutIconInput[];
    deleteMany?: ServiceRuleScalarWhereInput | ServiceRuleScalarWhereInput[];
  };

  export type ServiceIconCreateNestedOneWithoutServicesInput = {
    create?: XOR<
      ServiceIconCreateWithoutServicesInput,
      ServiceIconUncheckedCreateWithoutServicesInput
    >;
    connectOrCreate?: ServiceIconCreateOrConnectWithoutServicesInput;
    connect?: ServiceIconWhereUniqueInput;
  };

  export type ServiceRecordCreateNestedManyWithoutServiceInput = {
    create?:
      | XOR<
          ServiceRecordCreateWithoutServiceInput,
          ServiceRecordUncheckedCreateWithoutServiceInput
        >
      | ServiceRecordCreateWithoutServiceInput[]
      | ServiceRecordUncheckedCreateWithoutServiceInput[];
    connectOrCreate?:
      | ServiceRecordCreateOrConnectWithoutServiceInput
      | ServiceRecordCreateOrConnectWithoutServiceInput[];
    createMany?: ServiceRecordCreateManyServiceInputEnvelope;
    connect?: ServiceRecordWhereUniqueInput | ServiceRecordWhereUniqueInput[];
  };

  export type ServiceRecordUncheckedCreateNestedManyWithoutServiceInput = {
    create?:
      | XOR<
          ServiceRecordCreateWithoutServiceInput,
          ServiceRecordUncheckedCreateWithoutServiceInput
        >
      | ServiceRecordCreateWithoutServiceInput[]
      | ServiceRecordUncheckedCreateWithoutServiceInput[];
    connectOrCreate?:
      | ServiceRecordCreateOrConnectWithoutServiceInput
      | ServiceRecordCreateOrConnectWithoutServiceInput[];
    createMany?: ServiceRecordCreateManyServiceInputEnvelope;
    connect?: ServiceRecordWhereUniqueInput | ServiceRecordWhereUniqueInput[];
  };

  export type ServiceIconUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<
      ServiceIconCreateWithoutServicesInput,
      ServiceIconUncheckedCreateWithoutServicesInput
    >;
    connectOrCreate?: ServiceIconCreateOrConnectWithoutServicesInput;
    upsert?: ServiceIconUpsertWithoutServicesInput;
    connect?: ServiceIconWhereUniqueInput;
    update?: XOR<
      XOR<
        ServiceIconUpdateToOneWithWhereWithoutServicesInput,
        ServiceIconUpdateWithoutServicesInput
      >,
      ServiceIconUncheckedUpdateWithoutServicesInput
    >;
  };

  export type ServiceRecordUpdateManyWithoutServiceNestedInput = {
    create?:
      | XOR<
          ServiceRecordCreateWithoutServiceInput,
          ServiceRecordUncheckedCreateWithoutServiceInput
        >
      | ServiceRecordCreateWithoutServiceInput[]
      | ServiceRecordUncheckedCreateWithoutServiceInput[];
    connectOrCreate?:
      | ServiceRecordCreateOrConnectWithoutServiceInput
      | ServiceRecordCreateOrConnectWithoutServiceInput[];
    upsert?:
      | ServiceRecordUpsertWithWhereUniqueWithoutServiceInput
      | ServiceRecordUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: ServiceRecordCreateManyServiceInputEnvelope;
    set?: ServiceRecordWhereUniqueInput | ServiceRecordWhereUniqueInput[];
    disconnect?:
      | ServiceRecordWhereUniqueInput
      | ServiceRecordWhereUniqueInput[];
    delete?: ServiceRecordWhereUniqueInput | ServiceRecordWhereUniqueInput[];
    connect?: ServiceRecordWhereUniqueInput | ServiceRecordWhereUniqueInput[];
    update?:
      | ServiceRecordUpdateWithWhereUniqueWithoutServiceInput
      | ServiceRecordUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?:
      | ServiceRecordUpdateManyWithWhereWithoutServiceInput
      | ServiceRecordUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?:
      | ServiceRecordScalarWhereInput
      | ServiceRecordScalarWhereInput[];
  };

  export type ServiceRecordUncheckedUpdateManyWithoutServiceNestedInput = {
    create?:
      | XOR<
          ServiceRecordCreateWithoutServiceInput,
          ServiceRecordUncheckedCreateWithoutServiceInput
        >
      | ServiceRecordCreateWithoutServiceInput[]
      | ServiceRecordUncheckedCreateWithoutServiceInput[];
    connectOrCreate?:
      | ServiceRecordCreateOrConnectWithoutServiceInput
      | ServiceRecordCreateOrConnectWithoutServiceInput[];
    upsert?:
      | ServiceRecordUpsertWithWhereUniqueWithoutServiceInput
      | ServiceRecordUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: ServiceRecordCreateManyServiceInputEnvelope;
    set?: ServiceRecordWhereUniqueInput | ServiceRecordWhereUniqueInput[];
    disconnect?:
      | ServiceRecordWhereUniqueInput
      | ServiceRecordWhereUniqueInput[];
    delete?: ServiceRecordWhereUniqueInput | ServiceRecordWhereUniqueInput[];
    connect?: ServiceRecordWhereUniqueInput | ServiceRecordWhereUniqueInput[];
    update?:
      | ServiceRecordUpdateWithWhereUniqueWithoutServiceInput
      | ServiceRecordUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?:
      | ServiceRecordUpdateManyWithWhereWithoutServiceInput
      | ServiceRecordUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?:
      | ServiceRecordScalarWhereInput
      | ServiceRecordScalarWhereInput[];
  };

  export type ServiceIconCreateNestedOneWithoutRulesInput = {
    create?: XOR<
      ServiceIconCreateWithoutRulesInput,
      ServiceIconUncheckedCreateWithoutRulesInput
    >;
    connectOrCreate?: ServiceIconCreateOrConnectWithoutRulesInput;
    connect?: ServiceIconWhereUniqueInput;
  };

  export type ServiceIconUpdateOneRequiredWithoutRulesNestedInput = {
    create?: XOR<
      ServiceIconCreateWithoutRulesInput,
      ServiceIconUncheckedCreateWithoutRulesInput
    >;
    connectOrCreate?: ServiceIconCreateOrConnectWithoutRulesInput;
    upsert?: ServiceIconUpsertWithoutRulesInput;
    connect?: ServiceIconWhereUniqueInput;
    update?: XOR<
      XOR<
        ServiceIconUpdateToOneWithWhereWithoutRulesInput,
        ServiceIconUpdateWithoutRulesInput
      >,
      ServiceIconUncheckedUpdateWithoutRulesInput
    >;
  };

  export type VehicleCreateNestedOneWithoutServiceRecordsInput = {
    create?: XOR<
      VehicleCreateWithoutServiceRecordsInput,
      VehicleUncheckedCreateWithoutServiceRecordsInput
    >;
    connectOrCreate?: VehicleCreateOrConnectWithoutServiceRecordsInput;
    connect?: VehicleWhereUniqueInput;
  };

  export type ServiceCreateNestedOneWithoutRecordsInput = {
    create?: XOR<
      ServiceCreateWithoutRecordsInput,
      ServiceUncheckedCreateWithoutRecordsInput
    >;
    connectOrCreate?: ServiceCreateOrConnectWithoutRecordsInput;
    connect?: ServiceWhereUniqueInput;
  };

  export type VehicleUpdateOneRequiredWithoutServiceRecordsNestedInput = {
    create?: XOR<
      VehicleCreateWithoutServiceRecordsInput,
      VehicleUncheckedCreateWithoutServiceRecordsInput
    >;
    connectOrCreate?: VehicleCreateOrConnectWithoutServiceRecordsInput;
    upsert?: VehicleUpsertWithoutServiceRecordsInput;
    connect?: VehicleWhereUniqueInput;
    update?: XOR<
      XOR<
        VehicleUpdateToOneWithWhereWithoutServiceRecordsInput,
        VehicleUpdateWithoutServiceRecordsInput
      >,
      VehicleUncheckedUpdateWithoutServiceRecordsInput
    >;
  };

  export type ServiceUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<
      ServiceCreateWithoutRecordsInput,
      ServiceUncheckedCreateWithoutRecordsInput
    >;
    connectOrCreate?: ServiceCreateOrConnectWithoutRecordsInput;
    upsert?: ServiceUpsertWithoutRecordsInput;
    connect?: ServiceWhereUniqueInput;
    update?: XOR<
      XOR<
        ServiceUpdateToOneWithWhereWithoutRecordsInput,
        ServiceUpdateWithoutRecordsInput
      >,
      ServiceUncheckedUpdateWithoutRecordsInput
    >;
  };

  export type VehicleCreateNestedOneWithoutMileageHistoryInput = {
    create?: XOR<
      VehicleCreateWithoutMileageHistoryInput,
      VehicleUncheckedCreateWithoutMileageHistoryInput
    >;
    connectOrCreate?: VehicleCreateOrConnectWithoutMileageHistoryInput;
    connect?: VehicleWhereUniqueInput;
  };

  export type VehicleUpdateOneRequiredWithoutMileageHistoryNestedInput = {
    create?: XOR<
      VehicleCreateWithoutMileageHistoryInput,
      VehicleUncheckedCreateWithoutMileageHistoryInput
    >;
    connectOrCreate?: VehicleCreateOrConnectWithoutMileageHistoryInput;
    upsert?: VehicleUpsertWithoutMileageHistoryInput;
    connect?: VehicleWhereUniqueInput;
    update?: XOR<
      XOR<
        VehicleUpdateToOneWithWhereWithoutMileageHistoryInput,
        VehicleUpdateWithoutMileageHistoryInput
      >,
      VehicleUncheckedUpdateWithoutMileageHistoryInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | null;
      notIn?: Date[] | string[] | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type VehicleCreateWithoutUserInput = {
    make: string;
    model: string;
    plate: string;
    initialMileage?: number;
    currentMileage: number;
    lastServiceDate: Date | string;
    lastServiceMileage: number;
    imageUrl?: string | null;
    serviceRecords?: ServiceRecordCreateNestedManyWithoutVehicleInput;
    mileageHistory?: MileageHistoryCreateNestedManyWithoutVehicleInput;
  };

  export type VehicleUncheckedCreateWithoutUserInput = {
    id?: number;
    make: string;
    model: string;
    plate: string;
    initialMileage?: number;
    currentMileage: number;
    lastServiceDate: Date | string;
    lastServiceMileage: number;
    imageUrl?: string | null;
    serviceRecords?: ServiceRecordUncheckedCreateNestedManyWithoutVehicleInput;
    mileageHistory?: MileageHistoryUncheckedCreateNestedManyWithoutVehicleInput;
  };

  export type VehicleCreateOrConnectWithoutUserInput = {
    where: VehicleWhereUniqueInput;
    create: XOR<
      VehicleCreateWithoutUserInput,
      VehicleUncheckedCreateWithoutUserInput
    >;
  };

  export type VehicleCreateManyUserInputEnvelope = {
    data: VehicleCreateManyUserInput | VehicleCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type VehicleUpsertWithWhereUniqueWithoutUserInput = {
    where: VehicleWhereUniqueInput;
    update: XOR<
      VehicleUpdateWithoutUserInput,
      VehicleUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      VehicleCreateWithoutUserInput,
      VehicleUncheckedCreateWithoutUserInput
    >;
  };

  export type VehicleUpdateWithWhereUniqueWithoutUserInput = {
    where: VehicleWhereUniqueInput;
    data: XOR<
      VehicleUpdateWithoutUserInput,
      VehicleUncheckedUpdateWithoutUserInput
    >;
  };

  export type VehicleUpdateManyWithWhereWithoutUserInput = {
    where: VehicleScalarWhereInput;
    data: XOR<
      VehicleUpdateManyMutationInput,
      VehicleUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[];
    OR?: VehicleScalarWhereInput[];
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[];
    id?: IntFilter<'Vehicle'> | number;
    make?: StringFilter<'Vehicle'> | string;
    model?: StringFilter<'Vehicle'> | string;
    plate?: StringFilter<'Vehicle'> | string;
    initialMileage?: IntFilter<'Vehicle'> | number;
    currentMileage?: IntFilter<'Vehicle'> | number;
    lastServiceDate?: DateTimeFilter<'Vehicle'> | Date | string;
    lastServiceMileage?: IntFilter<'Vehicle'> | number;
    imageUrl?: StringNullableFilter<'Vehicle'> | string | null;
    userId?: IntFilter<'Vehicle'> | number;
  };

  export type UserCreateWithoutVehiclesInput = {
    username: string;
    phone: string;
    email: string;
    password: string;
    otpCode?: string | null;
    otpExpires?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
  };

  export type UserUncheckedCreateWithoutVehiclesInput = {
    id?: number;
    username: string;
    phone: string;
    email: string;
    password: string;
    otpCode?: string | null;
    otpExpires?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
  };

  export type UserCreateOrConnectWithoutVehiclesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutVehiclesInput,
      UserUncheckedCreateWithoutVehiclesInput
    >;
  };

  export type ServiceRecordCreateWithoutVehicleInput = {
    mileage: number;
    date?: Date | string;
    notes?: string | null;
    service: ServiceCreateNestedOneWithoutRecordsInput;
  };

  export type ServiceRecordUncheckedCreateWithoutVehicleInput = {
    id?: number;
    serviceId: number;
    mileage: number;
    date?: Date | string;
    notes?: string | null;
  };

  export type ServiceRecordCreateOrConnectWithoutVehicleInput = {
    where: ServiceRecordWhereUniqueInput;
    create: XOR<
      ServiceRecordCreateWithoutVehicleInput,
      ServiceRecordUncheckedCreateWithoutVehicleInput
    >;
  };

  export type ServiceRecordCreateManyVehicleInputEnvelope = {
    data:
      | ServiceRecordCreateManyVehicleInput
      | ServiceRecordCreateManyVehicleInput[];
    skipDuplicates?: boolean;
  };

  export type MileageHistoryCreateWithoutVehicleInput = {
    mileage: number;
    date?: Date | string;
  };

  export type MileageHistoryUncheckedCreateWithoutVehicleInput = {
    id?: number;
    mileage: number;
    date?: Date | string;
  };

  export type MileageHistoryCreateOrConnectWithoutVehicleInput = {
    where: MileageHistoryWhereUniqueInput;
    create: XOR<
      MileageHistoryCreateWithoutVehicleInput,
      MileageHistoryUncheckedCreateWithoutVehicleInput
    >;
  };

  export type MileageHistoryCreateManyVehicleInputEnvelope = {
    data:
      | MileageHistoryCreateManyVehicleInput
      | MileageHistoryCreateManyVehicleInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutVehiclesInput = {
    update: XOR<
      UserUpdateWithoutVehiclesInput,
      UserUncheckedUpdateWithoutVehiclesInput
    >;
    create: XOR<
      UserCreateWithoutVehiclesInput,
      UserUncheckedCreateWithoutVehiclesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutVehiclesInput,
      UserUncheckedUpdateWithoutVehiclesInput
    >;
  };

  export type UserUpdateWithoutVehiclesInput = {
    username?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null;
    otpExpires?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null;
    otpExpires?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ServiceRecordUpsertWithWhereUniqueWithoutVehicleInput = {
    where: ServiceRecordWhereUniqueInput;
    update: XOR<
      ServiceRecordUpdateWithoutVehicleInput,
      ServiceRecordUncheckedUpdateWithoutVehicleInput
    >;
    create: XOR<
      ServiceRecordCreateWithoutVehicleInput,
      ServiceRecordUncheckedCreateWithoutVehicleInput
    >;
  };

  export type ServiceRecordUpdateWithWhereUniqueWithoutVehicleInput = {
    where: ServiceRecordWhereUniqueInput;
    data: XOR<
      ServiceRecordUpdateWithoutVehicleInput,
      ServiceRecordUncheckedUpdateWithoutVehicleInput
    >;
  };

  export type ServiceRecordUpdateManyWithWhereWithoutVehicleInput = {
    where: ServiceRecordScalarWhereInput;
    data: XOR<
      ServiceRecordUpdateManyMutationInput,
      ServiceRecordUncheckedUpdateManyWithoutVehicleInput
    >;
  };

  export type ServiceRecordScalarWhereInput = {
    AND?: ServiceRecordScalarWhereInput | ServiceRecordScalarWhereInput[];
    OR?: ServiceRecordScalarWhereInput[];
    NOT?: ServiceRecordScalarWhereInput | ServiceRecordScalarWhereInput[];
    id?: IntFilter<'ServiceRecord'> | number;
    vehicleId?: IntFilter<'ServiceRecord'> | number;
    serviceId?: IntFilter<'ServiceRecord'> | number;
    mileage?: IntFilter<'ServiceRecord'> | number;
    date?: DateTimeFilter<'ServiceRecord'> | Date | string;
    notes?: StringNullableFilter<'ServiceRecord'> | string | null;
  };

  export type MileageHistoryUpsertWithWhereUniqueWithoutVehicleInput = {
    where: MileageHistoryWhereUniqueInput;
    update: XOR<
      MileageHistoryUpdateWithoutVehicleInput,
      MileageHistoryUncheckedUpdateWithoutVehicleInput
    >;
    create: XOR<
      MileageHistoryCreateWithoutVehicleInput,
      MileageHistoryUncheckedCreateWithoutVehicleInput
    >;
  };

  export type MileageHistoryUpdateWithWhereUniqueWithoutVehicleInput = {
    where: MileageHistoryWhereUniqueInput;
    data: XOR<
      MileageHistoryUpdateWithoutVehicleInput,
      MileageHistoryUncheckedUpdateWithoutVehicleInput
    >;
  };

  export type MileageHistoryUpdateManyWithWhereWithoutVehicleInput = {
    where: MileageHistoryScalarWhereInput;
    data: XOR<
      MileageHistoryUpdateManyMutationInput,
      MileageHistoryUncheckedUpdateManyWithoutVehicleInput
    >;
  };

  export type MileageHistoryScalarWhereInput = {
    AND?: MileageHistoryScalarWhereInput | MileageHistoryScalarWhereInput[];
    OR?: MileageHistoryScalarWhereInput[];
    NOT?: MileageHistoryScalarWhereInput | MileageHistoryScalarWhereInput[];
    id?: IntFilter<'MileageHistory'> | number;
    vehicleId?: IntFilter<'MileageHistory'> | number;
    mileage?: IntFilter<'MileageHistory'> | number;
    date?: DateTimeFilter<'MileageHistory'> | Date | string;
  };

  export type ServiceCreateWithoutIconInput = {
    serviceName: string;
    records?: ServiceRecordCreateNestedManyWithoutServiceInput;
  };

  export type ServiceUncheckedCreateWithoutIconInput = {
    id?: number;
    serviceName: string;
    records?: ServiceRecordUncheckedCreateNestedManyWithoutServiceInput;
  };

  export type ServiceCreateOrConnectWithoutIconInput = {
    where: ServiceWhereUniqueInput;
    create: XOR<
      ServiceCreateWithoutIconInput,
      ServiceUncheckedCreateWithoutIconInput
    >;
  };

  export type ServiceCreateManyIconInputEnvelope = {
    data: ServiceCreateManyIconInput | ServiceCreateManyIconInput[];
    skipDuplicates?: boolean;
  };

  export type ServiceRuleCreateWithoutIconInput = {
    serviceName: string;
    frequencyKm: number;
  };

  export type ServiceRuleUncheckedCreateWithoutIconInput = {
    id?: number;
    serviceName: string;
    frequencyKm: number;
  };

  export type ServiceRuleCreateOrConnectWithoutIconInput = {
    where: ServiceRuleWhereUniqueInput;
    create: XOR<
      ServiceRuleCreateWithoutIconInput,
      ServiceRuleUncheckedCreateWithoutIconInput
    >;
  };

  export type ServiceRuleCreateManyIconInputEnvelope = {
    data: ServiceRuleCreateManyIconInput | ServiceRuleCreateManyIconInput[];
    skipDuplicates?: boolean;
  };

  export type ServiceUpsertWithWhereUniqueWithoutIconInput = {
    where: ServiceWhereUniqueInput;
    update: XOR<
      ServiceUpdateWithoutIconInput,
      ServiceUncheckedUpdateWithoutIconInput
    >;
    create: XOR<
      ServiceCreateWithoutIconInput,
      ServiceUncheckedCreateWithoutIconInput
    >;
  };

  export type ServiceUpdateWithWhereUniqueWithoutIconInput = {
    where: ServiceWhereUniqueInput;
    data: XOR<
      ServiceUpdateWithoutIconInput,
      ServiceUncheckedUpdateWithoutIconInput
    >;
  };

  export type ServiceUpdateManyWithWhereWithoutIconInput = {
    where: ServiceScalarWhereInput;
    data: XOR<
      ServiceUpdateManyMutationInput,
      ServiceUncheckedUpdateManyWithoutIconInput
    >;
  };

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[];
    OR?: ServiceScalarWhereInput[];
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[];
    id?: IntFilter<'Service'> | number;
    serviceName?: StringFilter<'Service'> | string;
    iconId?: IntFilter<'Service'> | number;
  };

  export type ServiceRuleUpsertWithWhereUniqueWithoutIconInput = {
    where: ServiceRuleWhereUniqueInput;
    update: XOR<
      ServiceRuleUpdateWithoutIconInput,
      ServiceRuleUncheckedUpdateWithoutIconInput
    >;
    create: XOR<
      ServiceRuleCreateWithoutIconInput,
      ServiceRuleUncheckedCreateWithoutIconInput
    >;
  };

  export type ServiceRuleUpdateWithWhereUniqueWithoutIconInput = {
    where: ServiceRuleWhereUniqueInput;
    data: XOR<
      ServiceRuleUpdateWithoutIconInput,
      ServiceRuleUncheckedUpdateWithoutIconInput
    >;
  };

  export type ServiceRuleUpdateManyWithWhereWithoutIconInput = {
    where: ServiceRuleScalarWhereInput;
    data: XOR<
      ServiceRuleUpdateManyMutationInput,
      ServiceRuleUncheckedUpdateManyWithoutIconInput
    >;
  };

  export type ServiceRuleScalarWhereInput = {
    AND?: ServiceRuleScalarWhereInput | ServiceRuleScalarWhereInput[];
    OR?: ServiceRuleScalarWhereInput[];
    NOT?: ServiceRuleScalarWhereInput | ServiceRuleScalarWhereInput[];
    id?: IntFilter<'ServiceRule'> | number;
    serviceName?: StringFilter<'ServiceRule'> | string;
    frequencyKm?: IntFilter<'ServiceRule'> | number;
    iconId?: IntFilter<'ServiceRule'> | number;
  };

  export type ServiceIconCreateWithoutServicesInput = {
    name: string;
    icon: string;
    rules?: ServiceRuleCreateNestedManyWithoutIconInput;
  };

  export type ServiceIconUncheckedCreateWithoutServicesInput = {
    id?: number;
    name: string;
    icon: string;
    rules?: ServiceRuleUncheckedCreateNestedManyWithoutIconInput;
  };

  export type ServiceIconCreateOrConnectWithoutServicesInput = {
    where: ServiceIconWhereUniqueInput;
    create: XOR<
      ServiceIconCreateWithoutServicesInput,
      ServiceIconUncheckedCreateWithoutServicesInput
    >;
  };

  export type ServiceRecordCreateWithoutServiceInput = {
    mileage: number;
    date?: Date | string;
    notes?: string | null;
    vehicle: VehicleCreateNestedOneWithoutServiceRecordsInput;
  };

  export type ServiceRecordUncheckedCreateWithoutServiceInput = {
    id?: number;
    vehicleId: number;
    mileage: number;
    date?: Date | string;
    notes?: string | null;
  };

  export type ServiceRecordCreateOrConnectWithoutServiceInput = {
    where: ServiceRecordWhereUniqueInput;
    create: XOR<
      ServiceRecordCreateWithoutServiceInput,
      ServiceRecordUncheckedCreateWithoutServiceInput
    >;
  };

  export type ServiceRecordCreateManyServiceInputEnvelope = {
    data:
      | ServiceRecordCreateManyServiceInput
      | ServiceRecordCreateManyServiceInput[];
    skipDuplicates?: boolean;
  };

  export type ServiceIconUpsertWithoutServicesInput = {
    update: XOR<
      ServiceIconUpdateWithoutServicesInput,
      ServiceIconUncheckedUpdateWithoutServicesInput
    >;
    create: XOR<
      ServiceIconCreateWithoutServicesInput,
      ServiceIconUncheckedCreateWithoutServicesInput
    >;
    where?: ServiceIconWhereInput;
  };

  export type ServiceIconUpdateToOneWithWhereWithoutServicesInput = {
    where?: ServiceIconWhereInput;
    data: XOR<
      ServiceIconUpdateWithoutServicesInput,
      ServiceIconUncheckedUpdateWithoutServicesInput
    >;
  };

  export type ServiceIconUpdateWithoutServicesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    rules?: ServiceRuleUpdateManyWithoutIconNestedInput;
  };

  export type ServiceIconUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    rules?: ServiceRuleUncheckedUpdateManyWithoutIconNestedInput;
  };

  export type ServiceRecordUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServiceRecordWhereUniqueInput;
    update: XOR<
      ServiceRecordUpdateWithoutServiceInput,
      ServiceRecordUncheckedUpdateWithoutServiceInput
    >;
    create: XOR<
      ServiceRecordCreateWithoutServiceInput,
      ServiceRecordUncheckedCreateWithoutServiceInput
    >;
  };

  export type ServiceRecordUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServiceRecordWhereUniqueInput;
    data: XOR<
      ServiceRecordUpdateWithoutServiceInput,
      ServiceRecordUncheckedUpdateWithoutServiceInput
    >;
  };

  export type ServiceRecordUpdateManyWithWhereWithoutServiceInput = {
    where: ServiceRecordScalarWhereInput;
    data: XOR<
      ServiceRecordUpdateManyMutationInput,
      ServiceRecordUncheckedUpdateManyWithoutServiceInput
    >;
  };

  export type ServiceIconCreateWithoutRulesInput = {
    name: string;
    icon: string;
    services?: ServiceCreateNestedManyWithoutIconInput;
  };

  export type ServiceIconUncheckedCreateWithoutRulesInput = {
    id?: number;
    name: string;
    icon: string;
    services?: ServiceUncheckedCreateNestedManyWithoutIconInput;
  };

  export type ServiceIconCreateOrConnectWithoutRulesInput = {
    where: ServiceIconWhereUniqueInput;
    create: XOR<
      ServiceIconCreateWithoutRulesInput,
      ServiceIconUncheckedCreateWithoutRulesInput
    >;
  };

  export type ServiceIconUpsertWithoutRulesInput = {
    update: XOR<
      ServiceIconUpdateWithoutRulesInput,
      ServiceIconUncheckedUpdateWithoutRulesInput
    >;
    create: XOR<
      ServiceIconCreateWithoutRulesInput,
      ServiceIconUncheckedCreateWithoutRulesInput
    >;
    where?: ServiceIconWhereInput;
  };

  export type ServiceIconUpdateToOneWithWhereWithoutRulesInput = {
    where?: ServiceIconWhereInput;
    data: XOR<
      ServiceIconUpdateWithoutRulesInput,
      ServiceIconUncheckedUpdateWithoutRulesInput
    >;
  };

  export type ServiceIconUpdateWithoutRulesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    services?: ServiceUpdateManyWithoutIconNestedInput;
  };

  export type ServiceIconUncheckedUpdateWithoutRulesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    services?: ServiceUncheckedUpdateManyWithoutIconNestedInput;
  };

  export type VehicleCreateWithoutServiceRecordsInput = {
    make: string;
    model: string;
    plate: string;
    initialMileage?: number;
    currentMileage: number;
    lastServiceDate: Date | string;
    lastServiceMileage: number;
    imageUrl?: string | null;
    user: UserCreateNestedOneWithoutVehiclesInput;
    mileageHistory?: MileageHistoryCreateNestedManyWithoutVehicleInput;
  };

  export type VehicleUncheckedCreateWithoutServiceRecordsInput = {
    id?: number;
    make: string;
    model: string;
    plate: string;
    initialMileage?: number;
    currentMileage: number;
    lastServiceDate: Date | string;
    lastServiceMileage: number;
    imageUrl?: string | null;
    userId: number;
    mileageHistory?: MileageHistoryUncheckedCreateNestedManyWithoutVehicleInput;
  };

  export type VehicleCreateOrConnectWithoutServiceRecordsInput = {
    where: VehicleWhereUniqueInput;
    create: XOR<
      VehicleCreateWithoutServiceRecordsInput,
      VehicleUncheckedCreateWithoutServiceRecordsInput
    >;
  };

  export type ServiceCreateWithoutRecordsInput = {
    serviceName: string;
    icon: ServiceIconCreateNestedOneWithoutServicesInput;
  };

  export type ServiceUncheckedCreateWithoutRecordsInput = {
    id?: number;
    serviceName: string;
    iconId: number;
  };

  export type ServiceCreateOrConnectWithoutRecordsInput = {
    where: ServiceWhereUniqueInput;
    create: XOR<
      ServiceCreateWithoutRecordsInput,
      ServiceUncheckedCreateWithoutRecordsInput
    >;
  };

  export type VehicleUpsertWithoutServiceRecordsInput = {
    update: XOR<
      VehicleUpdateWithoutServiceRecordsInput,
      VehicleUncheckedUpdateWithoutServiceRecordsInput
    >;
    create: XOR<
      VehicleCreateWithoutServiceRecordsInput,
      VehicleUncheckedCreateWithoutServiceRecordsInput
    >;
    where?: VehicleWhereInput;
  };

  export type VehicleUpdateToOneWithWhereWithoutServiceRecordsInput = {
    where?: VehicleWhereInput;
    data: XOR<
      VehicleUpdateWithoutServiceRecordsInput,
      VehicleUncheckedUpdateWithoutServiceRecordsInput
    >;
  };

  export type VehicleUpdateWithoutServiceRecordsInput = {
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    plate?: StringFieldUpdateOperationsInput | string;
    initialMileage?: IntFieldUpdateOperationsInput | number;
    currentMileage?: IntFieldUpdateOperationsInput | number;
    lastServiceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastServiceMileage?: IntFieldUpdateOperationsInput | number;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput;
    mileageHistory?: MileageHistoryUpdateManyWithoutVehicleNestedInput;
  };

  export type VehicleUncheckedUpdateWithoutServiceRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    plate?: StringFieldUpdateOperationsInput | string;
    initialMileage?: IntFieldUpdateOperationsInput | number;
    currentMileage?: IntFieldUpdateOperationsInput | number;
    lastServiceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastServiceMileage?: IntFieldUpdateOperationsInput | number;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: IntFieldUpdateOperationsInput | number;
    mileageHistory?: MileageHistoryUncheckedUpdateManyWithoutVehicleNestedInput;
  };

  export type ServiceUpsertWithoutRecordsInput = {
    update: XOR<
      ServiceUpdateWithoutRecordsInput,
      ServiceUncheckedUpdateWithoutRecordsInput
    >;
    create: XOR<
      ServiceCreateWithoutRecordsInput,
      ServiceUncheckedCreateWithoutRecordsInput
    >;
    where?: ServiceWhereInput;
  };

  export type ServiceUpdateToOneWithWhereWithoutRecordsInput = {
    where?: ServiceWhereInput;
    data: XOR<
      ServiceUpdateWithoutRecordsInput,
      ServiceUncheckedUpdateWithoutRecordsInput
    >;
  };

  export type ServiceUpdateWithoutRecordsInput = {
    serviceName?: StringFieldUpdateOperationsInput | string;
    icon?: ServiceIconUpdateOneRequiredWithoutServicesNestedInput;
  };

  export type ServiceUncheckedUpdateWithoutRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    serviceName?: StringFieldUpdateOperationsInput | string;
    iconId?: IntFieldUpdateOperationsInput | number;
  };

  export type VehicleCreateWithoutMileageHistoryInput = {
    make: string;
    model: string;
    plate: string;
    initialMileage?: number;
    currentMileage: number;
    lastServiceDate: Date | string;
    lastServiceMileage: number;
    imageUrl?: string | null;
    user: UserCreateNestedOneWithoutVehiclesInput;
    serviceRecords?: ServiceRecordCreateNestedManyWithoutVehicleInput;
  };

  export type VehicleUncheckedCreateWithoutMileageHistoryInput = {
    id?: number;
    make: string;
    model: string;
    plate: string;
    initialMileage?: number;
    currentMileage: number;
    lastServiceDate: Date | string;
    lastServiceMileage: number;
    imageUrl?: string | null;
    userId: number;
    serviceRecords?: ServiceRecordUncheckedCreateNestedManyWithoutVehicleInput;
  };

  export type VehicleCreateOrConnectWithoutMileageHistoryInput = {
    where: VehicleWhereUniqueInput;
    create: XOR<
      VehicleCreateWithoutMileageHistoryInput,
      VehicleUncheckedCreateWithoutMileageHistoryInput
    >;
  };

  export type VehicleUpsertWithoutMileageHistoryInput = {
    update: XOR<
      VehicleUpdateWithoutMileageHistoryInput,
      VehicleUncheckedUpdateWithoutMileageHistoryInput
    >;
    create: XOR<
      VehicleCreateWithoutMileageHistoryInput,
      VehicleUncheckedCreateWithoutMileageHistoryInput
    >;
    where?: VehicleWhereInput;
  };

  export type VehicleUpdateToOneWithWhereWithoutMileageHistoryInput = {
    where?: VehicleWhereInput;
    data: XOR<
      VehicleUpdateWithoutMileageHistoryInput,
      VehicleUncheckedUpdateWithoutMileageHistoryInput
    >;
  };

  export type VehicleUpdateWithoutMileageHistoryInput = {
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    plate?: StringFieldUpdateOperationsInput | string;
    initialMileage?: IntFieldUpdateOperationsInput | number;
    currentMileage?: IntFieldUpdateOperationsInput | number;
    lastServiceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastServiceMileage?: IntFieldUpdateOperationsInput | number;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput;
    serviceRecords?: ServiceRecordUpdateManyWithoutVehicleNestedInput;
  };

  export type VehicleUncheckedUpdateWithoutMileageHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    plate?: StringFieldUpdateOperationsInput | string;
    initialMileage?: IntFieldUpdateOperationsInput | number;
    currentMileage?: IntFieldUpdateOperationsInput | number;
    lastServiceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastServiceMileage?: IntFieldUpdateOperationsInput | number;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: IntFieldUpdateOperationsInput | number;
    serviceRecords?: ServiceRecordUncheckedUpdateManyWithoutVehicleNestedInput;
  };

  export type VehicleCreateManyUserInput = {
    id?: number;
    make: string;
    model: string;
    plate: string;
    initialMileage?: number;
    currentMileage: number;
    lastServiceDate: Date | string;
    lastServiceMileage: number;
    imageUrl?: string | null;
  };

  export type VehicleUpdateWithoutUserInput = {
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    plate?: StringFieldUpdateOperationsInput | string;
    initialMileage?: IntFieldUpdateOperationsInput | number;
    currentMileage?: IntFieldUpdateOperationsInput | number;
    lastServiceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastServiceMileage?: IntFieldUpdateOperationsInput | number;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    serviceRecords?: ServiceRecordUpdateManyWithoutVehicleNestedInput;
    mileageHistory?: MileageHistoryUpdateManyWithoutVehicleNestedInput;
  };

  export type VehicleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    plate?: StringFieldUpdateOperationsInput | string;
    initialMileage?: IntFieldUpdateOperationsInput | number;
    currentMileage?: IntFieldUpdateOperationsInput | number;
    lastServiceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastServiceMileage?: IntFieldUpdateOperationsInput | number;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    serviceRecords?: ServiceRecordUncheckedUpdateManyWithoutVehicleNestedInput;
    mileageHistory?: MileageHistoryUncheckedUpdateManyWithoutVehicleNestedInput;
  };

  export type VehicleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    plate?: StringFieldUpdateOperationsInput | string;
    initialMileage?: IntFieldUpdateOperationsInput | number;
    currentMileage?: IntFieldUpdateOperationsInput | number;
    lastServiceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastServiceMileage?: IntFieldUpdateOperationsInput | number;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ServiceRecordCreateManyVehicleInput = {
    id?: number;
    serviceId: number;
    mileage: number;
    date?: Date | string;
    notes?: string | null;
  };

  export type MileageHistoryCreateManyVehicleInput = {
    id?: number;
    mileage: number;
    date?: Date | string;
  };

  export type ServiceRecordUpdateWithoutVehicleInput = {
    mileage?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    service?: ServiceUpdateOneRequiredWithoutRecordsNestedInput;
  };

  export type ServiceRecordUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number;
    serviceId?: IntFieldUpdateOperationsInput | number;
    mileage?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ServiceRecordUncheckedUpdateManyWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number;
    serviceId?: IntFieldUpdateOperationsInput | number;
    mileage?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type MileageHistoryUpdateWithoutVehicleInput = {
    mileage?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MileageHistoryUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number;
    mileage?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MileageHistoryUncheckedUpdateManyWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number;
    mileage?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ServiceCreateManyIconInput = {
    id?: number;
    serviceName: string;
  };

  export type ServiceRuleCreateManyIconInput = {
    id?: number;
    serviceName: string;
    frequencyKm: number;
  };

  export type ServiceUpdateWithoutIconInput = {
    serviceName?: StringFieldUpdateOperationsInput | string;
    records?: ServiceRecordUpdateManyWithoutServiceNestedInput;
  };

  export type ServiceUncheckedUpdateWithoutIconInput = {
    id?: IntFieldUpdateOperationsInput | number;
    serviceName?: StringFieldUpdateOperationsInput | string;
    records?: ServiceRecordUncheckedUpdateManyWithoutServiceNestedInput;
  };

  export type ServiceUncheckedUpdateManyWithoutIconInput = {
    id?: IntFieldUpdateOperationsInput | number;
    serviceName?: StringFieldUpdateOperationsInput | string;
  };

  export type ServiceRuleUpdateWithoutIconInput = {
    serviceName?: StringFieldUpdateOperationsInput | string;
    frequencyKm?: IntFieldUpdateOperationsInput | number;
  };

  export type ServiceRuleUncheckedUpdateWithoutIconInput = {
    id?: IntFieldUpdateOperationsInput | number;
    serviceName?: StringFieldUpdateOperationsInput | string;
    frequencyKm?: IntFieldUpdateOperationsInput | number;
  };

  export type ServiceRuleUncheckedUpdateManyWithoutIconInput = {
    id?: IntFieldUpdateOperationsInput | number;
    serviceName?: StringFieldUpdateOperationsInput | string;
    frequencyKm?: IntFieldUpdateOperationsInput | number;
  };

  export type ServiceRecordCreateManyServiceInput = {
    id?: number;
    vehicleId: number;
    mileage: number;
    date?: Date | string;
    notes?: string | null;
  };

  export type ServiceRecordUpdateWithoutServiceInput = {
    mileage?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    vehicle?: VehicleUpdateOneRequiredWithoutServiceRecordsNestedInput;
  };

  export type ServiceRecordUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number;
    vehicleId?: IntFieldUpdateOperationsInput | number;
    mileage?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ServiceRecordUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number;
    vehicleId?: IntFieldUpdateOperationsInput | number;
    mileage?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
