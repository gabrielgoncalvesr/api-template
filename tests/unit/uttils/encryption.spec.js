const { cryptPassword, comparePassword, generateToken } = require('../../../utils/encryption');

describe('Encryption Tests', () => {

    const password = "AAAAAAAAA";

    it('should be crypt a password', async () => {
        await cryptPassword(password, async (hash) => {
            expect(typeof hash).toBe('string');
        });
    });

    it('should be return error in encryption', async () => {
        await cryptPassword("", async (hash) => {
            expect(hash).toBe(false);
        });
    });

    it('should be correct password comparation', async () => {
        await cryptPassword(password, async (hash) => {
            await comparePassword(password, hash, (valid) => {
                expect(valid).toBe(true);
            });
        });
    });

    it('should be incorrect password comparation', async () => {
        await cryptPassword(password, async (hash) => {
            await comparePassword("aaa", hash, (valid) => {
                expect(valid).toBe(false);
            });
        });
    });

    it('should be generate token', async () => {
        const token = generateToken();
        expect(typeof token).toBe('string');
    });
})