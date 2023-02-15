import { getSdk as defaultGqlSdk } from '#gql/default'
export { BigIntFilter, BooleanFilter, DateFilter, DatetimeFilter, FloatFilter, IdFilter, IntFilter, StringFilter, TimeFilter, UuidFilter, Access_Method_UsageFilter, City_DetailsFilter, City_DetailsInsertInput, City_DetailsOrderBy, City_DetailsUpdateInput, Daily_Rate_Payment_Method_TypesFilter, Daily_Rate_Payment_Method_TypesInsertInput, Daily_Rate_Payment_Method_TypesOrderBy, Daily_Rate_Payment_Method_TypesUpdateInput, Daily_Rate_Payment_MethodsFilter, Daily_Rate_Payment_MethodsInsertInput, Daily_Rate_Payment_MethodsOrderBy, Daily_Rate_Payment_MethodsUpdateInput, Daily_RatesFilter, Daily_RatesInsertInput, Daily_RatesOrderBy, Daily_RatesUpdateInput, Daily_Rates_Time_AvailabilitiesFilter, Daily_Rates_Time_AvailabilitiesInsertInput, Daily_Rates_Time_AvailabilitiesOrderBy, Daily_Rates_Time_AvailabilitiesUpdateInput, External_ContactsFilter, External_ContactsInsertInput, External_ContactsOrderBy, External_ContactsUpdateInput, Internal_DepartmentsFilter, Internal_DepartmentsInsertInput, Internal_DepartmentsOrderBy, Internal_DepartmentsUpdateInput, Internal_MembersFilter, Internal_MembersInsertInput, Internal_MembersOrderBy, Internal_MembersUpdateInput, Lot_TypeFilter, Monthly_RatesFilter, Monthly_RatesInsertInput, Monthly_RatesOrderBy, Monthly_RatesUpdateInput, Monthly_Rates_AccessFilter, Monthly_Rates_AccessInsertInput, Monthly_Rates_AccessOrderBy, Monthly_Rates_AccessUpdateInput, Monthly_Rates_Access_Activation_ExternalFilter, Monthly_Rates_Access_Activation_ExternalInsertInput, Monthly_Rates_Access_Activation_ExternalOrderBy, Monthly_Rates_Access_Activation_ExternalUpdateInput, Monthly_Rates_Access_Activation_InternalFilter, Monthly_Rates_Access_Activation_InternalInsertInput, Monthly_Rates_Access_Activation_InternalOrderBy, Monthly_Rates_Access_Activation_InternalUpdateInput, Monthly_Rates_Access_PriceFilter, Monthly_Rates_Access_PriceInsertInput, Monthly_Rates_Access_PriceOrderBy, Monthly_Rates_Access_PriceUpdateInput, Monthly_Rates_Confirmation_ExternalFilter, Monthly_Rates_Confirmation_ExternalInsertInput, Monthly_Rates_Confirmation_ExternalOrderBy, Monthly_Rates_Confirmation_ExternalUpdateInput, Monthly_Rates_Confirmation_InternalFilter, Monthly_Rates_Confirmation_InternalInsertInput, Monthly_Rates_Confirmation_InternalOrderBy, Monthly_Rates_Confirmation_InternalUpdateInput, Monthly_Rates_Time_AvailabilitiesFilter, Monthly_Rates_Time_AvailabilitiesInsertInput, Monthly_Rates_Time_AvailabilitiesOrderBy, Monthly_Rates_Time_AvailabilitiesUpdateInput, Monthly_Rates_TypeFilter, Monthly_Rates_TypeInsertInput, Monthly_Rates_TypeOrderBy, Monthly_Rates_TypeUpdateInput, Parking_Lots_Access_MethodsFilter, Parking_Lots_Access_MethodsInsertInput, Parking_Lots_Access_MethodsOrderBy, Parking_Lots_Access_MethodsUpdateInput, Parking_Lots_Access_TypesFilter, Parking_Lots_Access_TypesInsertInput, Parking_Lots_Access_TypesOrderBy, Parking_Lots_Access_TypesUpdateInput, Parking_Lots_AddressFilter, Parking_Lots_AddressInsertInput, Parking_Lots_AddressOrderBy, Parking_Lots_AddressUpdateInput, Parking_Lots_Address_Time_AvailabilitiesFilter, Parking_Lots_Address_Time_AvailabilitiesInsertInput, Parking_Lots_Address_Time_AvailabilitiesOrderBy, Parking_Lots_Address_Time_AvailabilitiesUpdateInput, Parking_Lots_Contact_TypesFilter, Parking_Lots_Contact_TypesInsertInput, Parking_Lots_Contact_TypesOrderBy, Parking_Lots_Contact_TypesUpdateInput, Parking_Lots_External_ContactsFilter, Parking_Lots_External_ContactsInsertInput, Parking_Lots_External_ContactsOrderBy, Parking_Lots_External_ContactsUpdateInput, Parking_Lots_GeneralFilter, Parking_Lots_GeneralInsertInput, Parking_Lots_GeneralOrderBy, Parking_Lots_GeneralUpdateInput, Parking_Lots_Internal_ContactsFilter, Parking_Lots_Internal_ContactsInsertInput, Parking_Lots_Internal_ContactsOrderBy, Parking_Lots_Internal_ContactsUpdateInput, Parking_Lots_LevelsFilter, Request_MethodsFilter, Spatial_Ref_SysFilter, Spatial_Ref_SysOrderBy, Work_ConditionFilter, GetAddressTimesQueryVariables, GetAddressTimesQuery, GetCitiesQueryVariables, GetCitiesQuery, GetLotsQueryVariables, GetLotsQuery } from "#gql/default";
declare module '#gql' {
  type GqlClients = 'default'
  type GqlOps = 'getAddressTimes' | 'getCities' | 'getLots'
  const GqClientOps = {"default":["getAddressTimes","getCities","getLots"]}
  const GqlSdks = {
    default: defaultGqlSdk,
  }
  export const GqlGetAddressTimes: (...params: Parameters<GqlSdkFuncs['getAddressTimes']>) => ReturnType<GqlSdkFuncs['getAddressTimes']>
  export const GqlGetCities: (...params: Parameters<GqlSdkFuncs['getCities']>) => ReturnType<GqlSdkFuncs['getCities']>
  export const GqlGetLots: (...params: Parameters<GqlSdkFuncs['getLots']>) => ReturnType<GqlSdkFuncs['getLots']>
  type GqlSdkFuncs = ReturnType<typeof defaultGqlSdk>
}