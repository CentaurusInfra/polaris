import { TypeFn } from '../util';
import { ObjectKind } from './object-kind';
import { SloTarget } from './slo-target';

/**
 * Identifies an elasticity strategy kind/type.
 *
 * @param O The type of input data for the elasticity strategy (`ElasticityStrategySpec.sloOutputParams`). This must
 * match the type of output data of the SLO.
 * @param T (optional) The type of `SloTarget` that the elasticity strategy can operate on.
 */
export class ElasticityStrategyKind<O, T extends SloTarget = SloTarget> extends ObjectKind {

    /**
     * This property is needed to trigger type checking for the `O` parameter
     * when assigning an `ElasticityStrategyKind` to an `SloMappingSpec`.
     * DO NOT use this property in your code.
     *
     * It cannot be a private property, because then TypeScript would omit the type
     * in the .d.ts file that is shipped in the npm package.
     *
     * @private
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    protected __sloOutputType: TypeFn<O>;

    /**
     * This property is needed to trigger type checking for the `T` parameter
     * when assigning an `ElasticityStrategyKind` to an `SloMappingSpec`.
     * DO NOT use this property in your code.
     *
     * It cannot be a private property, because then TypeScript would omit the type
     * in the .d.ts file that is shipped in the npm package.
     *
     * @private
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    protected __sloTargetType: TypeFn<T>;

    constructor(initData?: Partial<ElasticityStrategyKind<O>>) {
        super(initData);
    }

}
