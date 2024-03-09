export const _storeData = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item))
}

export const _clearData = (key) => {
  localStorage.removeItem(key)
}

export const _retrieveData = (key) => {
  const value = localStorage.getItem(key)
  if (value != null && value != undefined) {
    return JSON.parse(value)
  } else {
    return null
  }
}

export const _clear = () => {
  localStorage.clear()
}

export const ISDARK = "isDark"
