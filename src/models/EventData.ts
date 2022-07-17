export default interface IEventData {
    id: number
    ,event_name: string      //  Event Name:     // 255 chars
    ,venue: string          //  Venue:          // ?? Autofill "formtastic" in CSS class
    ,when_start_date: Date  //  When            //
    ,when_start_time: Date  //  When            //
    ,when_end_date: Date    //  When            //
    ,when_end_time: Date    //  When            //
    ,website: string        //  Website         //
    ,description: string    //  Description     //
    ,venue_details: string  //  Venue Details   //
    ,tags: Array<string>    //  Tags
  }

export function createEvent (
  data : IEventData = {
    id: 0
    ,event_name: "Event Name"       
    ,venue: "Venue Name"           
    ,when_start_date: new Date()     
    ,when_start_time: new Date()     
    ,when_end_date: new Date()       
    ,when_end_time: new Date()       
    ,website: "www.wcom"                                           
    ,description: "dang  ol click"                                 
    ,venue_details: "clicklcikclickclickclic"              
    ,tags: ["real", "easy"]  
  }                           
) : IEventData
/* createData */ {
  return data;
}

