import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import coffeeDeliveryLogo from '../../assets/Coffee-DeliveryLogo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
    return (
        <HeaderContainer className="container">
            <div>
                <img src={coffeeDeliveryLogo} alt="" />
                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill" />
                        Santos, SP
                    </HeaderButton>
                    <HeaderButton variant="yellow">
                        <ShoppingCart size={20} weight="fill" />
                    </HeaderButton>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}