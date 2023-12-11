import logo from './logo.svg';
import './App.css';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';
import Search_bar from './components/search_bar';
import Video_detail from './components/video_detail';

function App() {
  return (
    <>

      <VideoList />
      <Search_bar/>
    </>
  );
}

export default App;
