package academy.formit;

import com.mongodb.*;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class MongoRepository {
    public void storeMongo(Object obj, String databaseName, String colName, String formId) throws IOException {
        try (MongoClient mongoClient = new MongoClient()) {
            MongoDatabase db = mongoClient.getDatabase(databaseName);

            MongoCollection collection = db.getCollection(colName);

            Document document = new Document()
                    .append(formId, obj);

            collection.insertOne(document);
        }
    }
    public void storeMongoWithId(Object obj, String databaseName, String colName, String formId, String id) throws IOException {
        try (MongoClient mongoClient = new MongoClient()) {
            MongoDatabase db = mongoClient.getDatabase(databaseName);

            MongoCollection collection = db.getCollection(colName);

            Document document = new Document()
                    .append("_id", id )
                    .append(formId, obj);

            collection.insertOne(document);
        }
    }

    public Document getFormById (String key) {
        try (MongoClient mongoClient = new MongoClient()) {
            MongoDatabase db = mongoClient.getDatabase("testDb");
            MongoCollection collection = db.getCollection("forms");
            FindIterable<Document> iterable = db.getCollection("forms").find(
                    new Document("_id", key));

            return iterable.first();

        }
    }

    public List<DBObject> getForms() {
        StringBuilder returnString = new StringBuilder();
        DBObject object;
        List<DBObject> objects = new ArrayList<>();

        try (MongoClient mongoClient = new MongoClient()) {
            DB db = mongoClient.getDB("testDb");

            DBCollection collection = db.getCollection("forms");
            DBCursor results = collection.find();
             object = results.one();
            System.out.println(object.toString());

            for (DBObject result : results) {
                objects.add(result);
                System.out.println(result.toString());
            }


        }
        return objects;
    }
}