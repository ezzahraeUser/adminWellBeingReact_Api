import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import './consultation.css';
import { Eventcalendar, setOptions, Popup, Button, formatDate, toast, localeAr, localeFr } from '@mobiscroll/react';

setOptions({
    locale: localeFr,
    theme: 'ios',
    themeVariant: 'light'
});
const data = [{
    title: 'Jude Chester',
    age: 69,
    start: '2023-05-23T09:00',
    end: '2023-05-23T09:45',
    confirmed: false,
    reason: 'Headaches morning & afternoon',
    location: 'Topmed, Building A, Room 203',
    color: '#b33d3d'
}, {
    title: 'Fatima Oubella',
    age: 21,
    start: '2023-05-23T09:00',
    end: '2023-05-23T09:45',
    confirmed: true,
    reason: 'Back pain',
    location: 'Care Cente, Room 320r',
    color: '#b33d3d'
}, {
    title: 'Terry Clark',
    age: 78,
    start: '2023-05-19T11:00',
    end: '2023-05-19T11:45',
    confirmed: true,
    reason: 'Swollen ankles',
    location: 'Vitacure, Building E, Room 50',
    color: '#c77c0a'
}];

const defaultAppointments = data;

function Agenda() {
    const [appointments, setAppointments] = React.useState(defaultAppointments);
    const [isOpen, setOpen] = React.useState(false);
    const [anchor, setAnchor] = React.useState(null);
    const [currentEvent, setCurrentEvent] = React.useState(null);
    const [info, setInfo] = React.useState('');
    const [time, setTime] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [reason, setReason] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [buttonText, setButtonText] = React.useState('');
    const [buttonType, setButtonType] = React.useState('');
    const [bgColor, setBgColor] = React.useState('');
    const timerRef = React.useRef(null);
    
    const view = React.useMemo(() => {
        return {
            agenda: {
                type: 'day',
                startDay: 1,
                endDay: 1
            }
        };
    }, []);
    /** {
    title: 'Salah Eddin',
    age: 16,
    start: '2020-01-01T10:00',
    end: '2020-01-01T10:45',
    confirmed: true,
    reason: 'Itchy, red rashes',
    location: 'Vitacure, Building A, Room 203',
    color: '#309346'
}, */
    
    const onEventHoverIn = React.useCallback((args) => {
        const event = args.event;
        const time = formatDate('hh:mm A', new Date(event.start)) + ' - ' + formatDate('hh:mm A', new Date(event.end));

        setCurrentEvent(event);

        if (event.confirmed) {
            setStatus('Confirmed');
            setButtonText('Cancel appointment');
            setButtonType('warning');
        } else {
            setStatus('Canceled');
            setButtonText('Confirm appointment');
            setButtonType('success');
        }
        
        setBgColor(event.color);
        setInfo(event.title + ', Age: ' + event.age);
        setTime(time);
        setReason(event.reason);
        setLocation(event.location);
        
        if(timerRef.current) {
            clearTimeout(timerRef.current);
        }
        
        setAnchor(args.domEvent.target);
        setOpen(true);
    }, []);
    
    const onEventHoverOut = React.useCallback(() => {
        timerRef.current =setTimeout(() => { setOpen(false); }, 200);
    }, []);
    
    const onEventClick = React.useCallback(() => {
        setOpen(true);
    }, []);
    
    const onMouseEnter = React.useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    }, []);
    
    const onMouseLeave = React.useCallback(() => {
        timerRef.current =setTimeout(() => { setOpen(false); }, 200);
    }, []);

    const setStatusButton = React.useCallback(() => {
        setOpen(false);
        const index = appointments.findIndex(item => item.id === currentEvent.id);
        const newApp = [...appointments];
        newApp[index].confirmed = !appointments[index].confirmed;
        setAppointments(newApp);
        toast({
            message: 'Appointment ' + (currentEvent.confirmed ? 'confirmed' : 'canceled')
        });
    }, [appointments, currentEvent]);


    const viewFile = React.useCallback(() => {
        setOpen(false);
        toast({
            message: 'View file'
        });
    }, []);
    
    const deleteApp = React.useCallback(() => {
        setAppointments(appointments.filter(item => item.id !== currentEvent.id));
        setOpen(false);
        toast({
            message: 'Appointment deleted'
        });
    }, [appointments, currentEvent]);
    
    return <div>
        <Eventcalendar
            view={view}
            data={appointments}
            clickToCreate={false}
            dragToCreate={false}
            showEventTooltip={false}
            onEventHoverIn={onEventHoverIn}
            onEventHoverOut={onEventHoverOut}
            onEventClick={onEventClick}
        />
        <Popup
            display="anchored"
            isOpen={isOpen}
            anchor={anchor}
            touchUi={false}
            showOverlay={false}
            contentPadding={false}
            closeOnOverlayClick={false}
            width={350}
            cssClass="md-tooltip"
        >
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <div className="md-tooltip-header" style={{ backgroundColor: bgColor }}>
                    <span className="md-tooltip-name-age">{info}</span>
                    <span className="md-tooltip-time">{time}</span>
                </div>
                <div className="md-tooltip-info">
                    <div className="md-tooltip-title">
                        Status: <span className="md-tooltip-status md-tooltip-text">{status}</span>
                        <Button color={buttonType} variant="outline" className="md-tooltip-status-button" onClick={setStatusButton}>{buttonText}</Button>
                    </div>
                    <div className="md-tooltip-title">Reason for visit: <span className="md-tooltip-reason md-tooltip-text">{reason}</span></div>
                    <div className="md-tooltip-title">Location: <span className="md-tooltip-location md-tooltip-text">{location}</span></div>
                    <Button color="secondary" className="md-tooltip-view-button" onClick={viewFile}>View patient file</Button>
                    <Button color="danger" variant="outline" className="md-tooltip-delete-button" onClick={deleteApp}>Delete appointment</Button>
                </div>
            </div>
        </Popup>
    </div>
}

export default Agenda;