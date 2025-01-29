document.addEventListener('DOMContentLoaded', function() {
    // Close mobile menu when a menu item is clicked
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth < 992) { // Bootstrap's lg breakpoint
                navbarToggler.click(); // This will close the menu
            }
        });
    });

    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    
    document.getElementById('scheduleCurrentDate').textContent = formattedDate;
    document.getElementById('calendarCurrentDate').textContent = formattedDate;

    const meetingData = {
        sunday: [
            { time: '6:30 AM', name: 'Morning Meditation Group', type: '11th Step Discussion, Open Meeting, AA' },
            { time: '8:30 AM', name: 'Greenwood Forest Group', type: 'Spiritual Meeting, Open Meeting, AA' },
            { time: '10:00 AM', name: 'Greenwood Forest Group', type: 'Men\'s Meeting, Closed Meeting, AA' },
            { time: '1:00 PM', name: 'Living Now', type: 'Big Book Discussion, Open Meeting, AA' },
            { time: '6:00 PM', name: 'Greenwood Forest Group', type: 'Women\'s Meeting, Closed Meeting, AA' }
        ],
        monday: [
            { time: '6:30 AM', name: 'Morning Meditation Group', type: '11th Step Discussion, Open Meeting, AA' },
            { time: '9:00 AM', name: 'Be Still ... Mid-Morning Meditation', type: 'Meditation, Open Meeting, AA' },
            { time: '12:00 PM', name: 'Living Now', type: 'Literature Discussion, Closed Meeting, AA' },
            { time: '6:00 PM', name: 'Living Now', type: 'Literature Discussion, Closed Meeting, AA' },
			{ time: '8:00 PM - 10:00 PM', name: 'Doce Promesas', type: 'Spanish Speaking, Discussion, Open Meeting, AA' }
        ],
        tuesday: [
            { time: '6:30 AM', name: 'Morning Meditation Group', type: '11th Step Discussion, Open Meeting, AA' },
            { time: '9:00 AM', name: 'Be Still ... Mid-Morning Meditation', type: 'Meditation, Open Meeting, AA' },
            { time: '12:00 PM', name: 'Living Now', type: 'Literature Discussion, Closed Meeting, AA' },
            { time: '6:00 PM', name: 'Greenwood Forest Group', type: 'Literature Discussion, Closed Meeting, AA' },
            { time: '8:00 PM', name: 'YRAC', type: 'Big Book Study, Open Meeting, AA' }
        ],
        wednesday: [
            { time: '6:30 AM', name: 'Morning Meditation Group', type: '11th Step Discussion, Open Meeting, AA' },
            { time: '9:00 AM', name: 'Be Still ... Mid-Morning Meditation', type: 'Meditation, Open Meeting, AA' },
            { time: '12:00 PM', name: 'Living Now', type: 'Literature Discussion, Closed Meeting, AA' },
            { time: '1:30 PM', name: 'Courage to Change', type: 'Discussion, Open Meeting, Al-Anon' },
            { time: '6:00 PM', name: 'Living Now', type: 'Literature Discussion, Closed Meeting, AA' },
            { time: '8:00 PM', name: 'Cary Young People', type: 'Beginners\' Meeting, Open Meeting, AA' }
        ],
        thursday: [
            { time: '6:30 AM', name: 'Morning Meditation Group', type: '11th Step Discussion, Open Meeting, AA' },
            { time: '9:00 AM', name: 'Be Still ... Mid-Morning Meditation', type: 'Meditation, Open Meeting, AA' },
            { time: '12:00 PM', name: 'Living Now', type: 'Literature Discussion, Closed Meeting, AA' },
            { time: '6:00 PM', name: 'Living Now', type: 'Literature Discussion, Closed Meeting, AA' },
			{ time: '8:00 PM - 10:00 PM', name: 'Doce Promesas', type: 'Spanish Speaking, Discussion, Open Meeting, AA' }
        ],
        friday: [
            { time: '6:30 AM', name: 'Morning Meditation Group', type: '11th Step Discussion, Open Meeting, AA' },
            { time: '9:00 AM', name: 'Be Still ... Mid-Morning Meditation', type: 'Meditation, Open Meeting, AA' },
            { time: '12:00 PM', name: 'Living Now', type: 'Literature Discussion, Closed Meeting, AA' },
            { time: '6:00 PM', name: 'Greenwood Forest Group', type: 'Beginners\' Meeting, Closed Meeting, AA' },
            { time: '8:00 PM', name: 'YRAC', type: 'Big Book Study, Open Meeting, AA' }
        ],
        saturday: [
            { time: '6:30 AM', name: 'Morning Meditation Group', type: '11th Step Discussion, Open Meeting, AA' },
            { time: '8:00 AM', name: 'Living Now', type: 'Discussion, Open Meeting, AA' },
            { time: '9:30 AM', name: 'Courage to Change', type: 'Discussion, Open Meeting, Al-Anon' },
            { time: '12:30 PM', name: 'Keep it Simple', type: 'Literature Discussion, Open Meeting, AA' },
            { time: '6:00 PM', name: 'Living Now', type: 'Big Book Discussion, Open Meeting, AA' },
            { time: '8:00 PM', name: 'Cary Young People', type: 'Big Book Discussion, Open Meeting, AA' }
        ]
    };

    const scheduleContainer = document.getElementById('meetingScheduleContainer');
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDay = currentDate.getDay();

    days.forEach((day, index) => {
        const dayElement = document.createElement('div');
        dayElement.className = 'meeting-day';
        if (index === currentDay) {
            dayElement.classList.add('current-day');
        }
        dayElement.innerHTML = `
            <h3>${day.charAt(0).toUpperCase() + day.slice(1)}</h3>
            ${meetingData[day].map(meeting => `
                <div class="meeting">
                    <span class="meeting-time">${meeting.time}</span>
                    <br>
                    <strong>${meeting.name}</strong>
                    <br>
                    <span class="meeting-type">${meeting.type}</span>
                </div>
            `).join('')}
        `;
        scheduleContainer.appendChild(dayElement);
    });

    // Ensure the current day is visible on page load
    const currentDayElement = document.querySelector('.meeting-day.current-day');
    if (currentDayElement && window.innerWidth > 768) {
        scheduleContainer.scrollLeft = currentDayElement.offsetLeft - scheduleContainer.offsetLeft;
    }

    // Drag to scroll functionality
    const slider = document.querySelector('.meeting-schedule');
    let isDown = false;
    let startX;
    let scrollLeft;

    function sliderMouseDown(e) {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }

    function sliderMouseLeave() {
        isDown = false;
        slider.classList.remove('active');
    }

    function sliderMouseUp() {
        isDown = false;
        slider.classList.remove('active');
    }

    function sliderMouseMove(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    }

    function sliderTouchStart(e) {
        isDown = true;
        slider.classList.add('active');
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }

    function sliderTouchEnd() {
        isDown = false;
        slider.classList.remove('active');
    }

    function sliderTouchMove(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    }

    if (window.innerWidth > 768) {
        slider.addEventListener('mousedown', sliderMouseDown);
        slider.addEventListener('mouseleave', sliderMouseLeave);
        slider.addEventListener('mouseup', sliderMouseUp);
        slider.addEventListener('mousemove', sliderMouseMove);
        slider.addEventListener('touchstart', sliderTouchStart);
        slider.addEventListener('touchend', sliderTouchEnd);
        slider.addEventListener('touchmove', sliderTouchMove);
    }

    // Back to top functionality
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // FullCalendar initialization
    $('#fullCalendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'listMonth,month,agendaWeek,agendaDay'
        },
        defaultView: 'month',
        defaultDate: currentDate,
        navLinks: true,
        editable: false,
        eventLimit: true,
        events: [
            {
                title: 'Chili Cookoff & Silent Auction',
                start: '2024-10-06T14:30:00',
                end: '2024-10-06T17:00:00',
                description: 'Cook some Chili - spice or sans spice - bring it into the TAC! Delish!!! Also bid on some fine items to support your TAC!'
            },
            {
                title: 'TAC Board Meeting',
                start: '2024-10-14T19:00:00',
                end: '2024-10-14T20:00:00'
            },
            {
                title: 'TAC Board Meeting',
                start: '2024-11-11T19:00:00',
                end: '2024-11-11T20:00:00'
            },
			{
                title: 'Annual TAC Board Member Meeting & Party',
                start: '2024-12-08T14:30:00',
                end: '2024-12-08T15:30:00',
                description: 'Annual TAC Board Member Meeting<br><br><a href="https://drive.google.com/file/d/1ur4mXjE_GUWljqILdkqigdwdVqM2HGC-/preview" target="_blank">View the Flyer</a>'
            },
			{
                title: 'TAC Board Meeting',
                start: '2025-01-13T19:00:00',
                end: '2025-01-13T20:00:00'
            },
			{
                title: 'TAC Board Meeting',
                start: '2025-02-10T19:00:00',
                end: '2025-02-10T20:00:00'
            },
			{
                title: 'TAC Board Meeting',
                start: '2025-04-14T19:00:00',
                end: '2025-04-14T20:00:00'
            },
			{
                title: 'TAC Board Meeting',
                start: '2025-05-12T19:00:00',
                end: '2025-05-12T20:00:00'
            },
			{
                title: 'TAC Board Meeting',
                start: '2025-03-10T19:00:00',
                end: '2025-03-10T20:00:00'
            },
            {
                title: 'Alacathon',
                start: '2024-12-24',
                end: '2024-12-26',
                allDay: true
            },
            {
                title: 'Alacathon',
                start: '2024-12-31',
                end: '2025-01-02',
                allDay: true
            },
			{
                title: 'Blood Drive',
                start: '2024-10-13T11:00:00',
                end: '2024-10-13T16:00:00',
				description: 'Pre-registration required.'
            },
			{
                title: 'Costume Contest &amp; Party - Cary Young People',
                start: '2024-10-30T20:00:00',
                end: '2024-10-30T22:30:00',
//				description: 'Don your most creative costumes and join us for a night of spooky fun!'
            },
			{
                title: 'NCCYPAA',
                start: '2024-11-17T14:30:00',
                end: '2024-11-17T17:30:00',
				description: 'NCCYPAA = North Carolina Conference of Young People in A.A. is an annual conference by young, meaning room to grow, A.A. members for A.A. members about A.A. which will take place in 2025 in the Raleigh-Durham-Chapel Hill area. The host committee is composed of volunteers who are interested in being of service to A.A. by organizing and running that weekend conference. All interested A.A. members are welcomed to attend the host committee meetings at the TAC.'
            },
			{
                title: 'Living Now - Monthly Business Meeting',
                start: '2025-01-04T16:30:00',
                end: '2025-01-04T18:00:00',
				description: 'Living Now Business Meeting.'
            },
			{
                title: 'Living Now - Monthly Business Meeting',
                start: '2025-02-01T16:30:00',
                end: '2025-02-01T18:00:00',
				description: 'Living Now Business Meeting.'
            },
			{
                title: 'Living Now - Monthly Business Meeting',
                start: '2025-03-01T16:30:00',
                end: '2025-03-01T18:00:00',
				description: 'Living Now Business Meeting.'
            },
			{
                title: 'Living Now - Monthly Business Meeting',
                start: '2025-04-05T16:30:00',
                end: '2025-04-05T18:00:00',
				description: 'Living Now Business Meeting.'
            },
			{
                title: 'Living Now - Monthly Business Meeting',
                start: '2025-05-03T16:30:00',
                end: '2025-05-03T18:00:00',
				description: 'Living Now Business Meeting.'
            },
			{
                title: 'Living Now - Monthly Business Meeting',
                start: '2025-06-07T16:30:00',
                end: '2025-06-07T18:00:00',
				description: 'Living Now Business Meeting.'
            },
			{
                title: 'Living Now - Monthly Business Meeting',
                start: '2025-07-05T16:30:00',
                end: '2025-07-05T18:00:00',
				description: 'Living Now Business Meeting.'
            },
			{
                title: 'Living Now - Monthly Business Meeting',
                start: '2025-08-02T16:30:00',
                end: '2025-08-02T18:00:00',
				description: 'Living Now Business Meeting.'
            },
			{
                title: 'Living Now - Monthly Business Meeting',
                start: '2025-09-06T16:30:00',
                end: '2025-09-06T18:00:00',
				description: 'Living Now Business Meeting.'
            },
			{
                title: 'NCCYPAA',
                start: '2025-01-05T14:30:00',
                end: '2025-01-05T16:30:00',
				description: 'NCCYPAA = North Carolina Conference of Young People in A.A. is an annual conference by young, meaning room to grow, A.A. members for A.A. members about A.A. which will take place in 2025 in the Raleigh-Durham-Chapel Hill area. The host committee is composed of volunteers who are interested in being of service to A.A. by organizing and running that weekend conference. All interested A.A. members are welcomed to attend the host committee meetings at the TAC.'
            },
			{
                title: 'NCCYPAA',
                start: '2025-02-02T14:30:00',
                end: '2025-02-02T16:30:00',
				description: 'NCCYPAA = North Carolina Conference of Young People in A.A. is an annual conference by young, meaning room to grow, A.A. members for A.A. members about A.A. which will take place in 2025 in the Raleigh-Durham-Chapel Hill area. The host committee is composed of volunteers who are interested in being of service to A.A. by organizing and running that weekend conference. All interested A.A. members are welcomed to attend the host committee meetings at the TAC.'
            },
			{
                title: 'NCCYPAA',
                start: '2025-03-02T14:30:00',
                end: '2025-03-02T16:30:00',
				description: 'NCCYPAA = North Carolina Conference of Young People in A.A. is an annual conference by young, meaning room to grow, A.A. members for A.A. members about A.A. which will take place in 2025 in the Raleigh-Durham-Chapel Hill area. The host committee is composed of volunteers who are interested in being of service to A.A. by organizing and running that weekend conference. All interested A.A. members are welcomed to attend the host committee meetings at the TAC.'
            },
			{
                title: 'NCCYPAA',
                start: '2025-04-06T14:30:00',
                end: '2025-04-06T16:30:00',
				description: 'NCCYPAA = North Carolina Conference of Young People in A.A. is an annual conference by young, meaning room to grow, A.A. members for A.A. members about A.A. which will take place in 2025 in the Raleigh-Durham-Chapel Hill area. The host committee is composed of volunteers who are interested in being of service to A.A. by organizing and running that weekend conference. All interested A.A. members are welcomed to attend the host committee meetings at the TAC.'
            },
			{
                title: 'NCCYPAA',
                start: '2025-05-04T14:30:00',
                end: '2025-05-04T16:30:00',
				description: 'NCCYPAA = North Carolina Conference of Young People in A.A. is an annual conference by young, meaning room to grow, A.A. members for A.A. members about A.A. which will take place in 2025 in the Raleigh-Durham-Chapel Hill area. The host committee is composed of volunteers who are interested in being of service to A.A. by organizing and running that weekend conference. All interested A.A. members are welcomed to attend the host committee meetings at the TAC.'
            },
			{
                title: 'NCCYPAA',
                start: '2025-06-01T14:30:00',
                end: '2025-06-01T16:30:00',
				description: 'NCCYPAA = North Carolina Conference of Young People in A.A. is an annual conference by young, meaning room to grow, A.A. members for A.A. members about A.A. which will take place in 2025 in the Raleigh-Durham-Chapel Hill area. The host committee is composed of volunteers who are interested in being of service to A.A. by organizing and running that weekend conference. All interested A.A. members are welcomed to attend the host committee meetings at the TAC.'
            },
			{
                title: 'NCCYPAA',
                start: '2025-07-06T14:30:00',
                end: '2025-07-06T16:30:00',
				description: 'NCCYPAA = North Carolina Conference of Young People in A.A. is an annual conference by young, meaning room to grow, A.A. members for A.A. members about A.A. which will take place in 2025 in the Raleigh-Durham-Chapel Hill area. The host committee is composed of volunteers who are interested in being of service to A.A. by organizing and running that weekend conference. All interested A.A. members are welcomed to attend the host committee meetings at the TAC.'
            },
			{
                title: 'NCCYPAA',
                start: '2025-08-03T14:30:00',
                end: '2025-08-03T16:30:00',
				description: 'NCCYPAA = North Carolina Conference of Young People in A.A. is an annual conference by young, meaning room to grow, A.A. members for A.A. members about A.A. which will take place in 2025 in the Raleigh-Durham-Chapel Hill area. The host committee is composed of volunteers who are interested in being of service to A.A. by organizing and running that weekend conference. All interested A.A. members are welcomed to attend the host committee meetings at the TAC.'
            },
			{
                title: 'NCCYPAA',
                start: '2025-09-07T14:30:00',
                end: '2025-09-07T16:30:00',
				description: 'NCCYPAA = North Carolina Conference of Young People in A.A. is an annual conference by young, meaning room to grow, A.A. members for A.A. members about A.A. which will take place in 2025 in the Raleigh-Durham-Chapel Hill area. The host committee is composed of volunteers who are interested in being of service to A.A. by organizing and running that weekend conference. All interested A.A. members are welcomed to attend the host committee meetings at the TAC.'
            },
			{
                title: 'Valentines Fellowship',
                start: '2025-02-14T14:30:00',
                end: '2025-02-14T16:30:00',
				description: 'Join us for FELLOWSHIP & A SWEET TREAT! Bring your sweet tooth and a Valentines Day treat to share!'
            },
			{
                title: 'Lucky Charm Sabotage',
                start: '2025-03-16T14:30:00',
                end: '2025-03-16T17:30:00',
				description: 'Join us for FELLOWSHIP & A SWEET TREAT! Bring your sweet tooth and a Valentines Day treat to share!'
            },
			{
                title: 'Thanksgiving Celebration - Living Now Group',
                start: '2024-11-28',
                end: '2024-11-28',
//				description: 'Thanksgiving at the TAC! Yum.'
            }
        ],
        eventClick: function(event, jsEvent, view) {
            $('#eventModal .modal-title').text(event.title);
            let content = `Date: ${event.start.format('MMMM D, YYYY')}`;
            if (!event.allDay) {
                content += `<br>Time: ${event.start.format('h:mm A')} - ${event.end.format('h:mm A')}`;
            }
            if (event.description) {
                // Allow HTML in description
                content += `<br><br>${event.description}`;
                $('#eventModal .modal-body').html(content);
            } else {
                $('#eventModal .modal-body').text(content);
            }
            $('#eventModal').modal('show');
        }
    });

    // Home button functionality
    document.querySelector('a[href="#top"]').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

function openDonateModal() {
    $('#donateModal').modal('show');
}