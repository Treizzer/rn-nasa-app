import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type PostImage = {
  copyright?: string;
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url?: string;
};

export type RootStackParams = {
  Home: undefined;
  Detail: PostImage;
};

export type DetailScreenNavigationProp = NativeStackNavigationProp<RootStackParams, "Detail">;
