// @ts-check
import { test, expect } from '@playwright/test';
import usersFixture from '../test-data/usersResponse.json';

test.describe("API Verification Examples", () => {

  //1. Test to verify users endpoint is returning expected users
  // instead of page, we use built-in fixture called request
  test("Verify multiple records return against stored static response", async ({request}) => {
    
  //save raw response into a variable
  const response = await request.get('https://reqres.in/api/users?page=1');

  // parse response into JS object, with access to the actual data within the response body
  const responseBody = await response.json();

  //seeing what is stored inside
  // console.log(responseBody)

  //assert that status code is 200
  expect(response.status()).toBe(200);
  //assert that our json response body is eq to the received response body
  expect(responseBody).toEqual(usersFixture)
  });

  //2. test data for a single user line by line
  test("Verify single user line by line", async ({request}) => {
    const response = await request.get('https://reqres.in/api/users/1');
    const responseBody = await response.json();
    // console.log(responseBody)

    //assert user information
    expect(response.status()).toBe(200);
    expect(responseBody.data.id).toEqual(1);
    expect(responseBody.data.email).toEqual('george.bluth@reqres.in');
    expect(responseBody.data.first_name).toEqual('George');
    expect(responseBody.data.last_name).toEqual('Bluth');
    expect(responseBody.data.avatar).toEqual('https://reqres.in/img/faces/1-image.jpg');
  })

  //3. POST request
  test("Verify post request", async({request}) => {
    const newUser = {
      name: "Sam", 
      job: "Cook"
    };

    //create post request
    const response = await request.post('https://reqres.in/api/users', {data: newUser});
    
    //verify response code
    expect(response.status()).toEqual(201)

    const responseBody = await response.json();
    //view response body
    console.log(responseBody)

    //verify response data
    expect(responseBody.name).toBe(newUser.name);
    expect(responseBody.job).toBe(newUser.job);
  });

  //4. PUT request
  test('Verify PUT request', async ({request}) => {
    const updatedUser = {
      name: "Bob",
      job: "Architect"
    }

    //do PUT request and save response
    const response = await request.put('https://reqres.in/api/users/1', {data: updatedUser});
    const responseBody = await response.json()
    console.log(responseBody)

    //verify the response
    expect(response.status()).toBe(200);
    expect(responseBody.name).toEqual(updatedUser.name);
    expect(responseBody.job).toEqual(updatedUser.job)
  });

  //5. DELETE request
  test('Verify user is deleted', async ({request}) => {
    const response = await request.delete('https://reqres.in/api/users/1')

    expect(response.status()).toBe(204);
  });
});