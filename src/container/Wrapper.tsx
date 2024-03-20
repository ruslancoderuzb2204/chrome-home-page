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
      height:'100%',
      gap:"20px 0",
      marginTop:"-100px"
    }}>
      <Title/>
      <SearchBar/>
      <ShortCuts/>
    </section>
  );
};

export default Wrapper;


