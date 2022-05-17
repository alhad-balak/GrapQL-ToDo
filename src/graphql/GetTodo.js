import { useQuery, gql } from '@apollo/client'


const GET_TODOS = gql`
  query getTODO {
      todo {
        id
        title
        completed
      }
    }`
export default function UseGetTODO () {
    const { error, loading, data } = useQuery(GET_TODOS);

    return {
        data, loading, error
    };
};
