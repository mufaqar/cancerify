import Categories from "../components/Categories";
import DestinationRangeSlider from "../components/DestinationRangeSlider";
import CandidatesGender from "../components/CandidatesGender";
import LocationBox from "../components/LocationBox";
import SearchBox from "../components/SearchBox";
import DatePosted from "../components/DatePosted";
import Experience from "../components/Experience";
import Qualification from "../components/Qualification";

const FilterSidebar = () => {
    return (
        <div className="inner-column pd-right">
            <div className="filters-outer">
                <button
                    type="button"
                    className="btn-close text-reset close-filters show-1023"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
                {/* End .close filter */}

                <div className="filter-block">
                    <h4>Search by Keywords</h4>
                    <div className="form-group">
                        <SearchBox />
                    </div>
                </div>
                {/* <!-- Filter Block --> */}

                <div className="filter-block">
                    <h4>Location</h4>
                    <div className="form-group">
                        <LocationBox />
                    </div>

                    {/* <p>Radius around selected destination</p>
                    <DestinationRangeSlider /> */}
                </div>
                {/* <!-- Filter Block --> */}

                <div className="filter-block">
                    <h4>Category</h4>
                    <div className="form-group">
                        <Categories />
                    </div>
                </div>
                {/* <!-- Filter Block --> */}

                
                {/* <!-- Filter Block --> */}
            </div>
            {/* Filter Outer */}
        </div>
    );
};

export default FilterSidebar;
