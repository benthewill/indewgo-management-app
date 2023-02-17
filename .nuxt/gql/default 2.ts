import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
  Time: any;
  UUID: any;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  neq?: InputMaybe<Scalars['BigInt']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<Scalars['Date']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']>;
  gt?: InputMaybe<Scalars['Datetime']>;
  gte?: InputMaybe<Scalars['Datetime']>;
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']>;
  lte?: InputMaybe<Scalars['Datetime']>;
  neq?: InputMaybe<Scalars['Datetime']>;
};

export enum FilterIs {
  NOT_NULL = 'NOT_NULL',
  NULL = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<Scalars['Time']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  neq?: InputMaybe<Scalars['Time']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<Scalars['UUID']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']>;
};

export enum Access_Method_Usage {
  Hang = 'hang',
  Input = 'input',
  Press = 'press',
  Tap = 'tap'
}

/** Boolean expression comparing fields on type "access_method_usage" */
export type Access_Method_UsageFilter = {
  eq?: InputMaybe<Access_Method_Usage>;
  in?: InputMaybe<Array<Access_Method_Usage>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Access_Method_Usage>;
};

export type City_DetailsFilter = {
  additional_tax?: InputMaybe<StringFilter>;
  city_id?: InputMaybe<IntFilter>;
  city_name?: InputMaybe<StringFilter>;
  goods_and_services_tax?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  patrol_jurisdiction?: InputMaybe<StringFilter>;
  provincial_transport_tax?: InputMaybe<StringFilter>;
};

export type City_DetailsInsertInput = {
  additional_tax?: InputMaybe<Scalars['String']>;
  city_id?: InputMaybe<Scalars['Int']>;
  city_name?: InputMaybe<Scalars['String']>;
  goods_and_services_tax?: InputMaybe<Scalars['String']>;
  patrol_jurisdiction?: InputMaybe<Scalars['String']>;
  provincial_transport_tax?: InputMaybe<Scalars['String']>;
};

export type City_DetailsOrderBy = {
  additional_tax?: InputMaybe<OrderByDirection>;
  city_id?: InputMaybe<OrderByDirection>;
  city_name?: InputMaybe<OrderByDirection>;
  goods_and_services_tax?: InputMaybe<OrderByDirection>;
  patrol_jurisdiction?: InputMaybe<OrderByDirection>;
  provincial_transport_tax?: InputMaybe<OrderByDirection>;
};

export type City_DetailsUpdateInput = {
  additional_tax?: InputMaybe<Scalars['String']>;
  city_id?: InputMaybe<Scalars['Int']>;
  city_name?: InputMaybe<Scalars['String']>;
  goods_and_services_tax?: InputMaybe<Scalars['String']>;
  patrol_jurisdiction?: InputMaybe<Scalars['String']>;
  provincial_transport_tax?: InputMaybe<Scalars['String']>;
};

export type Daily_Rate_Payment_Method_TypesFilter = {
  nodeId?: InputMaybe<IdFilter>;
  payment_method_type_id?: InputMaybe<IntFilter>;
  payment_method_type_name?: InputMaybe<StringFilter>;
};

export type Daily_Rate_Payment_Method_TypesInsertInput = {
  payment_method_type_name?: InputMaybe<Scalars['String']>;
};

export type Daily_Rate_Payment_Method_TypesOrderBy = {
  payment_method_type_id?: InputMaybe<OrderByDirection>;
  payment_method_type_name?: InputMaybe<OrderByDirection>;
};

export type Daily_Rate_Payment_Method_TypesUpdateInput = {
  payment_method_type_name?: InputMaybe<Scalars['String']>;
};

export type Daily_Rate_Payment_MethodsFilter = {
  daily_rate_id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  payment_method_id?: InputMaybe<IntFilter>;
  payment_method_type_id?: InputMaybe<IntFilter>;
};

export type Daily_Rate_Payment_MethodsInsertInput = {
  daily_rate_id?: InputMaybe<Scalars['Int']>;
  payment_method_type_id?: InputMaybe<Scalars['Int']>;
};

export type Daily_Rate_Payment_MethodsOrderBy = {
  daily_rate_id?: InputMaybe<OrderByDirection>;
  payment_method_id?: InputMaybe<OrderByDirection>;
  payment_method_type_id?: InputMaybe<OrderByDirection>;
};

export type Daily_Rate_Payment_MethodsUpdateInput = {
  daily_rate_id?: InputMaybe<Scalars['Int']>;
  payment_method_type_id?: InputMaybe<Scalars['Int']>;
};

export type Daily_RatesFilter = {
  address_id?: InputMaybe<IntFilter>;
  base_price?: InputMaybe<StringFilter>;
  daily_rate_id?: InputMaybe<IntFilter>;
  duration?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
};

