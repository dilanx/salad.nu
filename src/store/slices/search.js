import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as apiActions from "../api";

const defaultSelectedCourse = { id: -1 };
const defaultSelectedSection = { info: null };
const defaultBuilding = { lat: -360, lon: -360 };
const defaultHoveredCourse = { id: -1 };
const defaultHoveredSection = { id: -1 };

// Reducers
const slice = createSlice({
  name: "search",
  initialState: {
    searchStr: "",
    selectedCourse: defaultSelectedCourse,
    selectedSection: defaultSelectedSection,
    currentBuilding: defaultBuilding,
    hoveredScheduledCourse: defaultHoveredCourse,
    hoveredSection: defaultHoveredSection,
  },
  reducers: {
    updatedSearch: (search, action) => {
      search.searchStr = action.payload.searchStr;
    },
    updatedSelectedCourse: (search, action) => {
      search.selectedCourse = action.payload;
    },
    clearedSelectedCourse: (search, action) => {
      search.selectedCourse = defaultSelectedCourse;
    },
    updatedSelectedSection: (search, action) => {
      search.selectedSection = action.payload;
    },
    clearedSelectedSection: (search, action) => {
      search.selectedSection = defaultSelectedSection;
    },
    updatedCurrentBuilding: (search, action) => {
      const { lat, lon } = action.payload.data;
      if (!lat || !lon) search.currentBuilding = defaultBuilding;
      else search.currentBuilding = { lat, lon };
    },
    clearedCurrentBuilding: (search, action) => {
      search.currentBuilding = defaultBuilding;
    },
    updatedHoveredCourse: (search, action) => {
      search.hoveredScheduledCourse.id = action.payload.id;
    },
    clearedHoveredCourse: (search, action) => {
      search.hoveredScheduledCourse = defaultHoveredCourse;
    },
    updatedHoveredSection: (search, action) => {
      search.hoveredSection.id = action.payload.id;
    },
    clearedHoveredSection: (search, action) => {
      search.hoveredSection = defaultHoveredSection;
    },
  },
});

const {
  updatedSearch,
  updatedSelectedCourse,
  clearedSelectedCourse,
  updatedSelectedSection,
  clearedSelectedSection,
  updatedCurrentBuilding,
  clearedCurrentBuilding,
  updatedHoveredCourse,
  clearedHoveredCourse,
  updatedHoveredSection,
  clearedHoveredSection,
} = slice.actions;
export default slice.reducer;

// Action Creators
export const updateSearch = (searchStr) => {
  return updatedSearch({ searchStr });
};

export const updateSelectedCourse = (id) => {
  return updatedSelectedCourse({ id });
};

export const clearSelectedCourse = () => {
  return clearedSelectedCourse();
};

export const updateSelectedSection = (info) => {
  return updatedSelectedSection({ info });
};

export const clearSelectedSection = () => {
  return clearedSelectedSection();
};

export const updateCurrentBuilding = (buildingId) => (dispatch, getState) => {
  const resource = "buildings";
  return dispatch(
    apiActions.apiRequested({
      resource,
      data: buildingId,
      onSuccess: updatedCurrentBuilding.type,
    })
  );
};

export const clearCurrentBuilding = () => {
  return clearedCurrentBuilding();
};

export const updateHoveredCourse = (id) => {
  return updatedHoveredCourse({ id });
};

export const clearHoveredCourse = () => {
  return clearedHoveredCourse();
};

export const updateHoveredSection = (id) => {
  return updatedHoveredSection({ id });
};

export const clearHoveredSection = () => {
  return clearedHoveredSection();
};

// Selectors
export const getSearch = createSelector(
  (state) => state.entities.search,
  (search) => search.searchStr
);

export const getSelectedCourse = createSelector(
  (state) => state.entities.search,
  (search) => search.selectedCourse
);

export const getSelectedSection = createSelector(
  (state) => state.entities.search,
  (search) => search.selectedSection
);

export const getCurrentBuilding = createSelector(
  (state) => state.entities.search,
  (search) => search.currentBuilding
);

export const getHoveredCourse = createSelector(
  (state) => state.entities.search,
  (search) => search.hoveredScheduledCourse
);

export const getHoveredSection = createSelector(
  (state) => state.entities.search,
  (search) => search.hoveredSection
);
