import { HelloWorld } from '../../dist/main';

describe("Basic Tests", () =>
{
    test("Should be defined !", () => {
        expect(HelloWorld).toBeDefined();
    });
});