export type Daily_RatesInsertInput = {
  address_id?: InputMaybe<Scalars['Int']>;
  base_price?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['String']>;
  rate_allowance?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Daily_RatesOrderBy = {
  address_id?: InputMaybe<OrderByDirection>;
  base_price?: InputMaybe<OrderByDirection>;
  daily_rate_id?: InputMaybe<OrderByDirection>;
  duration?: InputMaybe<OrderByDirection>;
};

export type Daily_RatesUpdateInput = {
  address_id?: InputMaybe<Scalars['Int']>;
  base_price?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['String']>;
  rate_allowance?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Daily_Rates_Time_AvailabilitiesFilter = {
  available_from?: InputMaybe<TimeFilter>;
  available_to?: InputMaybe<TimeFilter>;
  daily_rate_availability_id?: InputMaybe<IntFilter>;
  daily_rate_id?: InputMaybe<IntFilter>;
  day_of_the_week?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
};

export type Daily_Rates_Time_AvailabilitiesInsertInput = {
  available_from?: InputMaybe<Scalars['Time']>;
  available_to?: InputMaybe<Scalars['Time']>;
  daily_rate_id?: InputMaybe<Scalars['Int']>;
  day_of_the_week?: InputMaybe<Scalars['Int']>;
};

export type Daily_Rates_Time_AvailabilitiesOrderBy = {
  available_from?: InputMaybe<OrderByDirection>;
  available_to?: InputMaybe<OrderByDirection>;
  daily_rate_availability_id?: InputMaybe<OrderByDirection>;
  daily_rate_id?: InputMaybe<OrderByDirection>;
  day_of_the_week?: InputMaybe<OrderByDirection>;
};

export type Daily_Rates_Time_AvailabilitiesUpdateInput = {
  available_from?: InputMaybe<Scalars['Time']>;
  available_to?: InputMaybe<Scalars['Time']>;
  daily_rate_id?: InputMaybe<Scalars['Int']>;
  day_of_the_week?: InputMaybe<Scalars['Int']>;
};

export type External_ContactsFilter = {
  additional_details?: InputMaybe<StringFilter>;
  contact_email?: InputMaybe<StringFilter>;
  contact_ext?: InputMaybe<StringFilter>;
  contact_phone?: InputMaybe<StringFilter>;
  external_contact_id?: InputMaybe<IntFilter>;
  first_name?: InputMaybe<StringFilter>;
  last_name?: InputMaybe<StringFilter>;
  middle_name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
};

export type External_ContactsInsertInput = {
  additional_details?: InputMaybe<Scalars['String']>;
  contact_email?: InputMaybe<Scalars['String']>;
  contact_ext?: InputMaybe<Scalars['String']>;
  contact_phone?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  middle_name?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type External_ContactsOrderBy = {
  additional_details?: InputMaybe<OrderByDirection>;
  contact_email?: InputMaybe<OrderByDirection>;
  contact_ext?: InputMaybe<OrderByDirection>;
  contact_phone?: InputMaybe<OrderByDirection>;
  external_contact_id?: InputMaybe<OrderByDirection>;
  first_name?: InputMaybe<OrderByDirection>;
  last_name?: InputMaybe<OrderByDirection>;
  middle_name?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
};

export type External_ContactsUpdateInput = {
  additional_details?: InputMaybe<Scalars['String']>;
  contact_email?: InputMaybe<Scalars['String']>;
  contact_ext?: InputMaybe<Scalars['String']>;
  contact_phone?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  middle_name?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Internal_DepartmentsFilter = {
  department_id?: InputMaybe<IntFilter>;
  department_name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
};

export type Internal_DepartmentsInsertInput = {
  department_name?: InputMaybe<Scalars['String']>;
};

export type Internal_DepartmentsOrderBy = {
  department_id?: InputMaybe<OrderByDirection>;
  department_name?: InputMaybe<OrderByDirection>;
};

export type Internal_DepartmentsUpdateInput = {
  department_name?: InputMaybe<Scalars['String']>;
};

export type Internal_MembersFilter = {
  contact_email?: InputMaybe<StringFilter>;
  contact_ext?: InputMaybe<StringFilter>;
  contact_phone?: InputMaybe<StringFilter>;
  first_name?: InputMaybe<StringFilter>;
  internal_department_id?: InputMaybe<IntFilter>;
  internal_member_id?: InputMaybe<IntFilter>;
  last_name?: InputMaybe<StringFilter>;
  middle_name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  work_condition?: InputMaybe<Work_ConditionFilter>;
};

export type Internal_MembersInsertInput = {
  contact_email?: InputMaybe<Scalars['String']>;
  contact_ext?: InputMaybe<Scalars['String']>;
  contact_phone?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  internal_department_id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  middle_name?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  work_condition?: InputMaybe<Work_Condition>;
};

export type Internal_MembersOrderBy = {
  contact_email?: InputMaybe<OrderByDirection>;
  contact_ext?: InputMaybe<OrderByDirection>;
  contact_phone?: InputMaybe<OrderByDirection>;
  first_name?: InputMaybe<OrderByDirection>;
  internal_department_id?: InputMaybe<OrderByDirection>;
  internal_member_id?: InputMaybe<OrderByDirection>;
  last_name?: InputMaybe<OrderByDirection>;
  middle_name?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  work_condition?: InputMaybe<OrderByDirection>;
};

export type Internal_MembersUpdateInput = {
  contact_email?: InputMaybe<Scalars['String']>;
  contact_ext?: InputMaybe<Scalars['String']>;
  contact_phone?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  internal_department_id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  middle_name?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  work_condition?: InputMaybe<Work_Condition>;
};

export enum Lot_Type {
  SU = 'SU',
  UG = 'UG'
}

/** Boolean expression comparing fields on type "lot_type" */
export type Lot_TypeFilter = {
  eq?: InputMaybe<Lot_Type>;
  in?: InputMaybe<Array<Lot_Type>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Lot_Type>;
};

export type Monthly_RatesFilter = {
  activation_fee?: InputMaybe<StringFilter>;
  address_id?: InputMaybe<IntFilter>;
  base_price?: InputMaybe<StringFilter>;
  monthly_rate_id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  rate_details?: InputMaybe<StringFilter>;
  rate_hour_from?: InputMaybe<TimeFilter>;
  rate_hour_to?: InputMaybe<TimeFilter>;
  rate_type_id?: InputMaybe<IntFilter>;
};

export type Monthly_RatesInsertInput = {
  activation_fee?: InputMaybe<Scalars['String']>;
  address_id?: InputMaybe<Scalars['Int']>;
  base_price?: InputMaybe<Scalars['String']>;
  clearance_levels?: InputMaybe<Array<InputMaybe<Parking_Lots_Levels>>>;
  clearance_lot_types?: InputMaybe<Array<InputMaybe<Lot_Type>>>;
  rate_allowance?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rate_days?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rate_details?: InputMaybe<Scalars['String']>;
  rate_hour_from?: InputMaybe<Scalars['Time']>;
  rate_hour_to?: InputMaybe<Scalars['Time']>;
  rate_type_id?: InputMaybe<Scalars['Int']>;
};

export type Monthly_RatesOrderBy = {
  activation_fee?: InputMaybe<OrderByDirection>;
  address_id?: InputMaybe<OrderByDirection>;
  base_price?: InputMaybe<OrderByDirection>;
  monthly_rate_id?: InputMaybe<OrderByDirection>;
  rate_details?: InputMaybe<OrderByDirection>;
  rate_hour_from?: InputMaybe<OrderByDirection>;
  rate_hour_to?: InputMaybe<OrderByDirection>;
  rate_type_id?: InputMaybe<OrderByDirection>;
};

export type Monthly_RatesUpdateInput = {
  activation_fee?: InputMaybe<Scalars['String']>;
  address_id?: InputMaybe<Scalars['Int']>;
  base_price?: InputMaybe<Scalars['String']>;
  clearance_levels?: InputMaybe<Array<InputMaybe<Parking_Lots_Levels>>>;
  clearance_lot_types?: InputMaybe<Array<InputMaybe<Lot_Type>>>;
  rate_allowance?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rate_days?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rate_details?: InputMaybe<Scalars['String']>;
  rate_hour_from?: InputMaybe<Scalars['Time']>;
  rate_hour_to?: InputMaybe<Scalars['Time']>;
  rate_type_id?: InputMaybe<Scalars['Int']>;
};

export type Monthly_Rates_AccessFilter = {
  access_method_id?: InputMaybe<IntFilter>;
  monthly_rate_access_id?: InputMaybe<IntFilter>;
  monthly_rate_id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
};

export type Monthly_Rates_AccessInsertInput = {
  access_method_id?: InputMaybe<Scalars['Int']>;
  monthly_rate_id?: InputMaybe<Scalars['Int']>;
};

export type Monthly_Rates_AccessOrderBy = {
  access_method_id?: InputMaybe<OrderByDirection>;
  monthly_rate_access_id?: InputMaybe<OrderByDirection>;
  monthly_rate_id?: InputMaybe<OrderByDirection>;
};

export type Monthly_Rates_AccessUpdateInput = {
  access_method_id?: InputMaybe<Scalars['Int']>;
  monthly_rate_id?: InputMaybe<Scalars['Int']>;
};

export type Monthly_Rates_Access_Activation_ExternalFilter = {
  access_activation_external_id?: InputMaybe<IntFilter>;
  estimated_duration?: InputMaybe<StringFilter>;
  monthly_rate_access_id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  pic_id?: InputMaybe<IntFilter>;
};

export type Monthly_Rates_Access_Activation_ExternalInsertInput = {
  estimated_duration?: InputMaybe<Scalars['String']>;
  monthly_rate_access_id?: InputMaybe<Scalars['Int']>;
  pic_id?: InputMaybe<Scalars['Int']>;
  request_method?: InputMaybe<Array<InputMaybe<Request_Methods>>>;
};

export type Monthly_Rates_Access_Activation_ExternalOrderBy = {
  access_activation_external_id?: InputMaybe<OrderByDirection>;
  estimated_duration?: InputMaybe<OrderByDirection>;
  monthly_rate_access_id?: InputMaybe<OrderByDirection>;
  pic_id?: InputMaybe<OrderByDirection>;
};

export type Monthly_Rates_Access_Activation_ExternalUpdateInput = {
  estimated_duration?: InputMaybe<Scalars['String']>;
  monthly_rate_access_id?: InputMaybe<Scalars['Int']>;
  pic_id?: InputMaybe<Scalars['Int']>;
  request_method?: InputMaybe<Array<InputMaybe<Request_Methods>>>;
};

export type Monthly_Rates_Access_Activation_InternalFilter = {
  access_activation_internal_id?: InputMaybe<IntFilter>;
  estimated_duration?: InputMaybe<StringFilter>;
  monthly_rate_access_id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  pic_id?: InputMaybe<IntFilter>;
};

export type Monthly_Rates_Access_Activation_InternalInsertInput = {
  estimated_duration?: InputMaybe<Scalars['String']>;
  monthly_rate_access_id?: InputMaybe<Scalars['Int']>;
  pic_id?: InputMaybe<Scalars['Int']>;
  request_method?: InputMaybe<Array<InputMaybe<Request_Methods>>>;
};

export type Monthly_Rates_Access_Activation_InternalOrderBy = {
  access_activation_internal_id?: InputMaybe<OrderByDirection>;
  estimated_duration?: InputMaybe<OrderByDirection>;
  monthly_rate_access_id?: InputMaybe<OrderByDirection>;
  pic_id?: InputMaybe<OrderByDirection>;
};

export type Monthly_Rates_Access_Activation_InternalUpdateInput = {
  estimated_duration?: InputMaybe<Scalars['String']>;
  monthly_rate_access_id?: InputMaybe<Scalars['Int']>;
  pic_id?: InputMaybe<Scalars['Int']>;
  request_method?: InputMaybe<Array<InputMaybe<Request_Methods>>>;
};

export type Monthly_Rates_Access_PriceFilter = {
  deposit_price?: InputMaybe<StringFilter>;
  lost_fee?: InputMaybe<StringFilter>;
  monthly_rate_access_id?: InputMaybe<IntFilter>;
  monthly_rate_access_price_id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
};

export type Monthly_Rates_Access_PriceInsertInput = {
  deposit_price?: InputMaybe<Scalars['String']>;
  lost_fee?: InputMaybe<Scalars['String']>;
  monthly_rate_access_id?: InputMaybe<Scalars['Int']>;
};

export type Monthly_Rates_Access_PriceOrderBy = {
  deposit_price?: InputMaybe<OrderByDirection>;
  lost_fee?: InputMaybe<OrderByDirection>;
  monthly_rate_access_id?: InputMaybe<OrderByDirection>;
  monthly_rate_access_price_id?: InputMaybe<OrderByDirection>;
};

export type Monthly_Rates_Access_PriceUpdateInput = {
  deposit_price?: InputMaybe<Scalars['String']>;
  lost_fee?: InputMaybe<Scalars['String']>;
  monthly_rate_access_id?: InputMaybe<Scalars['Int']>;
};

export type Monthly_Rates_Confirmation_ExternalFilter = {
  estimated_duration?: InputMaybe<StringFilter>;
  monthly_rate_id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  pic_id?: InputMaybe<IntFilter>;
  rate_confirmation_external_id?: InputMaybe<IntFilter>;
};

export type Monthly_Rates_Confirmation_ExternalInsertInput = {
  estimated_duration?: InputMaybe<Scalars['String']>;
  monthly_rate_id?: InputMaybe<Scalars['Int']>;
  pic_id?: InputMaybe<Scalars['Int']>;
  request_method?: InputMaybe<Array<InputMaybe<Request_Methods>>>;
};

export type Monthly_Rates_Confirmation_ExternalOrderBy = {
  estimated_duration?: InputMaybe<OrderByDirection>;
  monthly_rate_id?: InputMaybe<OrderByDirection>;
  pic_id?: InputMaybe<OrderByDirection>;
  rate_confirmation_external_id?: InputMaybe<OrderByDirection>;
};

export type Monthly_Rates_Confirmation_ExternalUpdateInput = {
  estimated_duration?: InputMaybe<Scalars['String']>;
  monthly_rate_id?: InputMaybe<Scalars['Int']>;
  pic_id?: InputMaybe<Scalars['Int']>;
  request_method?: InputMaybe<Array<InputMaybe<Request_Methods>>>;
};

export type Monthly_Rates_Confirmation_InternalFilter = {
  estimated_duration?: InputMaybe<StringFilter>;
  monthly_rate_id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  pic_id?: InputMaybe<IntFilter>;
  rate_confirmation_internal_id?: InputMaybe<IntFilter>;
  request_method?: InputMaybe<Request_MethodsFilter>;
};

export type Monthly_Rates_Confirmation_InternalInsertInput = {
  estimated_duration?: InputMaybe<Scalars['String']>;
  monthly_rate_id?: InputMaybe<Scalars['Int']>;
  pic_id?: InputMaybe<Scalars['Int']>;
  request_method?: InputMaybe<Request_Methods>;
};

export type Monthly_Rates_Confirmation_InternalOrderBy = {
  estimated_duration?: InputMaybe<OrderByDirection>;
  monthly_rate_id?: InputMaybe<OrderByDirection>;
  pic_id?: InputMaybe<OrderByDirection>;
  rate_confirmation_internal_id?: InputMaybe<OrderByDirection>;
  request_method?: InputMaybe<OrderByDirection>;
};

export type Monthly_Rates_Confirmation_InternalUpdateInput = {
  estimated_duration?: InputMaybe<Scalars['String']>;
  monthly_rate_id?: InputMaybe<Scalars['Int']>;
  pic_id?: InputMaybe<Scalars['Int']>;
  request_method?: InputMaybe<Request_Methods>;
};

export type Monthly_Rates_TypeFilter = {
  nodeId?: InputMaybe<IdFilter>;
  rate_name?: InputMaybe<StringFilter>;
  rate_type_details?: InputMaybe<StringFilter>;
  rate_type_id?: InputMaybe<IntFilter>;
};

export type Monthly_Rates_TypeInsertInput = {
  rate_name?: InputMaybe<Scalars['String']>;
  rate_type_details?: InputMaybe<Scalars['String']>;
};

export type Monthly_Rates_TypeOrderBy = {
  rate_name?: InputMaybe<OrderByDirection>;
  rate_type_details?: InputMaybe<OrderByDirection>;
  rate_type_id?: InputMaybe<OrderByDirection>;
};

export type Monthly_Rates_TypeUpdateInput = {
  rate_name?: InputMaybe<Scalars['String']>;
  rate_type_details?: InputMaybe<Scalars['String']>;
};

export type Parking_Lots_Access_MethodsFilter = {
  access_type_id?: InputMaybe<IntFilter>;
  lot_access_method_id?: InputMaybe<IntFilter>;
  method_details?: InputMaybe<StringFilter>;
  method_name?: InputMaybe<StringFilter>;
  method_usage?: InputMaybe<Access_Method_UsageFilter>;
  nodeId?: InputMaybe<IdFilter>;
};

export type Parking_Lots_Access_MethodsInsertInput = {
  access_type_id?: InputMaybe<Scalars['Int']>;
  method_details?: InputMaybe<Scalars['String']>;
  method_name?: InputMaybe<Scalars['String']>;
  method_usage?: InputMaybe<Access_Method_Usage>;
};

export type Parking_Lots_Access_MethodsOrderBy = {
  access_type_id?: InputMaybe<OrderByDirection>;
  lot_access_method_id?: InputMaybe<OrderByDirection>;
  method_details?: InputMaybe<OrderByDirection>;
  method_name?: InputMaybe<OrderByDirection>;
  method_usage?: InputMaybe<OrderByDirection>;
};

export type Parking_Lots_Access_MethodsUpdateInput = {
  access_type_id?: InputMaybe<Scalars['Int']>;
  method_details?: InputMaybe<Scalars['String']>;
  method_name?: InputMaybe<Scalars['String']>;
  method_usage?: InputMaybe<Access_Method_Usage>;
};

export type Parking_Lots_Access_TypesFilter = {
  access_name?: InputMaybe<StringFilter>;
  lot_access_id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
};

export type Parking_Lots_Access_TypesInsertInput = {
  access_name?: InputMaybe<Scalars['String']>;
};

export type Parking_Lots_Access_TypesOrderBy = {
  access_name?: InputMaybe<OrderByDirection>;
  lot_access_id?: InputMaybe<OrderByDirection>;
};

export type Parking_Lots_Access_TypesUpdateInput = {
  access_name?: InputMaybe<Scalars['String']>;
};

export type Parking_Lots_AddressFilter = {
  address_id?: InputMaybe<IntFilter>;
  city_id?: InputMaybe<IntFilter>;
  gate_hour_from?: InputMaybe<TimeFilter>;
  gate_hour_to?: InputMaybe<TimeFilter>;
  gated?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  parking_lot_id?: InputMaybe<IntFilter>;
  street_name?: InputMaybe<StringFilter>;
  street_number?: InputMaybe<IntFilter>;
  street_postal_code?: InputMaybe<StringFilter>;
};

export type Parking_Lots_AddressInsertInput = {
  city_id?: InputMaybe<Scalars['Int']>;
  gate_hour_from?: InputMaybe<Scalars['Time']>;
  gate_hour_to?: InputMaybe<Scalars['Time']>;
  gated?: InputMaybe<Scalars['Boolean']>;
  open_days?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  parking_lot_id?: InputMaybe<Scalars['Int']>;
  parking_lot_type?: InputMaybe<Array<InputMaybe<Lot_Type>>>;
  street_name?: InputMaybe<Scalars['String']>;
  street_number?: InputMaybe<Scalars['Int']>;
  street_postal_code?: InputMaybe<Scalars['String']>;
};

export type Parking_Lots_AddressOrderBy = {
  address_id?: InputMaybe<OrderByDirection>;
  city_id?: InputMaybe<OrderByDirection>;
  gate_hour_from?: InputMaybe<OrderByDirection>;
  gate_hour_to?: InputMaybe<OrderByDirection>;
  gated?: InputMaybe<OrderByDirection>;
  parking_lot_id?: InputMaybe<OrderByDirection>;
  street_name?: InputMaybe<OrderByDirection>;
  street_number?: InputMaybe<OrderByDirection>;
  street_postal_code?: InputMaybe<OrderByDirection>;
};

export type Parking_Lots_AddressUpdateInput = {
  city_id?: InputMaybe<Scalars['Int']>;
  gate_hour_from?: InputMaybe<Scalars['Time']>;
  gate_hour_to?: InputMaybe<Scalars['Time']>;
  gated?: InputMaybe<Scalars['Boolean']>;
  open_days?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  parking_lot_id?: InputMaybe<Scalars['Int']>;
  parking_lot_type?: InputMaybe<Array<InputMaybe<Lot_Type>>>;
  street_name?: InputMaybe<Scalars['String']>;
  street_number?: InputMaybe<Scalars['Int']>;
  street_postal_code?: InputMaybe<Scalars['String']>;
};

export type Parking_Lots_Address_Time_AvailabilitiesFilter = {
  address_id?: InputMaybe<IntFilter>;
  address_time_availability_id?: InputMaybe<IntFilter>;
  available_from?: InputMaybe<TimeFilter>;
  available_to?: InputMaybe<TimeFilter>;
  day_of_the_week?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
};

export type Parking_Lots_Address_Time_AvailabilitiesInsertInput = {
  address_id?: InputMaybe<Scalars['Int']>;
  available_from?: InputMaybe<Scalars['Time']>;
  available_to?: InputMaybe<Scalars['Time']>;
  day_of_the_week?: InputMaybe<Scalars['Int']>;
};

export type Parking_Lots_Address_Time_AvailabilitiesOrderBy = {
  address_id?: InputMaybe<OrderByDirection>;
  address_time_availability_id?: InputMaybe<OrderByDirection>;
  available_from?: InputMaybe<OrderByDirection>;
  available_to?: InputMaybe<OrderByDirection>;
  day_of_the_week?: InputMaybe<OrderByDirection>;
};

export type Parking_Lots_Address_Time_AvailabilitiesUpdateInput = {
  address_id?: InputMaybe<Scalars['Int']>;
  available_from?: InputMaybe<Scalars['Time']>;
  available_to?: InputMaybe<Scalars['Time']>;
  day_of_the_week?: InputMaybe<Scalars['Int']>;
};

export type Parking_Lots_Contact_TypesFilter = {
  contact_type_id?: InputMaybe<IntFilter>;
  contact_type_name?: InputMaybe<StringFilter>;
  contact_type_responsibility?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
};

export type Parking_Lots_Contact_TypesInsertInput = {
  contact_type_name?: InputMaybe<Scalars['String']>;
  contact_type_responsibility?: InputMaybe<Scalars['String']>;
};

export type Parking_Lots_Contact_TypesOrderBy = {
  contact_type_id?: InputMaybe<OrderByDirection>;
  contact_type_name?: InputMaybe<OrderByDirection>;
  contact_type_responsibility?: InputMaybe<OrderByDirection>;
};

export type Parking_Lots_Contact_TypesUpdateInput = {
  contact_type_name?: InputMaybe<Scalars['String']>;
  contact_type_responsibility?: InputMaybe<Scalars['String']>;
};

export type Parking_Lots_External_ContactsFilter = {
  contact_id?: InputMaybe<IntFilter>;
  contact_type_id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  parking_lot_external_contact_id?: InputMaybe<IntFilter>;
  parking_lot_id?: InputMaybe<IntFilter>;
};

export type Parking_Lots_External_ContactsInsertInput = {
  contact_id?: InputMaybe<Scalars['Int']>;
  contact_type_id?: InputMaybe<Scalars['Int']>;
  parking_lot_id?: InputMaybe<Scalars['Int']>;
};

export type Parking_Lots_External_ContactsOrderBy = {
  contact_id?: InputMaybe<OrderByDirection>;
  contact_type_id?: InputMaybe<OrderByDirection>;
  parking_lot_external_contact_id?: InputMaybe<OrderByDirection>;
  parking_lot_id?: InputMaybe<OrderByDirection>;
};

export type Parking_Lots_External_ContactsUpdateInput = {
  contact_id?: InputMaybe<Scalars['Int']>;
  contact_type_id?: InputMaybe<Scalars['Int']>;
  parking_lot_id?: InputMaybe<Scalars['Int']>;
};

export type Parking_Lots_GeneralFilter = {
  nodeId?: InputMaybe<IdFilter>;
  parking_lot_id?: InputMaybe<IntFilter>;
  parking_lot_name?: InputMaybe<StringFilter>;
  parking_lot_number?: InputMaybe<IntFilter>;
};

export type Parking_Lots_GeneralInsertInput = {
  parking_lot_name?: InputMaybe<Scalars['String']>;
  parking_lot_number?: InputMaybe<Scalars['Int']>;
};

export type Parking_Lots_GeneralOrderBy = {
  parking_lot_id?: InputMaybe<OrderByDirection>;
  parking_lot_name?: InputMaybe<OrderByDirection>;
  parking_lot_number?: InputMaybe<OrderByDirection>;
};

export type Parking_Lots_GeneralUpdateInput = {
  parking_lot_name?: InputMaybe<Scalars['String']>;
  parking_lot_number?: InputMaybe<Scalars['Int']>;
};

export type Parking_Lots_Internal_ContactsFilter = {
  contact_type_id?: InputMaybe<IntFilter>;
  internal_member_id?: InputMaybe<IntFilter>;
  lot_contact_id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  parking_lot_id?: InputMaybe<IntFilter>;
};

export type Parking_Lots_Internal_ContactsInsertInput = {
  contact_type_id?: InputMaybe<Scalars['Int']>;
  internal_member_id?: InputMaybe<Scalars['Int']>;
  parking_lot_id?: InputMaybe<Scalars['Int']>;
};

export type Parking_Lots_Internal_ContactsOrderBy = {
  contact_type_id?: InputMaybe<OrderByDirection>;
  internal_member_id?: InputMaybe<OrderByDirection>;
  lot_contact_id?: InputMaybe<OrderByDirection>;
  parking_lot_id?: InputMaybe<OrderByDirection>;
};

export type Parking_Lots_Internal_ContactsUpdateInput = {
  contact_type_id?: InputMaybe<Scalars['Int']>;
  internal_member_id?: InputMaybe<Scalars['Int']>;
  parking_lot_id?: InputMaybe<Scalars['Int']>;
};

export enum Parking_Lots_Levels {
  P1 = 'P1',
  P2 = 'P2',
  P3 = 'P3',
  P4 = 'P4',
  P5 = 'P5',
  P6 = 'P6'
}

/** Boolean expression comparing fields on type "parking_lots_levels" */
export type Parking_Lots_LevelsFilter = {
  eq?: InputMaybe<Parking_Lots_Levels>;
  in?: InputMaybe<Array<Parking_Lots_Levels>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Parking_Lots_Levels>;
};

export enum Request_Methods {
  Email = 'email',
  Phone = 'phone'
}

/** Boolean expression comparing fields on type "request_methods" */
export type Request_MethodsFilter = {
  eq?: InputMaybe<Request_Methods>;
  in?: InputMaybe<Array<Request_Methods>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Request_Methods>;
};

export type Spatial_Ref_SysFilter = {
  auth_name?: InputMaybe<StringFilter>;
  auth_srid?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  proj4text?: InputMaybe<StringFilter>;
  srid?: InputMaybe<IntFilter>;
  srtext?: InputMaybe<StringFilter>;
};

export type Spatial_Ref_SysOrderBy = {
  auth_name?: InputMaybe<OrderByDirection>;
  auth_srid?: InputMaybe<OrderByDirection>;
  proj4text?: InputMaybe<OrderByDirection>;
  srid?: InputMaybe<OrderByDirection>;
  srtext?: InputMaybe<OrderByDirection>;
};

export enum Work_Condition {
  Hybrid = 'hybrid',
  Office = 'office',
  Remote = 'remote'
}

/** Boolean expression comparing fields on type "work_condition" */
export type Work_ConditionFilter = {
  eq?: InputMaybe<Work_Condition>;
  in?: InputMaybe<Array<Work_Condition>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Work_Condition>;
};

export type GetCitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCitiesQuery = { city_detailsCollection?: { edges: Array<{ node: { city_name: string, patrol_jurisdiction?: string | null, provincial_transport_tax: string, goods_and_services_tax: string, additional_tax: string } }> } | null };

export type GetLotsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['Cursor']>;
}>;


export type GetLotsQuery = { parking_lots_generalCollection?: { edges: Array<{ node: { parking_lot_name?: string | null, parking_lot_number?: number | null, parking_lot_id: number, parking_lots_addressCollection?: { edges: Array<{ node: { address_id: number, street_number?: number | null, street_name?: string | null, street_postal_code?: string | null, gated?: boolean | null, parking_lot_type?: Array<Lot_Type | null> | null, gate_hour_from?: any | null, gate_hour_to?: any | null, city_details?: { city_name: string } | null, daily_ratesCollection?: { edges: Array<{ node: { duration?: string | null, base_price?: string | null, daily_rates_time_availabilitiesCollection?: { edges: Array<{ node: { day_of_the_week: number, available_from?: any | null, available_to?: any | null } }> } | null, daily_rate_payment_methodsCollection?: { edges: Array<{ node: { daily_rate_payment_method_types?: { payment_method_type_name?: string | null } | null } }> } | null } }> } | null, monthly_ratesCollection?: { edges: Array<{ node: { base_price?: string | null, activation_fee?: string | null, rate_hour_from?: any | null, rate_hour_to?: any | null, clearance_levels?: Array<Parking_Lots_Levels | null> | null, clearance_lot_types?: Array<Lot_Type | null> | null, rate_allowance?: Array<string | null> | null, rate_days?: Array<number | null> | null, monthly_rates_type?: { rate_name?: string | null, rate_type_details?: string | null } | null, monthly_rates_confirmation_externalCollection?: { edges: Array<{ node: { request_method?: Array<Request_Methods | null> | null, external_contacts?: { first_name?: string | null, middle_name?: string | null, last_name?: string | null, title?: string | null, contact_email?: string | null } | null } }> } | null, monthly_rates_confirmation_internalCollection?: { edges: Array<{ node: { request_method?: Request_Methods | null, estimated_duration?: string | null, internal_members?: { first_name?: string | null, middle_name?: string | null, last_name?: string | null, title?: string | null, contact_email?: string | null } | null } }> } | null, monthly_rates_accessCollection?: { edges: Array<{ node: { access_method_id: number, parking_lots_access_methods?: { method_name: string, method_usage?: Access_Method_Usage | null, method_details?: string | null, parking_lots_access_types?: { access_name: string } | null } | null, monthly_rates_access_activation_internalCollection?: { edges: Array<{ node: { request_method?: Array<Request_Methods | null> | null, estimated_duration?: string | null, internal_members?: { first_name?: string | null, middle_name?: string | null, last_name?: string | null, title?: string | null, contact_email?: string | null, internal_departments?: { department_name: string } | null } | null } }> } | null, monthly_rates_access_activation_externalCollection?: { edges: Array<{ node: { request_method?: Array<Request_Methods | null> | null, estimated_duration?: string | null, external_contacts?: { additional_details?: string | null, first_name?: string | null, middle_name?: string | null, last_name?: string | null, title?: string | null, contact_email?: string | null } | null } }> } | null } }> } | null } }> } | null } }> } | null, parking_lots_external_contactsCollection?: { edges: Array<{ node: { parking_lots_contact_types?: { contact_type_name?: string | null, contact_type_responsibility?: string | null } | null, external_contacts?: { first_name?: string | null, middle_name?: string | null, last_name?: string | null, title?: string | null, contact_email?: string | null, contact_phone?: string | null, contact_ext?: string | null } | null } }> } | null, parking_lots_internal_contactsCollection?: { edges: Array<{ node: { parking_lots_contact_types?: { contact_type_name?: string | null, contact_type_responsibility?: string | null } | null, internal_members?: { first_name?: string | null, middle_name?: string | null, last_name?: string | null, title?: string | null, contact_email?: string | null, contact_phone?: string | null, contact_ext?: string | null } | null } }> } | null } }>, pageInfo: { endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null };


export const GetCitiesDocument = gql`
    query getCities {
  city_detailsCollection {
    edges {
      node {
        city_name
        patrol_jurisdiction
        provincial_transport_tax
        goods_and_services_tax
        additional_tax
      }
    }
  }
}
    `;
export const GetLotsDocument = gql`
    query getLots($after: Cursor) {
  parking_lots_generalCollection(
    after: $after
    orderBy: {parking_lot_number: AscNullsFirst}
  ) {
    edges {
      node {
        parking_lot_name
        parking_lot_number
        parking_lot_id
        parking_lots_addressCollection {
          edges {
            node {
              address_id
              street_number
              street_name
              street_postal_code
              gated
              parking_lot_type
              gate_hour_from
              gate_hour_to
              city_details {
                city_name
              }
              daily_ratesCollection {
                edges {
                  node {
                    duration
                    base_price
                    daily_rates_time_availabilitiesCollection {
                      edges {
                        node {
                          day_of_the_week
                          available_from
                          available_to
                        }
                      }
                    }
                    daily_rate_payment_methodsCollection {
                      edges {
                        node {
                          daily_rate_payment_method_types {
                            payment_method_type_name
                          }
                        }
                      }
                    }
                  }
                }
              }
              monthly_ratesCollection {
                edges {
                  node {
                    base_price
                    monthly_rates_type {
                      rate_name
                      rate_type_details
                    }
                    activation_fee
                    rate_hour_from
                    rate_hour_to
                    clearance_levels
                    clearance_lot_types
                    rate_allowance
                    rate_days
                    monthly_rates_confirmation_externalCollection {
                      edges {
                        node {
                          request_method
                          external_contacts {
                            first_name
                            middle_name
                            last_name
                            title
                            contact_email
                          }
                        }
                      }
                    }
                    monthly_rates_confirmation_internalCollection {
                      edges {
                        node {
                          request_method
                          estimated_duration
                          internal_members {
                            first_name
                            middle_name
                            last_name
                            title
                            contact_email
                          }
                        }
                      }
                    }
                    monthly_rates_accessCollection {
                      edges {
                        node {
                          access_method_id
                          parking_lots_access_methods {
                            method_name
                            method_usage
                            method_details
                            parking_lots_access_types {
                              access_name
                            }
                          }
                          monthly_rates_access_activation_internalCollection {
                            edges {
                              node {
                                internal_members {
                                  internal_departments {
                                    department_name
                                  }
                                  first_name
                                  middle_name
                                  last_name
                                  title
                                  contact_email
                                }
                                request_method
                                estimated_duration
                              }
                            }
                          }
                          monthly_rates_access_activation_externalCollection {
                            edges {
                              node {
                                external_contacts {
                                  additional_details
                                  first_name
                                  middle_name
                                  last_name
                                  title
                                  contact_email
                                }
                                request_method
                                estimated_duration
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        parking_lots_external_contactsCollection {
          edges {
            node {
              parking_lots_contact_types {
                contact_type_name
                contact_type_responsibility
              }
              external_contacts {
                first_name
                middle_name
                last_name
                title
                contact_email
                contact_phone
                contact_ext
              }
            }
          }
        }
        parking_lots_internal_contactsCollection {
          edges {
            node {
              parking_lots_contact_types {
                contact_type_name
                contact_type_responsibility
              }
              internal_members {
                first_name
                middle_name
                last_name
                title
                contact_email
                contact_phone
                contact_ext
              }
            }
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getCities(variables?: GetCitiesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCitiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCitiesQuery>(GetCitiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCities', 'query');
    },
    getLots(variables?: GetLotsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetLotsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLotsQuery>(GetLotsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLots', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;