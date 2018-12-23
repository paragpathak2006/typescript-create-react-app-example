import PropertyNormalizerUtility from './PropertyNormalizerUtility';

describe('PropertyNormalizerUtility', () => {
    describe('normalize', () => {
        it('should normalize', () => {
            const expectedResult: any = {
                propertyName: null,
                permissionCheck: [
                    {
                        propertyName: null,
                        kebabCase: null,
                        snakeCase: null,
                        pascalCase: null,
                        camelCase: null,
                        upperCase: null,
                    },
                ],
            };
            const actualResult: any = PropertyNormalizerUtility.normalize({
                '@propertyName': 'null',
                permissionCheck: [
                    {
                        '@propertyName': null,
                        'kebab-case': null,
                        snake_case: null,
                        PascalCase: null,
                        camelCase: null,
                        UPPER_CASE: null,
                    },
                ],
            });

            expect(actualResult).toEqual(expectedResult);
        });
    });
});
