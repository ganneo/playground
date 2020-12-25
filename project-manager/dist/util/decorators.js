export function AutoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const newDescriptior = {
        configurable: descriptor.configurable,
        get() {
            return originalMethod.bind(this);
        },
    };
    return newDescriptior;
}
//# sourceMappingURL=Decorators.js.map