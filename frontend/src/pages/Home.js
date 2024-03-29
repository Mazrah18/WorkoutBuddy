import { useEffect, useState } from "react"; // Import useState
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchWorkouts = async () => {
      setIsLoading(true); // Set loading to true when starting to fetch
      const response = await fetch('https://workoutbuddy-3dqd.onrender.com/api/workouts', {
        headers: {
          'Authorization': `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json });
      }
      setIsLoading(false); // Set loading to false after fetching
    };
    if (user) {
      fetchWorkouts();
    } else {
      setIsLoading(false); // Also set loading to false if there's no user (to handle any edge cases)
    }
  }, [dispatch, user]);

  // Render loading text or a message if there are no workouts
  return (
    <div className="home">
      <div className="workouts">
        {isLoading ? (
          <p style={{ textAlign: 'center' }}>Loading workouts...</p>
        ) : workouts && workouts.length > 0 ? (
          workouts.map(workout => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))
        ) : (
          <p className="no-workouts-message">Oops! You don't have any workouts added.</p>
        )}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
