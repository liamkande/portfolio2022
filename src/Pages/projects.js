import { useEffect, useState } from 'react'
import CardList from '../components/card-list'
import '../App.css'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const Projects = () => {
  const [projectsData, setProjectsData] = useState([])

  useEffect(() => {
    const getData = async () => {
      let arr = []
      const querySnapshot = await getDocs(collection(db, 'projects'))
      querySnapshot.forEach((doc, index) => {
        arr.push(doc.data())
        setProjectsData(arr)
      })
    }

    getData().catch(console.error)
  }, [projectsData.length])

  return (
    <div className="App">
      <CardList products={projectsData} />
    </div>
  )
}

export default Projects
