import { NavLinkOptionsProps } from '../AppShellNavbar/types';
import NavLink from '../Navlink';

export interface NavLinkListProps {
    options?: NavLinkOptionsProps[]
    variant?: 'dead' | 'son' | 'footer'
}

export default function NavLinkList({ options, variant = 'dead' }: NavLinkListProps): JSX.Element {
  return (
    <>
      {options?.map((option, index) => (
        !option?.links?.length ? (
          <NavLink
            variant={variant}
            data-testid="navigation-item"
            key={index}
            label={option?.label}
            icon={<option.icon />}
            childrenOffset={0}
            active
          />
        ) : (
          <NavLink
            variant={variant}
            key={index}
            label={option?.label}
            icon={<option.icon />}
            childrenOffset={0}
            opened={false}
            active
          >
            {option?.links?.map((link, key) => (
              <NavLink
                variant="son"
                data-testid="navigation-item"
                key={key}
                label={link?.label}
                active
              />
            ))}
          </NavLink>
        )
      ))}
    </>
  );
}
