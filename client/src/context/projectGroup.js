import { useState, useContext, createContext, useEffect } from 'react';

const ProjectGroupContext = createContext();
const ProjectGroupProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    let existingProjectGroups = localStorage.getItem('special');
    if (existingProjectGroups) setGroups(existingProjectGroups);
  }, []);

  return (
    <ProjectGroupContext.Provider value={[groups, setGroups]}>
      {children}
    </ProjectGroupContext.Provider>
  );
};

// custom hook
const useProjectGroup = () => useContext(ProjectGroupContext);

export { useProjectGroup, ProjectGroupProvider };
