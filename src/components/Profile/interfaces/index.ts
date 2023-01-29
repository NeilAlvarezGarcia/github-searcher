import { Profile } from "../../../context/interfaces";

export interface ProfileProps {
    profile: Profile,
    setProfile: (loginName: string) => void
}