const { cryptPassword, comparePassword, generateToken } = require('../../../utils/encryption');
const { validateCPF } = require('../../../utils/functions');

describe('Functions Util Tests', () => {
    it('should be a valid CPF', async () => {
        const validCPF = validateCPF("14226111087");
        expect(validCPF).toBe(true);
    });

    it('should be a nonexistent CPF', async () => {
        const validCPF = validateCPF("00000000000");
        expect(validCPF).toBe(false);
    });

    it('should be a invalid CPF', async () => {
        const validCPF = validateCPF("01000010010");
        expect(validCPF).toBe(false);
    });

    it('should be a empty CPF', async () => {
        const validCPF = validateCPF("");
        expect(validCPF).toBe(false);
    });
})