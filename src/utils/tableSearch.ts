// import helpers
import isEmpty from './isEmpty'

// Helper function for array searching
const tableSearch  = (
  arr: { id: number | string, [key: string]: any }[] = [], 
  keys: { title: string, key: string, search?: 'includes' | 'starts-with' }[], 
  value: string = ''
): { id: number | string, [key: string]: any }[] => {

  if (!isEmpty(arr) && !isEmpty(keys)) {
    return arr.filter((item) => {
      return keys.some((key) => {
        if (key.search === 'includes') {
          return item[key.key].toLowerCase().includes(value.toLowerCase());
        } else if (key.search === 'starts-with') {
          return item[key.key].toLowerCase().startsWith(value.toLowerCase());
        }
      })
    })
  } else {
    return [];
  }
}

export default tableSearch;