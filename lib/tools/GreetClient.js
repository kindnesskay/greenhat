export default function greetCustomer() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting;

    switch (true) {
        case currentHour < 12:
            greeting = 'Good morning!';
            break;
        case currentHour < 18:
            greeting = 'Good afternoon!';
            break;
        default:
            greeting = 'Good evening!';
    }

    return greeting;
}



