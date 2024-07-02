import TimeUtils from '@src/utils/time';

describe('convertISOtoTimestamp', () => {
  it('should accept ISO string and then return timestamp format value', () => {
    // Arrange
    const isoString = '05 October 2024 14:48 UTC';
    const expectedTimestamp = new Date(isoString).getTime();

    // Assert
    expect(TimeUtils.convertISOtoTimestamp(isoString)).toBe(expectedTimestamp);
  });

  it('should return NaN for an invalid ISO string', () => {
    // Arrange
    const invalidISO = 'invalid-string';

    // Assert
    expect(TimeUtils.convertISOtoTimestamp(invalidISO)).toBeNaN();
  });

  it('should return NaN for an empty string', () => {
    // Arrange
    const emptyString = '';

    // Assert
    expect(TimeUtils.convertISOtoTimestamp(emptyString)).toBeNaN();
  });

});
