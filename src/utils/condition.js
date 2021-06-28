export function condition(condition){
    switch(condition){
        case 'cloud':
            return icon ={
                name:'cloudy-outline',
                color: '#ffb300'
            };
            break;
            case 'clear_day':
            return icon ={
                name:'partly-sunny-outline',
                color: '#ffb300'
            };
            break;
            case 'rain':
                return icon ={
                    name:'rainy-outline',
                    color: '#1ec9ff'
                };
                break;
                case 'storm':
                    return icon ={
                        name:'md-thunderstorm',
                        color: '#1ec9ff'
                    };
                    break;
                    case 'snow':
                        return icon ={
                            name:'md-snow',
                            color: '#1ec9ff'
                        };
                        case 'hail':
                            return icon ={
                                name:'md-snow',
                                color: '#D3D3D3'
                            };
                    break;
                    case 'fog':
                        return icon ={
                            name:'cloudy',
                            color: '#1ec9ff'
                        };
                        case 'clear_night':
            return icon ={
                name:'cloudy-night-outline',
                color: '#ffb300'
            };
                break;
            default:
                return icon ={
                    name:'rainy-outline',
                    color: '#1ec9ff'
                };
                break;
                    
    }
}