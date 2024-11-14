/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface SeguroMedicoInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "cancelarSeguro"
      | "consultarHistorialRenovaciones"
      | "crearSeguro"
      | "esSeguroActivo"
      | "renovarSeguro"
      | "seguros"
      | "tiempoRestante"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelarSeguro",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "consultarHistorialRenovaciones",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "crearSeguro",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "esSeguroActivo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renovarSeguro",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "seguros",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tiempoRestante",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelarSeguro",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "consultarHistorialRenovaciones",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "crearSeguro",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "esSeguroActivo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renovarSeguro",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "seguros", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tiempoRestante",
    data: BytesLike
  ): Result;
}

export interface SeguroMedico extends BaseContract {
  connect(runner?: ContractRunner | null): SeguroMedico;
  waitForDeployment(): Promise<this>;

  interface: SeguroMedicoInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  cancelarSeguro: TypedContractMethod<
    [_id: BigNumberish],
    [void],
    "nonpayable"
  >;

  consultarHistorialRenovaciones: TypedContractMethod<
    [_id: BigNumberish],
    [bigint[]],
    "view"
  >;

  crearSeguro: TypedContractMethod<
    [_id: BigNumberish, _duracion: BigNumberish],
    [void],
    "nonpayable"
  >;

  esSeguroActivo: TypedContractMethod<[_id: BigNumberish], [boolean], "view">;

  renovarSeguro: TypedContractMethod<
    [_id: BigNumberish, _duracion: BigNumberish],
    [void],
    "nonpayable"
  >;

  seguros: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, boolean, bigint] & {
        fechaInicio: bigint;
        fechaVencimiento: bigint;
        activo: boolean;
        id: bigint;
      }
    ],
    "view"
  >;

  tiempoRestante: TypedContractMethod<[_id: BigNumberish], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "cancelarSeguro"
  ): TypedContractMethod<[_id: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "consultarHistorialRenovaciones"
  ): TypedContractMethod<[_id: BigNumberish], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "crearSeguro"
  ): TypedContractMethod<
    [_id: BigNumberish, _duracion: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "esSeguroActivo"
  ): TypedContractMethod<[_id: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "renovarSeguro"
  ): TypedContractMethod<
    [_id: BigNumberish, _duracion: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "seguros"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, boolean, bigint] & {
        fechaInicio: bigint;
        fechaVencimiento: bigint;
        activo: boolean;
        id: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "tiempoRestante"
  ): TypedContractMethod<[_id: BigNumberish], [bigint], "view">;

  filters: {};
}