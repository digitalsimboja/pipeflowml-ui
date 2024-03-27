import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** The domain of the AI Agent */
export enum AiAgentDomain {
  Assistant = 'ASSISTANT',
  Customerservice = 'CUSTOMERSERVICE',
  Financial = 'FINANCIAL',
  Healthcare = 'HEALTHCARE',
  Hr = 'HR',
  Legal = 'LEGAL',
  Marketing = 'MARKETING',
  RealEstate = 'REAL_ESTATE',
  Sales = 'SALES',
  TechnicalSupport = 'TECHNICAL_SUPPORT'
}

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID']['output'];
  industry: Scalars['String']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  size: Scalars['String']['output'];
};

export type CompanyMutationResponse = {
  __typename?: 'CompanyMutationResponse';
  company?: Maybe<Company>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

/** The size of the company */
export enum CompanySize {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL'
}

export type CreateAgentInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  domain?: AiAgentDomain;
  instruction?: InputMaybe<Scalars['String']['input']>;
  model?: LlmModel;
  name: Scalars['String']['input'];
  toolIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  useTemplate: Scalars['Boolean']['input'];
  welcomeMessage?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgentResponse = {
  __typename?: 'CreateAgentResponse';
  description?: Maybe<Scalars['String']['output']>;
  domain: AiAgentDomain;
  id: Scalars['ID']['output'];
  instruction?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  sharableURL: Scalars['String']['output'];
  tools?: Maybe<Array<ToolResponse>>;
  welcomeMessage?: Maybe<Scalars['String']['output']>;
};

export type CreateToolResponse = {
  __typename?: 'CreateToolResponse';
  description?: Maybe<Scalars['String']['output']>;
  name: ToolType;
};

/** Large Language Model used by the AI agent for language understanding and generation. */
export enum LlmModel {
  Fireworks = 'FIREWORKS',
  Gpt3_5 = 'GPT3_5',
  Gpt3_5_0613 = 'GPT3_5_0613',
  Gpt3_5_16K = 'GPT3_5_16_K',
  Gpt3_5_1106 = 'GPT3_5_1106',
  Gpt4 = 'GPT4',
  Gpt4_0613 = 'GPT4_0613',
  Gpt4_32K_0613 = 'GPT4_32K_0613',
  Gpt4Turbo_0125 = 'GPT4_TURBO_0125',
  Gpt4Turbo_1106 = 'GPT4_TURBO_1106'
}

export type Mutation = {
  __typename?: 'Mutation';
  allocatePreferenceToCompany: CompanyMutationResponse;
  createAgent: CreateAgentResponse;
  createCompany: CompanyMutationResponse;
  createTool: CreateToolResponse;
  signInUser: SignInUserResponse;
  signUp: SignUpUserResponse;
  updateAgent: CreateAgentResponse;
};


export type MutationAllocatePreferenceToCompanyArgs = {
  companyId: Scalars['String']['input'];
  preferences: Array<PreferenceInput>;
};


export type MutationCreateAgentArgs = {
  data: CreateAgentInput;
};


export type MutationCreateCompanyArgs = {
  data: PartialCompanyInput;
};


export type MutationSignInUserArgs = {
  data: SignInUserInput;
};


export type MutationSignUpArgs = {
  data: SignUpUserInput;
};


export type MutationUpdateAgentArgs = {
  data: PartialAgentInput;
  id: Scalars['String']['input'];
};

export type PartialAgentInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<AiAgentDomain>;
  instruction?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tools?: InputMaybe<Array<ToolType>>;
  welcomeMessage?: InputMaybe<Scalars['String']['input']>;
};

export type PartialCompanyInput = {
  industry: Scalars['String']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  size: CompanySize;
};

export type PreferenceInput = {
  geographicPreferences: Scalars['String']['input'];
  preferredBusinessSize: CompanySize;
  preferredIndustry: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getUser: UserQueryResponse;
  getUserCompany: UserCompayQueryResponse;
  hello: Scalars['String']['output'];
};


