// import List from "./List";
import { useState , useEffect } from "react"
import Form from "./Form";
import Table from "./Table";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/"
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([])
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`)
        if (!response.ok) throw Error('Did not recieve expected data')
        const data = await response.json()
        setItems(data)
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchItems();
  }, [reqType])

  return (
    <div className="App">
      <Form
        reqType = {reqType}
        setReqType = {setReqType}
      />
      {isLoading && <p style={{ color: 'green'}}> Loading Items... </p>}
      {fetchError && <p style={{color: 'red'}}>{`Error: ${fetchError}`}</p>}
      <Table items = {items} />
      {/* <List
        items = {items}
      /> */}
    </div>
  );
}

export default App;
