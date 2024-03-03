//if pattern is false, only transcription style '[]' check
export default function useValidationOfWords(pattern, valueOfInput) {
  let result;
  if (pattern === false) {
    const validateParams = {
      inputError: false,
      value: valueOfInput,
      transcriptionError: false,
    };
    if (
      valueOfInput[0] !== "[" ||
      valueOfInput[valueOfInput.length - 1] !== "]"
    ) {
      validateParams.transcriptionError = true;
    } else {
      validateParams.transcriptionError = false;
    }
    return validateParams;
  } else {
    result = pattern.test(valueOfInput);
    const validateParams = {
      inputError: !result,
      value: valueOfInput,
      transcriptionError: false,
    };
    return validateParams;
  }
}
