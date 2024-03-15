import SearchBar from "@/components/SearchBar"
import ShortCuts from "@/components/ShortCuts"
import Title from "@/components/Title"

const Wrapper = () => {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      gap:"20px 10px"
    }}>
      <Title/>
      <SearchBar/>
      <ShortCuts/>
    </section>
  );
};

export default Wrapper;


