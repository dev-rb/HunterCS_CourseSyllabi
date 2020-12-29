import React from 'react';
import './App.css';
import ClassGrid from './components/ClassGrid';
import CourseNavigation from './components/CourseNavigation';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './redux/store';
import { CoursesState, getCourses } from './redux/slices';

function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCourses('https://hunter-cs-syllabi-a.herokuapp.com/classes'))
  }, [dispatch])

  return (
    <Provider store={store}>
      <div className="App">
        <div className="gridTest">
          <Navbar />
          <Home />
        </div>

        <div className="coursesNew">
          <CourseNavigation />
          <ClassGrid />
        </div>


        {/* <div className="courses">
        {courses.map((item, index) =>
          <CourseSection key={index + Math.random()} classType={item.type} courseClasses={item.classes} index={index} />
        )}
      </div> */}


      </div>
    </Provider>
  );
}

export default App;
