type ValidationOptions = {
  allowNull?: boolean;
  allowUndefined?: boolean;
  allowEmptyString?: boolean;
  allowZero?: boolean;
};

const isValidValue = (value: any, options: ValidationOptions = {}): boolean => {
  const {
    allowNull = false,
    allowUndefined = false,
    allowEmptyString = false,
    allowZero = true,
  } = options;

  // Handle null and undefined
  if (value === null) return allowNull;
  if (value === undefined) return allowUndefined;

  // Handle empty strings
  if (typeof value === 'string' && value.trim() === '') {
    return allowEmptyString;
  }

  // Handle zero
  if (typeof value === 'number' && value === 0) {
    return allowZero;
  }

  // Handle arrays
  if (Array.isArray(value)) {
    return value.length > 0;
  }

  // Handle objects
  if (typeof value === 'object') {
    return Object.keys(value).length > 0;
  }

  return true;
}

const hasValidProperties = <T extends object> (
  obj: T,
  options: ValidationOptions = {},
): { isValid: boolean; invalidProps: string[] } => {
  const invalidProps: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    if (!isValidValue(value, options)) {
      invalidProps.push(key);
    }
  }

  return {
    isValid: invalidProps.length === 0,
    invalidProps,
  };
};

export default hasValidProperties;
