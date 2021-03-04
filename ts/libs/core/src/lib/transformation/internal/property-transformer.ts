import { TransformFnParams, TransformationType } from 'class-transformer';
import { getSlocRuntimeOrThrow } from '../../runtime/public/sloc-runtime/sloc-runtime';
import { Constructor } from '../../util';

/**
 * This provides a wrapper around the transformation logic required by `class-transformer` and integrates it with the `SlocTransformationService`.
 */
export class PropertyTransformer<T> {

    constructor(private slocType: Constructor<T>) {}

    /**
     * Transform method called by `class-transformer`
     *
     * @param transformParams The transformation parameters provided by class-transformer.
     * This object has four properties:
     *  * `value` The property value before the transformation.
     *  * `key` The name of the property within the source object.
     *  * `obj` The transformation source object.
     *  * `type` The transformation type.
     *
     * @returns The transformed object.
     *
     * @see https://github.com/typestack/class-transformer#additional-data-transformation
     */
    transform(transformParams: TransformFnParams): any {
        const runtime = getSlocRuntimeOrThrow();
        switch (transformParams.type) {
            case TransformationType.CLASS_TO_PLAIN:
                return runtime.transformer.transformToOrchestratorPlainObject(transformParams.value);
            case TransformationType.PLAIN_TO_CLASS:
                return runtime.transformer.transformToSlocObject(this.slocType, transformParams.value);
            default:
                throw new Error(`Unexpected tranformation type: ${transformParams.type}`);
        }
    }
}
