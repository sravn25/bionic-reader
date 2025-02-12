/**
 * Converts plain text into bionic reading format by bolding the initial part of each word
 *
 * @param {string} text - Input text for conversion
 * @param {number} [boldLength=3] - Number of characters to bold at the start of each word
 * @returns {string} - Converted text in HTML
 */

const bionicConvert = (text: string, boldLength: number = 3): string => {
  return text
    .split(" ")
    .map((word) => {
      if (word.length <= boldLength) {
        return `<strong>${word}</strong>`;
      }
      const boldPart = word.slice(0, boldLength);
      const normalPart = word.slice(boldLength);
      return `<strong>${boldPart}</strong>${normalPart}`;
    })
    .join(" ");
};

export default bionicConvert;
