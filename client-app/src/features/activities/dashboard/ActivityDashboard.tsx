
import React, {  useState } from 'react';

import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/layout/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
    selectedActivity : Activity | undefined;
    selectActivity: (id: string)=>void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id:string) => void;
}

export default function ActivityDashboard(props: Props) {
    const { activities, selectedActivity,
         selectActivity, cancelSelectActivity, 
         editMode, openForm, closeForm, createOrEdit, deleteActivity } = props;
    // const { loadActivities, activityRegistry, setPagingParams, pagination } = activityStore;
    const [loadingNext, setLoadingNext] = useState(false);

    function handleGetNext() {
        setLoadingNext(true);
        // setPagingParams(new PagingParams(pagination!.currentPage + 1))
        // loadActivities().then(() => setLoadingNext(false));
    }

    // useEffect(() => {
    //     if (activityRegistry.size <= 1) loadActivities();
    // }, [activityRegistry.size, loadActivities])

    return (
        <Grid>
            <Grid.Column width='10'>
            <ActivityList activities={activities}
            deleteActivity={deleteActivity}
            selectActivity={selectActivity}/>

            </Grid.Column>
            <Grid.Column width='6'>
                {/* <ActivityFilters /> */}
                {selectedActivity && !editMode &&
                <ActivityDetails activity={selectedActivity} 
                cancelSelectActivity={cancelSelectActivity}
                openForm={openForm}
                
                />}

                {editMode && <ActivityForm closeForm={closeForm} 
                activity={selectedActivity} createOrEdit={createOrEdit}/>}
            </Grid.Column>
           
        </Grid>
    )
}