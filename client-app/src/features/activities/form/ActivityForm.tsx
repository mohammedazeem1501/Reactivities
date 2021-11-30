
import React, { ChangeEvent, useEffect, useState } from 'react';

import { Button, Form, Header, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/layout/models/activity';

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}
export default function ActivityForm(props: Props) {
    // const history = useHistory();
     const { activity: selectedActivity, closeForm, createOrEdit } = props;

     const initialState = selectedActivity ?? {
         id: '',
         title:'',
         category:'',
         description:'',
         date:'',
         city:'',
         venue:''
     }
    // const { createActivity, updateActivity, loadActivity, loadingInitial } = activityStore;
    // const { id } = useParams<{ id: string }>();

     const [activity, setActivity] = useState(initialState);

    // const validationSchema = Yup.object({
    //     title: Yup.string().required('The activity title is required'),
    //     description: Yup.string().required('The activity description is required'),
    //     category: Yup.string().required(),
    //     date: Yup.string().required('Date is required').nullable(),
    //     venue: Yup.string().required(),
    //     city: Yup.string().required(),
    // })

    // useEffect(() => {
    //     if (id) loadActivity(id).then(activity => setActivity(new ActivityFormValues(activity)))
    // }, [id, loadActivity]);
    function handleFormSubmit(){
        createOrEdit(activity);
    }

    function handleChangle(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }
    // function handleFormSubmit(activity: ActivityFormValues) {
    //     if (!activity.id) {
    //         let newActivity = {
    //             ...activity,
    //             id: uuid()
    //         };
    //         createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`))
    //     } else {
    //         updateActivity(activity).then(() => history.push(`/activities/${activity.id}`))
    //     }
    // }

    // if (loadingInitial) return <LoadingComponent content='Loading activity...' />

    return (
        <Segment clearing>
            <Header content='Activity Details' sub color='teal' />
          
                    <Form className='ui form' autoComplete='off' onSubmit={handleFormSubmit}>
                        <Form.Input name='title' placeholder='Title' value={activity.title}  onChange={handleChangle}/>
                        <Form.TextArea rows={3} placeholder='Description' name='description' value={activity.description}  onChange={handleChangle}/>
                        {/* <MySelectInput options={categoryOptions} placeholder='Category'  name='category' />
                        <MyDateInput 
                            placeholderText='Date'  
                            name='date' 
                            showTimeSelect
                            timeCaption='time'
                            dateFormat='MMMM d, yyyy h:mm aa'
                        /> */}
                        <Header content='Location Details' sub color='teal' />
                        <Form.Input placeholder='City'  name='city' value={activity.city}  onChange={handleChangle}/>
                        <Form.Input placeholder='Venue' name='venue' value={activity.venue}  onChange={handleChangle}/>
                        <Button floated='right' positive type='submit' content='Submit' />
                        <Button onClick={closeForm} to='/activities' floated='right' type='button' content='Cancel' />
                    </Form>
                
            

        </Segment>    
    )
}