export type QueryGetUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserCompanyArgs = {
  id: Scalars['String']['input'];
};

export type SignInUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignInUserResponse = {
  __typename?: 'SignInUserResponse';
  sessionToken: Scalars['String']['output'];
};

export type SignUpUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignUpUserResponse = {
  __typename?: 'SignUpUserResponse';
  sessionToken: Scalars['String']['output'];
};

export type ToolResponse = {
  __typename?: 'ToolResponse';
  isTemplate: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  type: ToolType;
};

/** The tools granting more capability to the AI agent */
export enum ToolType {
  EmailResponder = 'EmailResponder',
  Evveland = 'Evveland',
  ExtractDataFromPdf = 'ExtractDataFromPdf',
  IndustryResearch = 'IndustryResearch',
  InvoiceGeneratorAssistant = 'InvoiceGeneratorAssistant',
  MarketingRep = 'MarketingRep',
  MatchMaker = 'MatchMaker',
  User = 'User',
  YouTubeTranscriber = 'YouTubeTranscriber'
}

export type UserCompayQueryResponse = {
  __typename?: 'UserCompayQueryResponse';
  companies?: Maybe<Array<Company>>;
  id: Scalars['ID']['output'];
};

export type UserQueryResponse = {
  __typename?: 'UserQueryResponse';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type CreateAgentMutationVariables = Exact<{
  data: CreateAgentInput;
}>;


export type CreateAgentMutation = { __typename?: 'Mutation', createAgent: { __typename?: 'CreateAgentResponse', id: string, name: string, sharableURL: string } };

export type SignUpMutationVariables = Exact<{
  data: SignUpUserInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'SignUpUserResponse', sessionToken: string } };

export type SignInUserMutationVariables = Exact<{
  data: SignInUserInput;
}>;


export type SignInUserMutation = { __typename?: 'Mutation', signInUser: { __typename?: 'SignInUserResponse', sessionToken: string } };


export const CreateAgentDocument = gql`
    mutation createAgent($data: CreateAgentInput!) {
  createAgent(data: $data) {
    id
    name
    sharableURL
  }
}
    `;
export type CreateAgentMutationFn = Apollo.MutationFunction<CreateAgentMutation, CreateAgentMutationVariables>;

/**
 * __useCreateAgentMutation__
 *
 * To run a mutation, you first call `useCreateAgentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAgentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAgentMutation, { data, loading, error }] = useCreateAgentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAgentMutation(baseOptions?: Apollo.MutationHookOptions<CreateAgentMutation, CreateAgentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAgentMutation, CreateAgentMutationVariables>(CreateAgentDocument, options);
      }
export type CreateAgentMutationHookResult = ReturnType<typeof useCreateAgentMutation>;
export type CreateAgentMutationResult = Apollo.MutationResult<CreateAgentMutation>;
export type CreateAgentMutationOptions = Apollo.BaseMutationOptions<CreateAgentMutation, CreateAgentMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($data: SignUpUserInput!) {
  signUp(data: $data) {
    sessionToken
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const SignInUserDocument = gql`
    mutation SignInUser($data: SignInUserInput!) {
  signInUser(data: $data) {
    sessionToken
  }
}
    `;
export type SignInUserMutationFn = Apollo.MutationFunction<SignInUserMutation, SignInUserMutationVariables>;

/**
 * __useSignInUserMutation__
 *
 * To run a mutation, you first call `useSignInUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInUserMutation, { data, loading, error }] = useSignInUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignInUserMutation(baseOptions?: Apollo.MutationHookOptions<SignInUserMutation, SignInUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInUserMutation, SignInUserMutationVariables>(SignInUserDocument, options);
      }
export type SignInUserMutationHookResult = ReturnType<typeof useSignInUserMutation>;
export type SignInUserMutationResult = Apollo.MutationResult<SignInUserMutation>;
export type SignInUserMutationOptions = Apollo.BaseMutationOptions<SignInUserMutation, SignInUserMutationVariables>;