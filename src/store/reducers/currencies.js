import {
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_FAILED,
  SET_CURRENCY_TYPE,
} from "../actions/types";

const localStorageCurrency = JSON.parse(
  localStorage.getItem("selectedCurrency")
);

const initialState = {
  currencies: [],
  currencyType: localStorageCurrency ? localStorageCurrency : "$",
  loading: false,
  error: null,
};

function currenciesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENCIES_SUCCESS:
      return {
        ...state,
        currencies: action.payload,
        loading: false,
        error: null,
      };
    case GET_CURRENCIES_FAILED:
      return {
        ...state,
        currencies: [],
        loading: false,
        error: action.payload,
      };
    case SET_CURRENCY_TYPE:
      let returnValue = {
        ...state,
        currencyType: action.payload,
      };
      localStorage.setItem(
        "selectedCurrency",
        JSON.stringify(returnValue.currencyType)
      );
      return returnValue;
    default:
      return state;
  }
}

export default currenciesReducer;
