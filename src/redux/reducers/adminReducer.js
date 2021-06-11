
const initialState = {
    sidebarShow: 'responsive'
  }
  
  export const changeToggleSlider = (state = initialState, { type, ...rest }) => {
    switch (type) {
      case 'set':
        return {...state, ...rest }
      default:
        return state
    }
  }

  