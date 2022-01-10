import type { Emitter } from "mitt";
import mitt from "mitt";

type Events = {
  resize: {
    detail: {
      width: number;
      height: number;
    };
  };
  openPanel: string;
  tagViewsChange: string;
  tagViewsShowModel: string;
  logoChange: string;
  changLayoutRoute: {
    indexPath: string;
    parentPath: string;
  };
  mixMenuSelect: string;
};

export const emitter: Emitter<Events> = mitt<Events>();
