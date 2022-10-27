import ContentContainer from "../components/content-container/ContentContainer";
import Loader from "../components/loader/Loader";
import PageHeader from "../components/page-header/PageHeader";
import SearchAdress from "../components/search-address/SearchAdress";
import { useGetAddressQuery } from "../redux/api/api";
import { useTypedSelector } from "../redux/store";

export default function Address() {
  const dataForAdressSearch = useTypedSelector(
    (state) => state.userInput.valueAddressSearch
  );
  const { data, error, isFetching } = useGetAddressQuery(
    { query: dataForAdressSearch /*, count: 20 */ },
    { skip: !dataForAdressSearch, refetchOnMountOrArgChange: true }
  );

  return (
    <section className="main-page-info">
      <PageHeader />
      <SearchAdress />
      {isFetching && <Loader />}
      {!!data && !isFetching && (
        <ContentContainer
          title="Адреса"
          data={data?.suggestions}
          error={error}
        />
      )}
    </section>
  );
}
