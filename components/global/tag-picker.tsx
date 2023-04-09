import { Loader, MultiSelect } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { Hash, MagnifyingGlass } from "@phosphor-icons/react";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { EdtingsTagPickerProps } from "../../types/generics";

const EdtingsTagPicker: React.FC<EdtingsTagPickerProps> = ({ table }) => {
  const [data, setData] = useState<any>([]);
  const [searchValue, setSearchValue] = useState("");
  const [debounced] = useDebouncedValue(searchValue, 300);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropDown] = useState(false);
  const { supabaseClient } = useSessionContext();
  const store = [
    "react",
    "angular",
    "svelte",
    "vue",
    "riot",
    "next.js",
    "blitz.js",
  ];

  const getData = async () => {
    const { data, count, error } = await supabaseClient
      .from(table)
      .select("title", {
        count: "exact",
      })
      .ilike("title", `%${debounced}%`);

    if (count == 0) {
      setData([]);
    } else {
      var newData = data?.map((mapped) => {
        return mapped.title;
      });
      setData(newData);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (debounced.length > 0) {
      getData();
    }
  }, [debounced]);

  return (
    <MultiSelect
      clearSearchOnChange={true}
      shouldCreate={(query, data) => {
        if (loading == false) {
          if (searchValue.length > 0) {
            if (data.length <= 0) {
              return true;
            }
            return false;
          }
          return false;
        }
        return false;
      }}
      dropdownPosition="bottom"
      rightSection={loading ? <Loader color="blue" size="xs" /> : <div />}
      placeholder="automobilies, lamborghini"
      creatable={true}
      getCreateLabel={(query) => (loading ? null : `+ Create ${query}`)}
      onCreate={(query) => {
        const item = query;
        return item;
      }}
      mt={5}
      size="sm"
      searchable
      onSearchChange={(query) => {
        if (query !== debounced && query.length > 0) {
          setSearchValue(query);
          setLoading(true);
        } else {
          setSearchValue("");
          setLoading(false);
        }
      }}
      onKeyDown={(e) => {
        if (e.key == "Enter") {
          var datao = [...data, searchValue];
          setData(datao);
        }
      }}
      data={data}
      styles={{
        input: {
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 10,
          paddingRight: 20,
        },

        values: {
          gap: 8,
        },
      }}
    />
  );
};

export default EdtingsTagPicker;
