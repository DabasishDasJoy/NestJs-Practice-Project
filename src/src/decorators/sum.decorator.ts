export function SumDec(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]): number {
        const inc = originalMethod.apply(this, args) + 1;
        return inc;
    }

    console.log(originalMethod);

    return descriptor;
}