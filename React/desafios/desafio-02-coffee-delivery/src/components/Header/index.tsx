import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import coffeeDeliveryLogo from '../../assets/Coffee-DeliveryLogo.svg'
import { MapPin } from "phosphor-react";

export function Header() {
    return (
        <HeaderContainer className="container">
            <div>
                <img src={coffeeDeliveryLogo} alt="" />
                <HeaderButtonsContainer>
                    <HeaderButton>
                        <MapPin size={20} weight="fill" />
                        Santos, SP
                    </HeaderButton>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}