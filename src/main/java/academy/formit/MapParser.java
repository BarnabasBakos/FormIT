package academy.formit;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.HashMap;


public class MapParser implements Parser {
    private Object object;

    public MapParser(Object object) {
        this.object = object;
    }

//se över typecasten
    @Override
    public Object parse() throws IOException {
        if (object instanceof String) {
            return stringToMap((String) object);
        }
        else {
            return null;
        }
    }

    private HashMap<String, Object> stringToMap(String toParse) throws IOException {
        HashMap<String, Object> result =
                new ObjectMapper().readValue(toParse, HashMap.class);
        return result;
    }
}